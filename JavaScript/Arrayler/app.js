let value;

const numbers = [54,32,56,12,84,43,4];

//const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python"+"Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;

value = numbers[0]

value = numbers[numbers.length -1]

//Herhangi bir indeksteki değeri değiştirme


numbers[2] = 1000;

value = numbers;

//index of


value = numbers.indexOf(1000)

//arrayin sonunda değer ekleme -push

numbers.push(2000);
value = numbers;


numbers.unshift(3000);

value = numbers;

//array sonundan değer atma

numbers.pop();
value = numbers;

//Başından değer atma

numbers.shift()
value = numbers;

//Belirli bir kısmını atma
numbers.splice(0,3);
value = numbers;

//Reverse 

numbers.reverse();
value = numbers;

//Array Sıralama

value = numbers.sort();

value = numbers.sort(function(x,y){ //Küçükten Büyüğe
return x-y;
});

value = numbers.sort(function(x,y){
    return y-x;
});

//156651

console.log(value)