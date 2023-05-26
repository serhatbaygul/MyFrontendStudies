// Karşılaştırma Operatörleri

// == eşitse true der
// === tipleri de aynıysa (string veya number 
//olma durumu)true der
// != eşit değil midir? işareti
// !==
// >
// <
// >=
// <=

// console.log(2 == 2); //true
// console.log("js"=="java"); //false
// console.log(2 == "2"); //true çünkü ikisi de aynı sayı
// console.log(2==="2"); //false çünkü tipleri farklı


// console.log(4>2);

// console.log(2 != 4)

// console.log(2<4)

//console.log(2>4)

//console.log(2>=4);
//console.log(4<=);

//Mantıksal Bağlaçlar

//*Not Öperatörü (!): Bir değer false ise True yapar, true ise false yapar

// console.log(!(2 == 2));

//And Öperatörü: bu öperatör ile bağlanan koşulların 
//tamamının true olması gerek bir tanesi bile false ise genel durum falsedir

//console.log((2==2) && ("Ahmet" == "Ahmet"));

//Or öperatörü (||): Bu öperatörle bağlanan koşulların en az bir tanesi bile true olsa
// genel sonuç true olur

// console.log((4 ==2) || ("Ahmet"!=="Ahmet"))

// IF KOŞULLARI

// const error = false;

// if (error == true){
//     console.log("hata oluştu")
// }
//  else{
//     console.log("Başarılı")
//  }

// const user = "mmc";

// if (user === "mmc"){
//     console.log("Kullanıcı Bulundu");
// }
// else { 
//     console.log("Kullanıcı Bulunamadı");
// }

// const process = "3";

// if (process==="1"){
//     console.log("İşlem 1");
// }

// else if (process === "2"){
//     console.log("İşlem 2");
// }

// else if (process === "3"){
//     console.log("İşlem 3");
// }

// else{
//     console.log("Geçersiz İşlem");
// }

const number = 105;

// if (number === 100) {
//     console.log("Sayı 100'e eşit")
// }

// //Ternary Operator 

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 Değil")

// if koşulu sadece tek bir işlem içeriyorsa süslü parantez 
//kullanmaya gerek yoktur

