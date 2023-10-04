const btn = document.querySelector(".form-todo .btn");
const over = document.querySelector(".over");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".cancel-control");
const inputModal = document.querySelector("#input-modal");
const todoList = document.querySelector(".todo-list");
let save = document.querySelector(".save-control");
console.log(inputModal);

btn.addEventListener("click", function () {
  over.classList.add("checked");
  modal.classList.add("checked");
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  over.classList.remove("checked");
  modal.classList.remove("checked");
});

const div = document.createElement("div");
div.className = "next-task";

save.addEventListener("click", (e) => {
  e.stopPropagation();
  if (inputModal.value.length === 0) {
    console.log("hi");
  } else {
    const div = document.createElement("div");
    div.className = "next-task";
    todoList.append(div);
    div.innerText = inputModal.value;
    over.classList.remove("checked");
    modal.classList.remove("checked");
    inputModal.value = "";
  }
});
