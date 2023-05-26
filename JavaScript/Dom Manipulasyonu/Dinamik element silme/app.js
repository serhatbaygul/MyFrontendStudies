// Dinamk Element Silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelector("li.list-group-item");


//Remove Metodu

// todos[0].remove();


//Remove Child 

// todoList.removeChild(todoList.lastElementChild);

todoList.removeChild(todos[3]);




console.log(todos);
console.log(todoList);