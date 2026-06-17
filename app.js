// Theme Initialization Logic
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

// State variables
let currentWeek = "1";
let currentDay = "";
let activeQuestions = [];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let scoreCorrect = 0;
let hasChecked = false;

// DOM Elements
const landingView = document.getElementById("landing-view");
const simulatorView = document.getElementById("simulator-view");
const resultsView = document.getElementById("results-view");
const modeSelectionView = document.getElementById("mode-selection-view");
const studyView = document.getElementById("study-view");

const weekTabs = document.querySelectorAll(".week-tab");
const daysGrid = document.getElementById("days-grid");
const selectedWeekTitle = document.getElementById("selected-week-title");

// Mode Selector DOM Elements
const modeWeekDayTag = document.getElementById("mode-week-day-tag");
const btnSelectStudy = document.getElementById("btn-select-study");
const btnSelectExam = document.getElementById("btn-select-exam");

// Study DOM Elements
const studyWeekDayTag = document.getElementById("study-week-day-tag");
const studyContentContainer = document.getElementById("study-content-container");

// Simulator DOM Elements
const quizWeekDayTag = document.getElementById("quiz-week-day-tag");
const currentQNum = document.getElementById("current-q-num");
const totalQNum = document.getElementById("total-q-num");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionSubject = document.getElementById("question-subject");
const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");
const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackExplanation = document.getElementById("feedback-explanation");
const btnAction = document.getElementById("btn-action");
const btnPrevQ = document.getElementById("btn-prev-q");
const btnNextQ = document.getElementById("btn-next-q");
const questionNavGrid = document.getElementById("question-nav-grid");

// Results DOM Elements
const scoreCorrectDisplay = document.getElementById("score-correct");
const scoreTotalDisplay = document.getElementById("score-total");
const scorePercentage = document.getElementById("score-percentage");
const resultsIcon = document.getElementById("results-icon");
const resultsSubtext = document.getElementById("results-subtext");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    // Setup theme toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeToggleIcon = themeToggleBtn ? themeToggleBtn.querySelector(".theme-toggle-icon") : null;
    
    if (themeToggleIcon) {
        themeToggleIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            if (themeToggleIcon) {
                themeToggleIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
            }
        });
    }

    // Setup week tab event listeners
    weekTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            weekTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentWeek = tab.getAttribute("data-week");
            selectedWeekTitle.textContent = `Semana ${currentWeek}`;
            renderDays();
        });
    });

    // Landing view default rendering
    renderDays();

    // Navigation and Action Buttons
    document.getElementById("btn-back-to-landing").addEventListener("click", () => {
        showModeSelection(currentWeek, currentDay);
    });

    btnAction.addEventListener("click", () => {
        if (!hasChecked) {
            checkAnswer();
        } else {
            nextQuestion();
        }
    });

    document.getElementById("btn-restart-quiz").addEventListener("click", () => {
        startQuiz(currentWeek, currentDay);
    });

    document.getElementById("btn-home-from-results").addEventListener("click", () => {
        showView("landing-view");
    });

    // New Mode Selection and Study Navigation
    document.getElementById("btn-back-from-mode").addEventListener("click", () => {
        showView("landing-view");
    });

    document.getElementById("btn-back-from-study").addEventListener("click", () => {
        showModeSelection(currentWeek, currentDay);
    });

    btnSelectStudy.addEventListener("click", () => {
        startStudy(currentWeek, currentDay);
    });

    btnSelectExam.addEventListener("click", () => {
        startQuiz(currentWeek, currentDay);
    });

    document.getElementById("btn-start-exam-from-study").addEventListener("click", () => {
        startQuiz(currentWeek, currentDay);
    });

    // Prev / Next Top Buttons
    btnPrevQ.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });

    btnNextQ.addEventListener("click", () => {
        if (currentQuestionIndex < activeQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });
}

