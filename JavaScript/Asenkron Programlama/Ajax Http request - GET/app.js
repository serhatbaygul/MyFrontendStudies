class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();

    }

    // Get Request 

    get(url){

        this.xhr.open("GET",url); // Bağlantı açık
// const temp = this;
this.xhr.onload = function(){
    if(this.status === 200){
        console.log(this.responseText);
    }
}.bind(this);

        this.xhr.send();
    }
}

const request = new Request();

request.get=("https://jsonplaceholder.typicode.com/albums");


