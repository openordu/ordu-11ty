document.addEventListener("DOMContentLoaded", function () {
  let currentQuestion = 0;
  const parentContainer = document.getElementById("parentContainer");
  const quizContainer = parentContainer.querySelector("#quiz");
  const result = parentContainer.querySelector("#score");
  const questions = parentContainer.getElementsByClassName("question");

  function initQuestions() {
    result.innerHTML = `${currentQuestion}`;
    for (let i = 0; i < questions.length; i++) {
      questions[i].style.display = i === currentQuestion ? "block" : "none";
    }
  }

  function showQuestion() {
    for (let i = 0; i < questions.length; i++) {
      questions[i].style.display = i === currentQuestion ? "block" : "none";
      if (currentQuestion === i) {
        result.innerHTML = `${i}`;
      }
    }
  }

  function checkProgress(target) {
    const question = questions[currentQuestion];
    const qtype = question.getAttribute("data-qtype");

    switch (qtype) {
      case "match":
        matched = Array.from(question.querySelectorAll('.list-group-item-secondary:not([disabled])'));
        if (matched.length === 2) {
          const firstIndex = Array.from(matched[0].parentNode.children).indexOf(matched[0]);
          const secondIndex = Array.from(matched[1].parentNode.children).indexOf(matched[1]);
          quizContainer.classList.add(`${firstIndex}-${secondIndex}`)
          const correctAnswers = question.getAttribute("data-answers").split(",").map(Number);
          const firstIsCorrect = correctAnswers.indexOf(firstIndex) !== -1 && correctAnswers.indexOf(firstIndex) + 1 === correctAnswers.indexOf(secondIndex);
          const secondIsCorrect = correctAnswers.indexOf(secondIndex) !== -1 && correctAnswers.indexOf(secondIndex) - 1 === correctAnswers.indexOf(firstIndex);
          if (firstIsCorrect || secondIsCorrect) {
            matched[0].classList.add("list-group-item-primary");
            matched[1].classList.add("list-group-item-primary");
            matched[0].disabled = true;
            matched[1].disabled = true;
          } else {
            matched[0].classList.add("list-group-item-danger");
            matched[1].classList.add("list-group-item-danger");
            setTimeout(() => {
              matched[0].classList.remove("list-group-item-danger");
              matched[1].classList.remove("list-group-item-danger");
              matched[0].classList.remove("list-group-item-secondary");
              matched[1].classList.remove("list-group-item-secondary");
            }, 3000);
            return;
          }
        }
        const allMatched = Array.from(question.querySelectorAll('.btn')).every(btn => btn.disabled);
        if (allMatched) {
          setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
              showQuestion();
            } else {
              result.innerHTML = `${questions.length}`;
              quizContainer.innerHTML = "";
            }
          }, 1000);
        }
        break;
      case "multiple-choice":
        if (target) {
            const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
            const correctAnswers = question.getAttribute("data-answers")
                .split(",")
                .map(Number);

            const allCorrectAnswersSelected = Array.from(target.parentNode.children)
            .filter(child => child.classList.contains("list-group-item-primary"))
            .length === correctAnswers.length;
          
          if (allCorrectAnswersSelected) {
            setTimeout(() => {
              currentQuestion++;
              if (currentQuestion < questions.length) {
                showQuestion();
              } else {
                result.innerHTML = `${questions.length}`;
                quizContainer.innerHTML = "";
              }
            }, 1000);
          }
        }
        break;
      case "fill-in-the-blank":
        const userAnswers = Array.from(question.querySelectorAll(".blank"))
          .map(input => input.value.trim());
        const correctAnswers = Array.from(question.querySelectorAll(".blank"))
          .map(input => input.getAttribute("data-answer").trim());
        if (JSON.stringify(userAnswers) === JSON.stringify(correctAnswers)) {
          target.classList.add("list-group-item-primary");
          setTimeout(() => {
              currentQuestion++;
              if (currentQuestion < questions.length) {
                  showQuestion();
              } else {
                  result.innerHTML = `${questions.length}`;
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
      case "match":
        target.classList.add("list-group-item-secondary");
        // checkProgress(target);
        break;
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
    quizContainer.classList.add(qtype);
  });

  // showQuestion();
  initQuestions();
});