// Render days grid depending on active week
function renderDays() {
    daysGrid.innerHTML = "";
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const weekKey = `Semana ${currentWeek}`;
    
    days.forEach((day, index) => {
        const dayCard = document.createElement("div");
        dayCard.className = "day-card";
        
        const qList = (questionsData[weekKey] && questionsData[weekKey][day]) ? questionsData[weekKey][day] : [];
        const hasQuestions = qList.length > 0;
        
        dayCard.innerHTML = `
            <div class="day-name">${day}</div>
            <div class="day-status ${hasQuestions ? 'has-questions' : ''}">
                ${hasQuestions ? `⚡ ${qList.length} Preguntas` : 'Próximamente'}
            </div>
        `;
        
        dayCard.addEventListener("click", () => {
            currentDay = day;
            showModeSelection(currentWeek, day);
        });
        
        daysGrid.appendChild(dayCard);
    });
}

// Show a specific section view and hide others
function showView(viewId) {
    landingView.classList.remove("active");
    simulatorView.classList.remove("active");
    resultsView.classList.remove("active");
    modeSelectionView.classList.remove("active");
    studyView.classList.remove("active");
    
    document.getElementById(viewId).classList.add("active");
}

// Start a quiz for a specific week and day
function startQuiz(week, day) {
    const weekKey = `Semana ${week}`;
    const allQuestions = (questionsData[weekKey] && questionsData[weekKey][day]) ? questionsData[weekKey][day] : [];
    
    // Reset answers and state
    activeQuestions = allQuestions.map(q => ({
        ...q,
        userSelected: null
    }));
    
    currentQuestionIndex = 0;
    scoreCorrect = 0;
    hasChecked = false;
    selectedOptionIndex = null;
    
    quizWeekDayTag.textContent = `Semana ${week} - ${day}`;
    showView("simulator-view");
    renderQuestionNavGrid();
    loadQuestion();
}

