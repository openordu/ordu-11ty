document.addEventListener("DOMContentLoaded", function () {
    let currentQuestion = 0;
    let score = 0;
    const parentContainer = document.getElementById("parentContainer");
    const quizContainer = parentContainer.querySelector("#quiz");
    const result = parentContainer.querySelector("#score");
    const questions = parentContainer.getElementsByClassName("question");
    let correctAnswersSelected = new Set();
  
    function showQuestion() {
      for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = i === currentQuestion ? "block" : "none";
      }
      correctAnswersSelected.clear();
    }
  
    function checkProgress() {
      const correctAnswers = questions[currentQuestion]
        .getAttribute("data-answers")
        .split(",")
        .map(Number);
  
      if (correctAnswers.length === correctAnswersSelected.size) {
        score ++;
        result.innerHTML = `${score}`;
        setTimeout(() => {
          currentQuestion++;
          if (currentQuestion < questions.length) {
            showQuestion();
          } else {
            quizContainer.innerHTML = "";
          }
        }, 1000);
      }
    }
  
    quizContainer.addEventListener("click", (event) => {
      const target = event.target;
      if (target.tagName === "BUTTON") {
        const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
        const correctAnswers = questions[currentQuestion]
          .getAttribute("data-answers")
          .split(",")
          .map(Number);
  
        if (correctAnswers.includes(selectedIndex)) {
          target.classList.add("list-group-item-primary");
          correctAnswersSelected.add(selectedIndex);
          checkProgress();
        } else {
          target.classList.add("list-group-item-danger");
        }
      }
      if (target.classList.contains("btn")) {
        const blankInputs = Array.from(target.closest(".question").querySelectorAll(".blank"));
        const selectedOption = target.textContent;
        let blankInput = blankInputs.find(input => input.value === "");
    
        if (blankInput) {
          blankInput.value = selectedOption;
          blankInput.classList.remove("blank");
    
          const correctAnswers = blankInput.getAttribute("data-answers").split(",");
          if (correctAnswers.includes(selectedOption)) {
            correctAnswersSelected.add(selectedOption);
            checkProgress();
          } else {
            blankInput.classList.add("is-invalid");
          }
        }
      }
    
      if (target.classList.contains("form-control-inline")) {
        target.value = "";
        target.classList.add("blank");
      }
    });
  
    showQuestion();
  });
  