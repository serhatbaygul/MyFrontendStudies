// SEt Timeout bunun sayesinde bir işlemi belirli bir süre sonra başlatabiliriz

// setTimeout(() => {
//     console.log("naber");
// },1000);

// setInerval (verdiğimiz süre aralığıyla işlemi tekrar terkar çalıştırır)
let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);
},1000);
document.getElementById("btn").addEventListener("click",function(){
clearInterval(value);
})
//Clear Interval
// Durdurmak için 

