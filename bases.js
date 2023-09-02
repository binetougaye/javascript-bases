let btn1 = document.querySelector("#btn1");
let para = document.querySelector(".para");
btn1.addEventListener("click", function () {
  if (para.classList.contains("para")) {
    para.classList.remove("para");
  } else {
    para.classList.add("para");
  }
  para.innerHTML = "Bonne réponse";
  para.style.color = "green";
});
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
  if (para.classList.contains("para")) {
    para.classList.remove("para");
  } else {
    para.classList.add("para");
  }
  para.innerHTML = "Mauvaise réponse";
  para.style.color = "red";
});
