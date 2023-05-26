//While Döngüleri
// Belli koşullarda kendi bloklarını sürekli 
//çalıştıran yapılardır

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i ++; // i++ (Bu şekilde de yazılabilir)
// }

// let i = 10;

// while (i > 0) {
//     console.log(i);
//     // i --
//     i -= 2;
// }

//Break ve Continue

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// let i = 0;

// while (i < 10) {

//     if (i == 3 | i == 5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// Do While Döngüleri

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

//For Dönügleri

// const langs = ["Python", "Javascritp", "Java"];

// let index = 0;
// while (index < langs.length) {
//     console.log(langs[index]);
//     index++;
// }

//Ayınısını "For Döngüsü" ile gerçekletirebiliriz
// const langs = ["Python", "Javascritp", "Java"];
// for (let index = 0; index < langs.length; index++){
//     console.log(langs[index]);
// }

// ForEach kullanarak yazmak
// const langs = ["Python", "Javascritp", "Java"];

// langs.forEach(function(lang,index){
//     console.log(lang,index)
// })

//Map Metodu

// const users = [
//     { name: "Mustafa", age: 25 },
//     { name: "Zeynep", age: 23 },
//     { name: "Ali", age: 28 }
// ];

// const names = users.map(function (user) {
//     return user.name;
// });
// const ages = users.map(function(user){
//     return user.age;
// })


// console.log(names,ages);

