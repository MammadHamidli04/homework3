const buttonBir = document.getElementById("btn1");
const buttonIki = document.getElementById("btn2");
const buttonUc = document.getElementById("btn3");
const lessBir = document.getElementById("less1");
const lessIki = document.getElementById("less2");
const lessUc = document.getElementById("less3");
const imageBir = document.getElementById("img1");
const imageIki = document.getElementById("img2");
const imageUc = document.getElementById("img3");
const extraBir = document.getElementById("extra1");
const extraIki = document.getElementById("extra2");
const extraUc = document.getElementById("extra3");
buttonBir.addEventListener("click", function () {
  imageBir.style.display = "none";
  buttonBir.style.display = "none";
  lessBir.style.display = "flex";
  extraBir.style.display = "flex";
});
buttonIki.addEventListener("click", function () {
  imageIki.style.display = "none";
  buttonIki.style.display = "none";
  lessIki.style.display = "flex";
  extraIki.style.display = "flex";
});
buttonUc.addEventListener("click", function () {
  imageUc.style.display = "none";
  buttonUc.style.display = "none";
  lessUc.style.display = "flex";
  extraUc.style.display = "flex";
});
lessBir.addEventListener("click", function () {
  imageBir.style.display = "flex";
  buttonBir.style.display = "flex";
  lessBir.style.display = "none";
  extraBir.style.display = "none";
});
lessIki.addEventListener("click", function () {
  imageIki.style.display = "flex";
  buttonIki.style.display = "flex";
  lessIki.style.display = "none";
  extraIki.style.display = "none";
});
lessUc.addEventListener("click", function () {
  imageUc.style.display = "flex";
  buttonUc.style.display = "flex";
  lessUc.style.display = "none";
  extraUc.style.display = "none";
});
