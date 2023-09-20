var listItems = document.querySelectorAll(".list-item");
var list = document.querySelector(".list");
content = document.querySelector(".content");
var dragElement = null;

var initialOffsetY;

listItems.forEach(function (item) {
  // bắt đầu kéo
  item.addEventListener("dragstart", function (e) {
    item.classList.add("opacity");
    dragElement = this;
  });

  item.addEventListener("dragover", function (e) {
    e.preventDefault();
    if (dragElement === this) return;
    dragElement.parentNode.removeChild(dragElement);
    list.insertBefore(dragElement, this);
    handleOder();
  });

  item.addEventListener("dragend", function () {
    item.classList.remove("opacity");
  });

  item.addEventListener("drop", function (e) {
    e.preventDefault();
    handleOder();
  });
});

var handleOder = function () {
  var contentEl = document.querySelectorAll(".count-item span");
  var countItem = document.querySelectorAll(".count-item");
  var countModule = document.querySelector(".count-module");
  countItem.forEach(function (count, index) {
    count.innerHTML = `Bài : ${index + 1}:
    <span>${contentEl[index].innerHTML}</span>`;
  });
};

handleOder();
