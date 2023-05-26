// Klavye Eventleri
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeTex);

function changeTex(e){
    header.textContent = e.target.value;
    
    console.log(e.target.value)

}



// Keypress (sadece harfler ve rakamlar bu eventi oluşturur)
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log("Naber");
//     // console.log(e.which);
//     // console.log(e.key);
// }

// Keydown (Bütün tuşlar eventi oluşturur)

// document.addEventListener("keydown",run);
// function run(e){
//         console.log(e.key);
      
//     };

    //Keyup (Tuşu bıraktığımız zaman event oluşur)

    // document.addEventListener("keyup",run);
    // function run(e){
    //         console.log(e.key);
          
    //     };
    