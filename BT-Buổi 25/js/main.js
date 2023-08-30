var items = document.querySelectorAll(".item");
var slider = document.querySelector(".slider");
var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
var listBtns = document.querySelector(".list-btn");
var dots = document.querySelectorAll(".list-btn li");

var active = 0;
var lengthItem = items.length - 1;
console.log(lengthItem);
next.addEventListener("click", function () {
  // active += 1;
  if (active + 1 > lengthItem) {
    active = 0;
  } else {
    active = active + 1;
  }
  carousel();
});

function carousel() {
  var leftItem = items[active].offsetLeft;
  console.log(leftItem);
  slider.style.left = -leftItem + `px`;

  var btnActive = document.querySelector(".list-btn li.active");
  btnActive.classList.remove("active");
  dots[active].classList.add("active");
}

previous.addEventListener("click", function () {
  if (active - 1 < 0) {
    active = lengthItem;
  } else {
    active = active - 1;
  }

  carousel();
});

dots.forEach(function (dot, key) {
  dot.addEventListener("click", function () {
    active = key;
    console.log(active);
    carousel();
  });
});

slider.addEventListener("mousedown", function () {
  console.log("hi");
});

slider.addEventListener();
