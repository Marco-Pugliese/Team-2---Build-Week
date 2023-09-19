const allBtn = document.querySelectorAll(".answers button");
const conf = document.getElementById("send");

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", (e) => {
    e.preventDefault();

    const selected = document.querySelectorAll(".selectedAnswer");
    for (let y = 0; y < selected.length; y++) {
      selected[y].classList.remove("selectedAnswer");
    }
    allBtn[i].classList.toggle("selectedAnswer");
    if (allBtn[i].classList.contains("selectedAnswer")) {
      conf.classList.add("selectedBtn");
    }
  });
}
const numberOfQ = document.getElementById("question-num");
const allSection = document.getElementsByClassName("questions-wrap");
const timer = document.getElementById("timer-num");
timer.innerText = 60;
const scorripagina = () => {
  conf.classList.remove("selectedBtn");
  if (allSection[0].classList.contains("show")) {
    numberOfQ.innerText = "2";
    allSection[0].classList.remove("show");
    allSection[1].classList.add("show");
  } else if (allSection[1].classList.contains("show")) {
    numberOfQ.innerText = "3";
    allSection[1].classList.remove("show");
    allSection[2].classList.add("show");
  } else if (allSection[2].classList.contains("show")) {
    numberOfQ.innerText = "4";
    allSection[2].classList.remove("show");
    allSection[3].classList.add("show");
  } else if (allSection[3].classList.contains("show")) {
    numberOfQ.innerText = "5";
    allSection[3].classList.remove("show");
    allSection[4].classList.add("show");
  } else if (allSection[4].classList.contains("show")) {
    numberOfQ.innerText = "6";
    allSection[4].classList.remove("show");
    allSection[5].classList.add("show");
  } else if (allSection[5].classList.contains("show")) {
    numberOfQ.innerText = "7";
    allSection[5].classList.remove("show");
    allSection[6].classList.add("show");
  } else if (allSection[6].classList.contains("show")) {
    numberOfQ.innerText = "8";
    allSection[6].classList.remove("show");
    allSection[7].classList.add("show");
  } else if (allSection[7].classList.contains("show")) {
    numberOfQ.innerText = "9";
    allSection[7].classList.remove("show");
    allSection[8].classList.add("show");
  } else if (allSection[8].classList.contains("show")) {
    numberOfQ.innerText = "10";
    allSection[8].classList.remove("show");
    allSection[9].classList.add("show");
  } else if (allSection[9].classList.contains("show")) {
    allSection[9].classList.remove("show");
    allSection[10].classList.add("show");
  }
};

conf.addEventListener("click", scorripagina);
