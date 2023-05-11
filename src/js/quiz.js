let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");
const questions = document.getElementsByClassName("question");

function showQuestion() {
    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = (i === currentQuestion) ? "block" : "none";
    }
}

quizContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
        const correctAnswer = parseInt(questions[currentQuestion].getAttribute('data-answer'));
        if (selectedIndex === correctAnswer) {
            target.classList.add('list-group-item-success');
            score++;
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    quizContainer.innerHTML = '';
                    result.innerHTML = `<h2>Your score: ${score}</h2>`;
                }
            }, 3000);
        } else {
            target.classList.add('list-group-item-danger');
            setTimeout(() => {
                target.classList.remove('list-group-item-danger');
            }, 3000);
        }
    }
});

showQuestion();
