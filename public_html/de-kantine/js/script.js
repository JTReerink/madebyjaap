function codeBlauw() {
  var code1 = document.quiz.question1.value;
  var correct = 0;

  if (code1 == "2486") {
    setTimeout(function () { window.open("leftgame.html", "_self") }, 500);
    document.quiz.correct1.style.display = "inline";
    document.quiz.incorrect1.style.display = "none";
    document.quiz.question1.style.border = "2px solid #00E851";
  }
  else {
    document.quiz.incorrect1.style.display = "inline";
    document.quiz.question1.style.border = "2px solid #E60000";
  }
}

function codeRood() {
  var code2 = document.quiz2.coderood.value;
  var correct = 0;

  if (code2 == "7395") {
    setTimeout(function () { window.open("lock-open.html", "_self") }, 500);
    document.quiz2.correct2.style.display = "inline";
    document.quiz2.incorrect2.style.display = "none";
    document.quiz2.coderood.style.border = "2px solid #00E851";
  }
  else {
    document.quiz2.incorrect2.style.display = "inline";
    document.quiz2.coderood.style.border = "2px solid #E60000";
  }
}