// Element Id'e Göre Seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");


//Element Classa göre seçme

element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

//Element Tag'e göre seçme

element = document.getElementsByTagName("div");

//Query Selector - Css Selector: İlk bulduğu ve tek elementi döner

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");


element =document.querySelector(".list-group-item");

element = document.querySelector("li");

//  QuerySelectorAll - Tüm Elementleri Seç 

element = document.querySelectorAll(".list-group-item");



console.log(element);