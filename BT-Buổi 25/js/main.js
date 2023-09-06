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
  var position = (slider.style.left = -leftItem + `px`);

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

var isDrag = false;
var initialOffsetX;
var itemWith;

var rate = (10 * 1263) / 100;
console.log(rate);
slider.addEventListener("mousedown", function (e) {
  isDrag = true;
  initialOffsetX = e.offsetX;
});

slider.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    var currentOffsetX = e.offsetX;
    var moveLength = currentOffsetX - initialOffsetX;
    slider.style.transition = "none";
    leftItem = items[active].offsetLeft;
    slider.style.left = -leftItem + moveLength + `px`;
    if (moveLength < 0 && Math.abs(moveLength) > rate) {
      slider.style.transition = null;
      slider.style.left = -leftItem + `px`;

      if (active + 1 > lengthItem) {
        active = 0;
      } else {
        active = active + 1;
      }
      carousel();
    }
    if (moveLength > 0 && Math.abs(moveLength) >= rate) {
      if (active - 1 < 0) {
        active = lengthItem;
      } else {
        active = active - 1;
      }

      carousel();
    }
  }
  // console.log("hi");
});

slider.addEventListener("mouseup", function () {
  isDrag = false;
});
