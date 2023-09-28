const input = document.querySelector(".inputField");
const button = document.querySelector(".btnClick");
let inputAnswer = document.querySelector(".grades");

function studentGrades() {
  const score = parseFloat(input.value);
  if (score >= 0 && score <= 100) {
    let grade = "";

    if (score >= 79) {
      grade = "A";
    } else if (score >= 60 && score <= 79) {
      grade = "B";
    } else if (score >= 49 && score <= 59) {
      grade = "C";
    } else if (score >= 40 && score <= 49) {
      grade = "D";
    } else if (score <= 40) {
      grade = "E";
    }
    inputAnswer.innerHTML = `Grade = ${grade}`;
  } else {
    inputAnswer.innerHTML = "Please use valid score between 0 and 100";
  }
}

button.addEventListener("click", function () {
  studentGrades();
});
