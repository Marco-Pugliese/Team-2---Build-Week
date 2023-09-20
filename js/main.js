const allBtn = document.querySelectorAll(".answers button");
const conf = document.getElementById("send");
let timeRun = 0; // Inizializza la variabile del timer
let finish = document.getElementById("timer-wrap-cover")
let circle = document.querySelector(".circle");






// Restituisci il timer a 0
function resetTimer() {
  clearInterval(interval); // Interrompi il timer esistente
  timeRun = 0;
  countdownNumberEl.textContent = timeRun;
}

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    const selected = document.querySelectorAll(".selectedAnswer");
    for (let y = 0; y < selected.length; y++) {
      selected[y].classList.remove("selectedAnswer");
    }
    allBtn[i].classList.toggle("selectedAnswer");
    allBtn[i].classList.add("chosen");
    if (allBtn[i].classList.contains("selectedAnswer")) {
      conf.classList.add("selectedBtn");
      resetTimer();
    }
  });
}
let scoreBenchmark = 0;
conf.addEventListener("click", () => {
  for (let i = 0; i < allBtn.length; i++) {
    if (allBtn[i].className === "correct chosen") {
      scoreBenchmark++;
      allBtn[i].classList.remove("chosen");
      
    }
  }
  console.log(scoreBenchmark);
});

const numberOfQ = document.getElementById("question-num");
const allSection = document.getElementsByClassName("questions-wrap");

const timerNum = document.getElementById("timer-num");

timerNum.innerText = 30;

const startCountdown = () => {
  const timerElement = document.getElementById("timer-num");
  seconds = 30;

  function updateTimer() {
    timerElement.textContent = seconds;
    seconds--;
    for (let i = 0; i < 10; i++) {
      if (seconds < 0 && allSection[i]) {
        clearInterval(interval);
        scorripagina();
        startCountdown();
      } else if (allSection[10].classList.contains("show")) {
        seconds = 30;
      }
      if (seconds < 10) {
        circle.style.borderTopColor = "red";
      }

      if (seconds > 10) {
        circle.style.borderTopColor = "rgb(3, 207, 207)";
      }
      
    }
  }
  updateTimer();
  const interval = setInterval(updateTimer, 1000);
};

startCountdown();




const scorripagina = () => {
  if (allSection[0].classList.contains("show")) {
    numberOfQ.innerText = "2";
    allSection[0].classList.remove("show");
    allSection[1].classList.add("show");
    seconds = 30;
  } else if (allSection[1].classList.contains("show")) {
    numberOfQ.innerText = "3";
    allSection[1].classList.remove("show");
    allSection[2].classList.add("show");
    seconds = 30;
  } else if (allSection[2].classList.contains("show")) {
    numberOfQ.innerText = "4";
    allSection[2].classList.remove("show");
    allSection[3].classList.add("show");
    seconds = 30;
  } else if (allSection[3].classList.contains("show")) {
    numberOfQ.innerText = "5";
    allSection[3].classList.remove("show");
    allSection[4].classList.add("show");
    seconds = 30;
  } else if (allSection[4].classList.contains("show")) {
    numberOfQ.innerText = "6";
    allSection[4].classList.remove("show");
    allSection[5].classList.add("show");
    seconds = 30;
  } else if (allSection[5].classList.contains("show")) {
    numberOfQ.innerText = "7";
    allSection[5].classList.remove("show");
    allSection[6].classList.add("show");
    seconds = 30;
  } else if (allSection[6].classList.contains("show")) {
    numberOfQ.innerText = "8";
    allSection[6].classList.remove("show");
    allSection[7].classList.add("show");
    seconds = 30;
  } else if (allSection[7].classList.contains("show")) {
    numberOfQ.innerText = "9";
    allSection[7].classList.remove("show");
    allSection[8].classList.add("show");
    seconds = 30;
  } else if (allSection[8].classList.contains("show")) {
    numberOfQ.innerText = "10";
    allSection[8].classList.remove("show");
    allSection[9].classList.add("show");
    seconds = 30;
  } else if (allSection[9].classList.contains("show")) {
    allSection[9].classList.remove("show");
    allSection[10].classList.add("show");
    const timerAll = document.getElementById("timer-wrap");
    timerAll.style.display = "none";
    conf.style.display = "none";
    finish.style.display = "none";
  }
  conf.classList.remove("selectedBtn");
};

conf.addEventListener("click", scorripagina);

let countdownNumberEl = document.getElementById("timer-num");
let countdown = 10;



// countdownNumberEl.textContent = countdown;

// setInterval(function () {
//   countdown = --countdown <= 0 ? 10 : countdown;

//   countdownNumberEl.textContent = countdown;
// }, 1000);

