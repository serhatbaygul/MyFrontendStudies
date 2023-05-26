// function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){
// //     if(typeof age === "undefined") age ="Bilgi Yok"
// //    if(typeof name === "undefined") name ="Bilgi Yok"
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }


// merhaba("Murat",25); //Fonksiyon çağrısı(Function Call)

// merhaba("Ayşe",30);
// merhaba();

//RETURN

// function square(x){
//     return x*x;
// }

// function cube(x){
//     return x*x*x
// }

// let a = cube(square(12));

// a = cube(a);

// console.log(a)

// function merhaba() {
//     return "Merhaba";
// }

// console.log(merhaba)


// Funcşton Expression

// const merhaba = function(){
//     console.log("Merhaba" + name);
// };

// merhaba("Serhat");

//Immediately Invokted Function Expression (IIFF)
//(Tanımlandığı yerde çalışan fonksiyon)

// (function(name){
//     console.log("Merhaba: " + name);
// }) ("Serhat")

// const database = {
//     host: "localhost",

//     add: function(){
//         console.log("Eklendi");
// }
//     get: function() {
//         console.log("Elde Edildi");
// }
// update:function(id){
//     console.log(Id: ${id} Günceşşe)
// }
// }