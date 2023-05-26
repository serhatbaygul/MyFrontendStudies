// const langs = ["Python","C++","Java","Php"];

// // console.log(langs[0],langs[;

// // console.log(...langs); // 3 nokta sayesinde arrayler arasında boşluk bırakabiliyoruz

// const langs2 = ["JavaScript","C#",...langs];

// console.log(langs2); // Spread Operatörü kullanarak ik farklı arrayi birnirine ekledik


// const numbers=[1,2,3,4,5,6,7,8,9,];

// const [a,b,...numbers2]=numbers;

// console.log(a,b);
// console.log(numbers2);

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers= [100,200,300];

addNumbers(...numbers);