const fs = require('fs');
const content = fs.readFileSync('/home/fishiedev/Escritorio/Anticipados-Simulador-Uleam/questions.js', 'utf8');

// A bit dangerous, but it's local and we trust the file (it's user's data)
let questionsData;
try {
    eval(content + '\n; questionsData = questionsData;');
} catch(e) {
    console.error("Eval error", e);
}

let totalQuestions = 0;
let errors = [];

for (const week in questionsData) {
    for (const day in questionsData[week]) {
        const questions = questionsData[week][day];
        questions.forEach(q => {
            totalQuestions++;
            if (q.correct < 0 || q.correct >= q.options.length) {
                errors.push(`ID ${q.id} (${week}-${day}): correct index ${q.correct} out of bounds.`);
            }
        });
    }
}
console.log(`Total questions: ${totalQuestions}`);
console.log(`Errors found: ${errors.length}`);
if (errors.length > 0) {
    console.log(errors.slice(0, 10));
}
