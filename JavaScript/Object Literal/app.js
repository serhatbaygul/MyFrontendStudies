let value

const programmer = {
    name : "Serhat Baygül",
    age : 23,
    email : "serhat.baygull@gmail.com",
    langs : ["Python","Java","Javascript"],

    address :  {
        city : "Tokat",
        street : "Cumhuriyet"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }

}

value = programmer;


value = programmer.email;

value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();


const programmers = [
    {name: "Serhat Baygül",age:23},
    {name: "Oğuz",age:25}

];
value = programmers[0].name


console.log(value)