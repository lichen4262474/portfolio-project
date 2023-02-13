var noneOfAbove = function () {
  let ele = document.getElementsByName("checkbox");
  if (ele[ele.length - 1].checked == true) {
    for (let i = 0; i < ele.length - 1; i++) {
      ele[i].checked = false;
    }
  }
};

var surveyResult = function (e) {
  e.preventDefault();
  let ele = document.getElementsByName("checkbox");
  console.log(ele);
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      resultArray[i] += 1;
      voteSum += 1;
    }
  }

  let progress = document.getElementsByClassName("progress-bar");
  console.log(progress);
  for (let i = 0; i < ele.length; i++) {
    progress[i].setAttribute(
      "style",
      "width: " + Math.round((resultArray[i] / voteSum) * 100) + "%"
    );
    progress[i].textContent =
      Math.round((resultArray[i] / voteSum) * 100) + "%";
  }
};

var resultArray = [0, 0, 0, 0, 0, 0];
var voteSum = 0;
let surveyForm = document.getElementById("survey-form");
document.addEventListener("change", noneOfAbove);
surveyForm.addEventListener("submit", surveyResult);
