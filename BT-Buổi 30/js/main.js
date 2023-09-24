var btn = document.querySelector(".btn");
var menu = document.querySelector(".container .menu");
var overlay = document.querySelector(".overlay");
console.log(overlay);
// console.log(menu);

btn.addEventListener("click", function () {
  if (menu.className === "menu") {
    btn.style.backgroundColor = "#0a58ca";
    menu.classList.add("show");
    overlay.style.top = 0;
  } else {
    menu.classList.remove("show");
    btn.style.backgroundColor = "#0d6efd";
  }
});

overlay.addEventListener("click", function () {
  overlay.style.top = "100%";
  menu.classList.remove("show");
  btn.style.backgroundColor = "#0d6efd";
});

// bold iatlic

var content = document.querySelector("#content");
var btnBold = document.querySelector(".btn-bold");
var btnUnderlined = document.querySelector(".btn-underlined");
var btnItalic = document.querySelector(".btn-italic");
var btnColor = document.querySelector(".btn-color");

btnBold.addEventListener("click", function () {
  document.execCommand("bold");
});

btnItalic.addEventListener("click", function () {
  document.execCommand("italic");
});

btnUnderlined.addEventListener(".btn-italic", function () {
  document.execCommand("underlined");
});

btnColor.addEventListener("input", function () {
  document.execCommand("foreColor", false, btnColor.value);
});

var count = document.querySelector(".count");
var span = document.createElement("span");
var sp = document.createElement("span");

var CountText = 0;
var countEl = 0;
sp.innerText = `Số từ : ${CountText}`;
span.innerText = `Số ký tự : ${countEl}`;
count.append(span);
count.append(sp);

content.addEventListener("input", function () {
  countEl = this.innerText.length;
  span.innerText = `Số ký tự ${countEl}`;
  console.log(this.innerText);
  // console.log(CountText.length);
});
