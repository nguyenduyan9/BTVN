var taskInput = document.querySelector(".task-input");
var taskBtn = document.querySelector(".task-btn");
var todolist = document.querySelector(".todolist");
taskForm = document.querySelector(".task-form");
taskContent =document.querySelector(".task-content")

function addTodolist (valueTodolist){
    return ` <div class="todolist">
    <p>${valueTodolist}</p>
    <div class="todo-icon">
      <i class="fa-solid fa-trash icon-trash"></i>
      <i class="fa-solid fa-pen-to-square icon-edit"></i>
    </div>
  </div>`;
}
// add item
taskForm.addEventListener("submit",function(e){
    e.preventDefault()
    var valueTodolist = taskInput.value ;
    if (valueTodolist.length !== 0) {

        var addItem = addTodolist(valueTodolist) ;
        taskContent.insertAdjacentHTML("beforeend",addItem);
    }
    taskInput.value ="" ;
})

taskContent.addEventListener("click",function(e){
 var   valueTodolist = document.querySelector(".todolist p");
 var   inputEdit = document.querySelector(".input-edit")
 console.log(inputEdit);
    // if (e.target.className = "todolist todo-icon icon-edit")
    // console.log(e.target.parentElement.parentElement.remove());
    if (e.target.className === "fa-solid fa-pen-to-square icon-edit") {
        e.target.parentElement.parentElement.remove();
        console.log(valueTodolist);
     var  html = ` <form class="task-form">
        <input
          class="task-input input-edit"
          type="text"
          placeholder="What is the task today?"
          value="${valueTodolist.innerText}"
        />
        <button class="task-btn btn-edit" type="submit">Add Task</button>
      </form>`

      taskContent.insertAdjacentHTML("beforeend",html)
    }

    else if (e.target.className === "task-btn btn-edit") {
        e.preventDefault()
        e.target.parentElement.remove()
        var edit = addTodolist(inputEdit.value)
        taskContent.insertAdjacentHTML("beforeend",edit)
    }

    
})

taskContent.addEventListener("click",function(e){
    if (e.target.className === "fa-solid fa-trash icon-trash") {
        e.target.parentElement.parentElement.remove();
    }
    console.log(e.target.className);
})


