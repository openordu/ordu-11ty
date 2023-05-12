document.addEventListener("DOMContentLoaded", function() {
    let currentQuestion = 0;
    let score = 0;
    const parentContainer = document.getElementById("parentContainer");
    const quizContainer = parentContainer.querySelector("#quiz");
    const nextBtn = parentContainer.querySelector("#nextBtn");
    const result = parentContainer.querySelector("#score");
    const questions = parentContainer.getElementsByClassName("question");
  
    function showQuestion() {
      for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = (i === currentQuestion) ? "block" : "none";
      }
    }
  
    quizContainer.addEventListener('click', (event) => {
      const target = event.target;
      if (target.tagName === 'BUTTON') {
        target.classList.remove('list-group-item-danger');
        const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
        const correctAnswer = parseInt(questions[currentQuestion].getAttribute('data-answer'));
        if (selectedIndex === correctAnswer) {
          score++;
          result.innerHTML = `${score}`;
          target.classList.add('list-group-item-success');
          setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
              showQuestion();
            } else {
              quizContainer.innerHTML = '';
            }
          }, 3000);
        } else {
          target.classList.add('list-group-item-danger');
        }
      }
    });
  
    showQuestion();
  });  