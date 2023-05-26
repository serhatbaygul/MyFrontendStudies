const person ={
    name:"Serhat Baygül",
    age:23,
    salary:300
};

const langs =["Pyton","java","C++","Php"];

const name = "Serhat";


//For In Döngüsü
//Object
// for(let prop in person){
//     console.log(prop,person[prop]);
// }
//Array
// for(let index in langs){
//     console.log(index,langs[index]);
// }

// String

// for(let index in name){
//     console.log(index,name[index]);
// }

 //For of 

//  for (let value of person){
//     console.log
//  }

// for(let value of langs){
//     console.log(value);
// } // arrayler üzerinde değerlere direkt ulaşmak istiyorsak bu işlemi kullanmalıyız

// sting

for (let character of name)
{

    console.log(character);
}




