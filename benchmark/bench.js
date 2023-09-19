const benchObj = [
  {
    question: "Come inizia un ciclo WHILE?",
    a: "while(i&lt;=10;i++)",
    b: "while(i&lt;=10)",
    c: "while i=1 to 10",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "Quale metodo buil.in combina il testo di due stringhe e restituisce una nuova stringa?",
    a: "attach()",
    b: "append()",
    c: "concat()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Come si scrive uno statement IF che controlli se i è uguale a 5 in Javascript?",
    a: "if(i=5){}",
    b: "if(i===5){}",
    c: "if i==5 then",
    d: "if i=5 then",
    correct: "b",
  },
  {
    question: "Quale dei seguenti NON è un oggetto Javascript?",
    a: "const obj={name='Lola'};",
    b: "const obj=new Object()",
    c: "const obj={}",
    d: "const obj = {name:'Lola'};",
    correct: "a",
  },
  {
    question: "A cosa serve il primo parametro di element.addEventListener?",
    a: "Richiamare",
    b: "Chiamante",
    c: "Invocare",
    d: "Tipo di evento",
    correct: "d",
  },
  {
    question:
      "Quando si seleziona un elemento nel DOM con Javascript,si può ottenere o impostare ogni regola CSS con la sua proprietà di stile.",
    a: "Vero",
    b: "Falso",
    correct: "a",
  },
  {
    question: "Quale di questi NON è un valore 'altezza' valido?",
    a: "altezza:100px",
    b: "altezza: 100%",
    c: "altezza:100pv",
    d: "altezza: 100vh",
    correct: "c",
  },
  {
    question: "Quale tag HTML è usato per definire un foglio di stile interno?",
    a: "&lt;copione&gt;",
    b: "&lt;script&gt;",
    c: "&lt;stile&gt;",
    d: "&lt;foglio di stile&gt;",
    correct: "c",
  },
  {
    question: "Cosa significa 'div p' come selettore?",
    a: "Tutti i p all'interno di un div",
    b: "Tutti i div all'interno di un p",
    c: "Tutti i div e tutti i p",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "Quale parola chiave devo usare per dichiarare una variabile in Javascript?",
    a: "string",
    b: "let",
    c: "concat",
    d: "id",
    correct: "b",
  },
];

const bench = document.getElementById("Benchmark");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentBench = 0;
let score = 0;

const deselectAnswer = () => {
  answerElements.forEach((answer.checked = false));
};
/*funzione che cancella la selezione precedente prima di passare alla domada successiva*/

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadBench = () => {
  deselectAnswer();
  const currentBenchData = benchData[currentBench];
  questionElement.innerText = currentBenchData.question;
  a_text.innerText = currentBenchData.a;
  b_text.innerText = currentBenchData.b;
  c_text.innerText = currentBenchData.c;
  d_text.innerText = currentBenchData.d;
};

loadBench();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === benchData[currentBench].correct) score++;
    currentBench++;
  }
});
