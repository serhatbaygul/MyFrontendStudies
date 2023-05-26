// Destructing arraylerin veya objelerin içinden verileri almak için kısa bir yol



// Eski yöntem
// let number1,number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];
//  console.log(number1,number2);


// Yeni Yöntem destructing


// let number1,number2;

// arr = [100,200,300,400];

// // [number1,number2] = arr;

// const [number1,number2] = arr;

// console.log(number1,number2);


// Obje Distructing


// const number = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a:number1,c:number2,e:number3} = number;

// console.log(number1,number2,number3);


//function Destructing 

// const getLangs = () => ["Ptyhon","Java","C++"]


// const [lang1,lang2,lang3] = getLangs();
// console.log(lang1,lang2,lang3);

// Obje

const person = {
    name:"Serhat Baygül",
    year:1999,
    salary:3000,
    showInfos : ( ) => console.log("Bilgiler Gösteriliyor")
}

const {
name:İsim,year:yıl,salary:maaş,showInfos:BilgileriGöster
} = person;

console.log(İsim,yıl,maaş);
BilgileriGöster();
