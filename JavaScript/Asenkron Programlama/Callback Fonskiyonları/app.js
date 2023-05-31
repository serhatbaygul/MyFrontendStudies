// // Callback Fonksiyonlar 

// const langs = ["Python","Java","C++"];

// langs.forEach(function(lang){
// console.log(lang);
// })


// document.getElementById("btn")addEventListener("click",function () {
//    console.log("Tıkla"); 
// });

// function process1(Callback){
//     setTimeout(() => {
//         console.log("Process1");
//         Callback();
//     }, 2000);

// }
// function process2(){
//     setTimeout(() => {
//         console.log("Procces2");
//     }, 3000);

// }

// process1(process2);

const langs = ["Python", "Java", "C++"];

function addLang(lang,callback) {
    setTimeout(() => {
        langs.push(lang);
        console.log("Eklendi");
        callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(() => {
        langs.forEach(function(lang) {
            console.log(lang);
        });
    }, 1000);
}

addLang("Javascript",getAllLangs);

