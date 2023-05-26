const myset = new Set();
myset.add(100);
myset.add(100);
myset.add("Serhat");
myset.add(3.14);
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});



// myset.delete("Serhat");



// console.log(myset);

// Has metotu (istediğimiz bir değer kümenin içinde var mı bunu sorgulayabiliriz)

// // console.log(myset.has("Serhat")) // true
// console.log(myset.has([1,2,3])); // false


//For Each 

// myset.forEach(function(value){
//     console.log(value);
// })


//For OF 

// for (let value of myset) {
//     console.log(value);
// }

//Set'lerden Array Oluşturma

const array = Array.from(myset);

console.log(array);