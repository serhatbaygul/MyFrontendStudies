function getData(data) { // Promis objesi dönderen fonskiyon
return new Promise(function(resolve,reject){
    setTimeout(function(){
        if(typeof data === "string"){
            resolve(data);
        }
        else{
reject(new Error("Lutfen string bir ifade girin"));
        }
    },5000)
})
}


getData(12).then(function(response){
    console.log("Gelen Deger " + response);
}).catch(function(err){
    console.error(err);
});