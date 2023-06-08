// // If i put a async in front of the function, definitely return promis 

// async function test(data){
//     // return data;
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             resolve("This is a value")
//         },5000);
//     });

//     let response = await promise; // wait 5 seconds

//     return response;
// }
// test("merhaba").then(response => console.log(response));

// // Await is only valid(gecerli) in async function

// ERROR STATE

// async function testData(data) {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Please enter string expression(deger)"));
//             }
//         }, 5000);
//     });

//     const response = await promise;
//     return response;
// }

// testData("thriller").then(data => console.log(data));

async function getCurrency(url){
    const response = await fetch(url);
console.log(response);
    const data = await response.json();

    return(data);
}

getCurrency("Https://api.exchangeratesapi.io/latest")
.then(ahmet => console.log(ahmet));