// Load current question in the DOM
function loadQuestion() {
    optionsGrid.innerHTML = "";

    // If day has no questions
    if (activeQuestions.length === 0) {
        questionSubject.textContent = "Sin preguntas";
        questionText.textContent = `No hay preguntas cargadas para el día ${currentDay} de la Semana ${currentWeek}.`;
        
        const infoMsg = document.createElement("div");
        infoMsg.style.color = "var(--text-secondary)";
        infoMsg.style.fontSize = "14px";
        infoMsg.style.textAlign = "center";
        infoMsg.style.padding = "20px 0";
        infoMsg.innerHTML = `
            <p>Puedes rellenar el archivo <code>questions.js</code> para añadir preguntas para este día.</p>
            <p style="margin-top:10px;">¡Prueba el <b>Lunes de la Semana 1</b> para ver el simulador en acción!</p>
        `;
        optionsGrid.appendChild(infoMsg);
        
        btnAction.disabled = true;
        progressBarFill.style.width = "0%";
        currentQNum.textContent = "0";
        totalQNum.textContent = "0";
        btnPrevQ.disabled = true;
        btnNextQ.disabled = true;
        questionNavGrid.innerHTML = "";
        return;
    }

    // Set progress
    const total = activeQuestions.length;
    currentQNum.textContent = currentQuestionIndex + 1;
    totalQNum.textContent = total;
    progressBarFill.style.width = `${(currentQuestionIndex / total) * 100}%`;

    const q = activeQuestions[currentQuestionIndex];
    questionSubject.textContent = q.subject || "General";
    
    // Apply subject class colors
    questionSubject.className = "question-subject-badge";
    const subjStr = (q.subject || "").toLowerCase();
    if (subjStr.includes("lengua")) {
        questionSubject.classList.add("subj-lengua");
    } else if (subjStr.includes("historia")) {
        questionSubject.classList.add("subj-historia");
    } else if (subjStr.includes("verbal")) {
        questionSubject.classList.add("subj-verbal");
    } else if (subjStr.includes("num")) {
        questionSubject.classList.add("subj-numerico");
    }
    
    questionText.textContent = q.question;

    // Set Prev/Next buttons disabled state
    btnPrevQ.disabled = (currentQuestionIndex === 0);
    btnNextQ.disabled = (currentQuestionIndex === total - 1);

    // Determine if question was already answered
    const alreadyAnswered = (q.userSelected !== null && q.userSelected !== undefined);
    hasChecked = alreadyAnswered;
    selectedOptionIndex = alreadyAnswered ? q.userSelected : null;

    if (alreadyAnswered) {
        feedbackBox.classList.remove("hidden");
        const isCorrect = (q.userSelected === q.correct);
        feedbackBox.className = "feedback-box " + (isCorrect ? "correct" : "incorrect");
        feedbackTitle.textContent = isCorrect ? "¡Respuesta Correcta! ✓" : "Respuesta Incorrecta ✗";
        feedbackExplanation.textContent = q.explanation || "No hay explicación disponible para este tema.";
        
        const isLast = (currentQuestionIndex === total - 1);
        btnAction.disabled = false;
        btnAction.textContent = isLast ? "Ver Resultados" : "Siguiente Pregunta";
    } else {
        feedbackBox.classList.add("hidden");
        feedbackBox.className = "feedback-box hidden";
        btnAction.disabled = true;
        btnAction.textContent = "Comprobar Respuesta";
    }

    // Render option buttons
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((option, idx) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "option-btn";
        
        if (alreadyAnswered) {
            optionBtn.classList.add("disabled");
            if (idx === q.correct) {
                optionBtn.classList.add("correct-choice");
            } else if (idx === q.userSelected) {
                optionBtn.classList.add("incorrect-choice");
            }
        } else {
            optionBtn.addEventListener("click", () => {
                if (hasChecked) return;
                
                const prevSelected = optionsGrid.querySelector(".option-btn.selected");
                if (prevSelected) prevSelected.classList.remove("selected");
                
                optionBtn.classList.add("selected");
                selectedOptionIndex = idx;
                btnAction.disabled = false;
            });
        }
        
        optionBtn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${option}</span>
        `;
        optionsGrid.appendChild(optionBtn);
    });

    // Update Sidebar Navigation Grid highlights
    const navButtons = questionNavGrid.querySelectorAll(".nav-q-btn");
    navButtons.forEach((btn, idx) => {
        btn.className = "nav-q-btn";
        if (idx === currentQuestionIndex) {
            btn.classList.add("current");
        }
        if (activeQuestions[idx].userSelected !== null && activeQuestions[idx].userSelected !== undefined) {
            btn.classList.add("answered");
        }
    });
}

// Check if answer is correct
function checkAnswer() {
    if (selectedOptionIndex === null || hasChecked) return;
    
    hasChecked = true;
    const q = activeQuestions[currentQuestionIndex];
    q.userSelected = selectedOptionIndex; // Save choice
    const isCorrect = (selectedOptionIndex === q.correct);
    
    // Highlight choices
    const optionButtons = optionsGrid.querySelectorAll(".option-btn");
    optionButtons.forEach((btn, idx) => {
        btn.classList.add("disabled");
        if (idx === q.correct) {
            btn.classList.add("correct-choice");
        } else if (idx === selectedOptionIndex) {
            btn.classList.add("incorrect-choice");
        }
    });
    
    // Update Feedback Box
    feedbackBox.classList.remove("hidden");
    if (isCorrect) {
        feedbackBox.className = "feedback-box correct";
        feedbackTitle.textContent = "¡Respuesta Correcta! ✓";
    } else {
        feedbackBox.className = "feedback-box incorrect";
        feedbackTitle.textContent = "Respuesta Incorrecta ✗";
    }
    feedbackExplanation.textContent = q.explanation || "No hay explicación disponible para este tema.";
    
    // Update active button in navigation grid
    const navBtn = document.getElementById(`nav-q-${currentQuestionIndex}`);
    if (navBtn) {
        navBtn.classList.add("answered");
    }
    
    // Update Action Button
    const isLast = (currentQuestionIndex === activeQuestions.length - 1);
    btnAction.textContent = isLast ? "Ver Resultados" : "Siguiente Pregunta";
}

// Advance quiz
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Display results screen
function showResults() {
    progressBarFill.style.width = "100%";
    showView("results-view");
    
    const total = activeQuestions.length;
    // Calculate final score dynamically
    const scoreCorrect = activeQuestions.filter(q => q.userSelected === q.correct).length;
    scoreCorrectDisplay.textContent = scoreCorrect;
    scoreTotalDisplay.textContent = total;
    
    const percentage = Math.round((scoreCorrect / total) * 100);
    scorePercentage.textContent = `${percentage}% de respuestas correctas`;
    
    if (percentage === 100) {
        resultsIcon.textContent = "🏆";
        resultsSubtext.textContent = "¡Impecable! Has respondido todo de forma correcta.";
        scorePercentage.style.color = "var(--success)";
    } else if (percentage >= 70) {
        resultsIcon.textContent = "🎉";
        resultsSubtext.textContent = "¡Muy bien! Estás listo para tus exámenes.";
        scorePercentage.style.color = "var(--success)";
    } else if (percentage >= 40) {
        resultsIcon.textContent = "📚";
        resultsSubtext.textContent = "Buen intento, pero te recomendamos repasar los temas de estudio.";
        scorePercentage.style.color = "var(--primary)";
    } else {
        resultsIcon.textContent = "✍️";
        resultsSubtext.textContent = "Sigue estudiando. Repasa las tablas del plan y vuelve a intentarlo.";
        scorePercentage.style.color = "var(--error)";
    }
}

// Show Mode Selection (Estudiar / Examen)
function showModeSelection(week, day) {
    modeWeekDayTag.textContent = `Semana ${week} - ${day}`;
    showView("mode-selection-view");
}

// Start Study Session
function startStudy(week, day) {
    studyWeekDayTag.textContent = `Semana ${week} - ${day}`;
    showView("study-view");
    loadStudyContent(week, day);
}

// Load Study Material into the DOM
function loadStudyContent(week, day) {
    studyContentContainer.innerHTML = "";
    const weekKey = `Semana ${week}`;
    const topics = (studyData[weekKey] && studyData[weekKey][day]) ? studyData[weekKey][day] : [];

    if (topics.length === 0) {
        const noStudyMsg = document.createElement("div");
        noStudyMsg.className = "study-topic-card";
        noStudyMsg.style.textAlign = "center";
        noStudyMsg.innerHTML = `
            <h3 class="study-topic-title" style="color:var(--text-secondary); margin-bottom:10px;">Sin Material de Estudio</h3>
            <p style="color:var(--text-muted); font-size:14px;">No hay temas cargados para repasar en este día.</p>
            <p style="color:var(--text-muted); font-size:14px; margin-top:10px;">Edita la base de datos <code>questions.js</code> en el objeto <code>studyData</code> para agregar contenido.</p>
            <p style="color:var(--primary); font-size:13.5px; font-weight:600; margin-top:15px;">👉 ¡Prueba con el Lunes de la Semana 1 para ver el módulo de estudio completo!</p>
        `;
        studyContentContainer.appendChild(noStudyMsg);
        return;
    }

    topics.forEach(t => {
        const topicCard = document.createElement("div");
        topicCard.className = "study-topic-card";

        // Generate Exercises HTML
        let exercisesHtml = "";
        if (t.exercises && t.exercises.length > 0) {
            exercisesHtml = `
                <div class="study-section-title">Ejercicios Resueltos</div>
                <div class="exercises-box">
                    ${t.exercises.map(ex => `
                        <div class="exercise-item">
                            <div class="exercise-problem"><b>Problema:</b><br>${formatExerciseProblem(ex.problem)}</div>
                            <div class="exercise-solution">
                                <span class="exercise-solution-tag">✓ Solución Paso a Paso</span>
                                ${formatExerciseSolution(ex.solution)}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Generate Image block
        let imageHtml = "";
        if (t.image) {
            imageHtml = `
                <div class="study-image-container">
                    <img src="${t.image}" alt="${t.topic}" class="study-img" />
                </div>
            `;
        } else {
            // Display a beautiful visual placeholder instructing how to load images
            imageHtml = `
                <div class="study-image-container">
                    <div class="study-image-placeholder">
                        <span class="placeholder-icon">📷</span>
                        <span>Espacio para imagen de apoyo</span>
                        <span style="font-size:11px; margin-top:4px;">Para añadir una imagen edita <code>questions.js</code> y pon la ruta en:</span>
                        <span class="placeholder-instruction">"image": "ruta/imagen.jpg"</span>
                    </div>
                </div>
            `;
        }

        let subjectClass = "";
        const topicSubjStr = (t.subject || "").toLowerCase();
        if (topicSubjStr.includes("lengua")) subjectClass = "subj-lengua";
        else if (topicSubjStr.includes("historia")) subjectClass = "subj-historia";
        else if (topicSubjStr.includes("verbal")) subjectClass = "subj-verbal";
        else if (topicSubjStr.includes("num")) subjectClass = "subj-numerico";

        // Generate Video block
        let videoHtml = "";
        if (t.videoUrl) {
            videoHtml = `
                <div class="study-video-box">
                    <span class="video-icon">🎥</span>
                    <div class="video-info">
                        <span class="video-title">Video Recomendado del Tema</span>
                        <a href="${t.videoUrl}" target="_blank" class="video-link">Ver video explicativo →</a>
                    </div>
                </div>
            `;
        } else {
            videoHtml = `
                <div class="study-video-box no-video">
                    <span class="video-icon">🎥</span>
                    <div class="video-info">
                        <span class="video-title">¿Tienes un video para este tema?</span>
                        <span class="video-instruction">Puedes editar <code>questions.js</code> y añadir: <code>"videoUrl": "tu_enlace_aqui"</code></span>
                    </div>
                </div>
            `;
        }

        // Split concept by double newline to render paragraphs properly
        const paragraphsHtml = t.concept
            ? t.concept.split(/\n\n+/).map(pText => `<p class="concept-text" style="margin-bottom: 12px;">${pText.trim()}</p>`).join('')
            : "";

        topicCard.innerHTML = `
            <div class="study-topic-header">
                <h3 class="study-topic-title">${t.topic}</h3>
                <span class="question-subject-badge ${subjectClass}">${t.subject}</span>
            </div>
            
            <div>
                <div class="study-section-title">Concepto Clave</div>
                <div class="concept-box">
                    ${paragraphsHtml}
                    ${imageHtml}
                </div>
            </div>

            ${exercisesHtml}
            ${videoHtml}
        `;

        studyContentContainer.appendChild(topicCard);
    });
}

// Render Sidebar Question Navigator Map Grid
function renderQuestionNavGrid() {
    questionNavGrid.innerHTML = "";
    activeQuestions.forEach((q, idx) => {
        const navBtn = document.createElement("button");
        navBtn.className = "nav-q-btn";
        navBtn.textContent = idx + 1;
        navBtn.id = `nav-q-${idx}`;
        
        navBtn.addEventListener("click", () => {
            currentQuestionIndex = idx;
            loadQuestion();
        });
        
        questionNavGrid.appendChild(navBtn);
    });
}

// Helper to format exercise problems with structured options
function formatExerciseProblem(problemText) {
    if (!problemText) return "";
    
    const lines = problemText.split(/\r?\n/);
    let html = "";
    let inOptionsList = false;
    
    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) {
            html += "<div style='height:8px;'></div>";
            return;
        }
        
        // Match option lines like "a) ..." or "b) ..."
        const match = trimmed.match(/^([a-d])\)\s*(.+)$/i);
        if (match) {
            if (!inOptionsList) {
                html += '<div class="exercise-options-list">';
                inOptionsList = true;
            }
            const letter = match[1].toLowerCase();
            const optionText = match[2];
            html += `
                <div class="exercise-option-item">
                    <span class="exercise-option-badge">${letter}</span>
                    <span class="exercise-option-text">${optionText}</span>
                </div>
            `;
        } else {
            if (inOptionsList) {
                html += '</div>';
                inOptionsList = false;
            }
            html += `<p class="exercise-text-line">${trimmed}</p>`;
        }
    });
    
    if (inOptionsList) {
        html += '</div>';
    }
    
    return html;
}

// Helper to format exercise solutions with structured steps
function formatExerciseSolution(solutionText) {
    if (!solutionText) return "";
    
    const lines = solutionText.split(/\r?\n/);
    let html = "";
    let inStepsList = false;
    
    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) {
            html += "<div style='height:6px;'></div>";
            return;
        }
        
        // Match step lines like "1. ..." or "2. ..."
        const match = trimmed.match(/^(\d+)\.\s*(.+)$/);
        if (match) {
            if (!inStepsList) {
                html += '<div class="exercise-steps-list">';
                inStepsList = true;
            }
            const stepNum = match[1];
            const stepText = match[2];
            html += `
                <div class="exercise-step-item">
                    <span class="exercise-step-number">${stepNum}</span>
                    <span class="exercise-step-text">${stepText}</span>
                </div>
            `;
        } else {
            if (inStepsList) {
                html += '</div>';
                inStepsList = false;
            }
            html += `<p class="exercise-solution-text-line">${trimmed}</p>`;
        }
    });
    
    if (inStepsList) {
        html += '</div>';
    }
    
    return html;
}

