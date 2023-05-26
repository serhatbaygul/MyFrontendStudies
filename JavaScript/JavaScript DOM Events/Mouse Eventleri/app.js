const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

//Click Eventi (Bir elemente tıkladığımız zaman oluşan event)

// title.addEventListener("click",run);




// Double Click Eventi

// title.addEventListener("dblclick",run)


//Mouse Down

// title.addEventListener("mousedown",run);

//Mouse Over 

// title.addEventListener("mouseover",run);

//Mouse Out

// title.addEventListener("mouseout",run);

//Mouse Enter ve Mouse Leave

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e) {
    console.log(e.type);
}




// console.log(title);
// console.log(cardBody);