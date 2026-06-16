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
    
    activeQuestions = [...allQuestions];
    currentQuestionIndex = 0;
    scoreCorrect = 0;
    hasChecked = false;
    selectedOptionIndex = null;
    
    quizWeekDayTag.textContent = `Semana ${week} - ${day}`;
    showView("simulator-view");
    loadQuestion();
}

// Load current question in the DOM
function loadQuestion() {
    // Reset state
    selectedOptionIndex = null;
    hasChecked = false;
    btnAction.disabled = true;
    btnAction.textContent = "Comprobar Respuesta";
    feedbackBox.classList.add("hidden");
    feedbackBox.className = "feedback-box hidden"; // Reset class names
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
        return;
    }

    // Set progress
    const total = activeQuestions.length;
    currentQNum.textContent = currentQuestionIndex + 1;
    totalQNum.textContent = total;
    progressBarFill.style.width = `${(currentQuestionIndex / total) * 100}%`;

    const q = activeQuestions[currentQuestionIndex];
    questionSubject.textContent = q.subject || "General";
    questionText.textContent = q.question;

    // Render option buttons
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((option, idx) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "option-btn";
        optionBtn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${option}</span>
        `;
        
        optionBtn.addEventListener("click", () => {
            if (hasChecked) return; // Disallow changes after checking
            
            // Remove previous selections
            const prevSelected = optionsGrid.querySelector(".option-btn.selected");
            if (prevSelected) prevSelected.classList.remove("selected");
            
            optionBtn.classList.add("selected");
            selectedOptionIndex = idx;
            btnAction.disabled = false;
        });
        
        optionsGrid.appendChild(optionBtn);
    });
}

// Check if answer is correct
function checkAnswer() {
    if (selectedOptionIndex === null || hasChecked) return;
    
    hasChecked = true;
    const q = activeQuestions[currentQuestionIndex];
    const isCorrect = (selectedOptionIndex === q.correct);
    
    if (isCorrect) {
        scoreCorrect++;
    }
    
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
        feedbackBox.classList.add("correct");
        feedbackTitle.textContent = "¡Respuesta Correcta! ✓";
    } else {
        feedbackBox.classList.add("incorrect");
        feedbackTitle.textContent = "Respuesta Incorrecta ✗";
    }
    feedbackExplanation.textContent = q.explanation || "No hay explicación disponible para este tema.";
    
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
                            <div class="exercise-problem"><b>Problema:</b> ${ex.problem}</div>
                            <div class="exercise-solution">
                                <span class="exercise-solution-tag">Solución:</span>${ex.solution.replace(/\n/g, '<br>')}
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

        topicCard.innerHTML = `
            <div class="study-topic-header">
                <h3 class="study-topic-title">${t.topic}</h3>
                <span class="question-subject-badge">${t.subject}</span>
            </div>
            
            <div>
                <div class="study-section-title">Concepto Clave</div>
                <div class="concept-box">
                    <p class="concept-text">${t.concept}</p>
                    ${imageHtml}
                </div>
            </div>

            ${exercisesHtml}
        `;

        studyContentContainer.appendChild(topicCard);
    });
}
