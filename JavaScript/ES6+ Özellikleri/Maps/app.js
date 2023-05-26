// // Map Veri Tipi
// //Her keye karşılık gelen bir value bulunur
// // Key = anahtar değer  value = o keye karşılık gelen değer

// let myMap = new Map();

// console.log(myMap);

// const key1="Serhat";
// const key2 ={a:10,b:20};
// const key3 = () => 2;
// //Set Fonskinı(mape bu değerleri eklemek için set fonksiyonu kullanıkır
// // set fonsiyonu 2 parametre alır key ve value)
// myMap.set(key1,"String Değer");
// myMap.set(key2,"Object Literal Değer");
// myMap.set(key3,"Function Değer");

// //Get Fonskiyonu (Maplerden bir tane keye karşılık gelen değeri almak için kullanılır)

// // console.log(myMap.get(key1));
// // console.log(myMap.get(key2));
// // console.log(myMap.get(key3));

// // console.log(myMap);

// // Map Boyutu (İçinde Kaç Tane Eleman Var)
// // console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara",06);
// cities.set("İstanbul",34);
// cities.set("Tokat",60);


// For Each 

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// For Of 

// for(let [key,value] of cities){
//     console.log(key,value);
// }

// Map Keys
// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values 
// for(let value of cities.value()){
//     console.log(value);
// }


//Arraylerden map oluşturabiliriz
// const array = [["key1","value1"],["key2","value2"]];
// const lastMap = new Map(array);

// console.log(lastMap);

//Mapten array oluşturabiliriz

// const cities = new Map();

// cities.set("Ankara",06);
// cities.set("İstanbul",34);
// cities.set("Tokat",60);

// const array = Array.from(cities);
// console.log(array);