const allBtn = document.querySelectorAll(".answers button");

for (let i = 0; i < allBtn.length; i++) {
  console.log(allBtn[i]);
  allBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}
