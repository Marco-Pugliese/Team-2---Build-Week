const searchParams = new URLSearchParams(window.location.search);
const finalScore = searchParams.get("score");
console.log(parseInt(finalScore));

const numOfCorrect = document.getElementById("numOfCorrect");
const numOfWrong = document.getElementById("numOfWrong");
const examScore = document.getElementById("circle-exp");
const wrongPerc = document.getElementById("wrongPerc");
const correctPerc = document.getElementById("correctPerc");
numOfCorrect.innerText = finalScore;
numOfWrong.innerText = 10 - finalScore;
correctPerc.innerText = `${finalScore * 10} %`;
correctPerc.style.fontWeight = "600";
wrongPerc.innerText = `${100 - finalScore * 10} %`;
wrongPerc.style.fontWeight = "600";
if (finalScore > 5) {
  examScore.innerHTML = ` <div>
<span> Congratulations!</span>

<b>You passed the Exam.</b>
</div>
<div id="certificate">
We'll send you the certificate in few minutes. <br />
Check your email (including promotions / spam folder)
</div>`;
}
if (finalScore < 6) {
  examScore.innerHTML = ` <div>
    <span> We're sorry!</span>

    <b>You have not passed the Exam.</b>
  </div>
  <div id="certificate">
    Please if you want to retry the benchmark send us an email.<br />
    We will explain to you how you can retry it 
  </div>`;
}
