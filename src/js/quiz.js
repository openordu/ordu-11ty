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
  
    function checkAllCorrectAnswersSelected(currentQuestionElement) {
      const correctAnswers = currentQuestionElement.getAttribute('data-answers').split(',').map(Number);
      const selectedAnswers = Array.from(currentQuestionElement.querySelectorAll('.list-group-item-success')).map((el) => Array.from(el.parentNode.children).indexOf(el));
      return JSON.stringify(correctAnswers.sort()) === JSON.stringify(selectedAnswers.sort());
    }
  
    quizContainer.addEventListener('click', (event) => {
      const target = event.target;
      if (target.tagName === 'BUTTON') {
        target.classList.remove('list-group-item-danger');
        const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
        const currentQuestionElement = target.closest('.question');
        const correctAnswers = currentQuestionElement.getAttribute('data-answers').split(',').map(Number);
        if (correctAnswers.includes(selectedIndex)) {
          target.classList.add('list-group-item-success');
          if (checkAllCorrectAnswersSelected(currentQuestionElement)) {
            score++;
            result.innerHTML = `${score}`;
            setTimeout(() => {
              currentQuestion++;
              if (currentQuestion < questions.length) {
                showQuestion();
              } else {
                quizContainer.innerHTML = '';
              }
            }, 1000);
          }
        } else {
          target.classList.add('list-group-item-danger');
        }
      }
      if (target.classList.contains('btn')) {
        const blankInput = target.closest('.question').querySelector('.blank');
        const correctAnswers = blankInput.getAttribute('data-answers').split(',').map(Number);
        const selectedOptionIndex = Array.from(target.parentNode.children).indexOf(target);
        blankInput.value = target.textContent;
        if (correctAnswers.includes(selectedOptionIndex)) {
          blankInput.classList.add('is-valid');
          if (blankInput.querySelectorAll('.is-valid').length === correctAnswers.length) {
            score++;
            result.innerHTML = `${score}`;
            setTimeout(() => {
              currentQuestion++;
              if (currentQuestion < questions.length) {
                showQuestion();
              } else {
                quizContainer.innerHTML = '';
              }
            }, 1000);
          }
        } else {
          blankInput.classList.add('is-invalid');
        }
      }
    });
  
    showQuestion();
  });
  