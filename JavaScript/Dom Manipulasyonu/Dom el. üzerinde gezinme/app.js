let value;

const todolist = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


value = todolist;
value = todo;
value = cardrow;

// Child Nodes - Text Dahil

value = todolist.childNodes;
value = todolist.childNodes[0];

//Children Özelliği - Element

value = todolist.children;
value = todolist.children[0];
value = todolist.children[2].textContent = "Değişti";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Bu da değişti";

value = todolist;
value = todolist.children[0];

value = cardrow;
value = cardrow.parentElement;

// Element Kardeşleri 

value = todo;

value = todo.previousElementSibling;
value = todo.nextElementSibling;


console.log(value);