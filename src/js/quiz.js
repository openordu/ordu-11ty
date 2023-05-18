document.addEventListener("DOMContentLoaded", function () {
  let currentQuestion = 0;
  let score = 0;
  const parentContainer = document.getElementById("parentContainer");
  const quizContainer = parentContainer.querySelector("#quiz");
  const result = parentContainer.querySelector("#score");
  const questions = parentContainer.getElementsByClassName("question");

  function showQuestion() {
    for (let i = 0; i < questions.length; i++) {
      questions[i].style.display = i === currentQuestion ? "block" : "none";
    }
  }

  function checkProgress(target) {
    const question = questions[currentQuestion];
    const qtype = question.getAttribute("data-qtype");

    switch (qtype) {
      case "multiple-choice":
        if (target) {
            const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
            const correctAnswers = question.getAttribute("data-answers")
                .split(",")
                .map(Number);

            if (correctAnswers.includes(selectedIndex)) {
                score++;
                result.innerHTML = `${score}`;
                target.classList.add("list-group-item-primary");
            } else {
                target.classList.add("list-group-item-danger");
            }

            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    quizContainer.innerHTML = "";
                }
            }, 1000);
        }
        break;
      case "fill-in-the-blank":
        const userAnswers = Array.from(question.querySelectorAll(".blank"))
          .map(input => input.value.trim());
        const correctAnswers = Array.from(question.querySelectorAll(".blank"))
          .map(input => input.getAttribute("data-answer").trim());
        if (JSON.stringify(userAnswers) === JSON.stringify(correctAnswers)) {
          target.classList.add("list-group-item-primary");
          score++;
          result.innerHTML = `${score}`;
          setTimeout(() => {
              currentQuestion++;
              if (currentQuestion < questions.length) {
                  showQuestion();
              } else {
                  quizContainer.innerHTML = "";
              }
          }, 1000);
        } else {
          target.classList.add("list-group-item-danger");
        }
        break;
    }
}


  quizContainer.addEventListener("click", (event) => {
    const target = event.target;
    const question = target.closest(".question");
    const qtype = question.getAttribute("data-qtype");


    switch (qtype) {
      case "multiple-choice":
        if (target.tagName === "BUTTON") {
          const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
          const correctAnswers = question.getAttribute("data-answers")
            .split(",")
            .map(Number);
          if (correctAnswers.includes(selectedIndex)) {
            target.classList.add("list-group-item-primary");
          } else {
            target.classList.add("list-group-item-danger");
          }
        }
        break;
      case "fill-in-the-blank":
        if (target.classList.contains("btn")) {
          const blankInputs = Array.from(question.querySelectorAll(".blank"));
          const selectedOption = target.textContent;
          let blankInput = blankInputs.find(input => input.value === "");
          if (blankInput) {
            blankInput.value = selectedOption;
            blankInput.classList.remove("blank");
            const correctAnswer = blankInput.getAttribute("data-answer");
            if (selectedOption === correctAnswer) {
              target.classList.add("list-group-item-primary");
              blankInput.classList.remove("is-invalid");
              break;
            } else {
              target.classList.add("list-group-item-danger");
              blankInput.classList.add("is-invalid");
            }
          }
        }
        if (target.classList.contains("form-control-inline")) {
          const selectedOption = target.value;
          target.value = "";
          target.classList.add("blank");
          const correspondingButton = Array.from(question.querySelectorAll(".btn"))
            .find(button => button.textContent === selectedOption);
          if (correspondingButton) {
            correspondingButton.classList.remove("list-group-item-primary");
          }
        }
        break;
    }
    checkProgress(target);
  });

  showQuestion();
});