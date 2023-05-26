// Local Storage

//SetItem

// localStorage.setItem("hareket","burpee")
// localStorage.setItem("tekrar","50");

// Clear Local Storage

// localStorage.clear();

// localStorage.setItem("hareket","burpee")
// localStorage.setItem("tekrar","50");

// console.log(localStorage.getItem("sport"));
// localStorage.setItem("sport","");

// if(localStorage.getItem("sport") === null ){
//     console.log("Sorguladığınız Veri Bulunmuyor");
// }

// else{
//     console.log("Sorguladığınız Veri Bulunuyor");
// }

// Local Storage Array Yazma

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos", JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));

// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo)

function addTodo(e){

const value = todoInput.value;

let todos;
if(localStorage.getItem("todos")===null){

todos = [];
}
else{
    todos = JSON.parse(localStorage.getItem("todos"));
}

todos.push(value);

localStorage.setItem("todos", JSON.stringify(todos));



    e.preventDefault();
}