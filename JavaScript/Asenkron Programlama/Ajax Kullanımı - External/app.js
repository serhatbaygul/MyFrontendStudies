document.getElementById("change").addEventListener("click",change);


function change (){
    const chr = new XMLHttpRequest();

    XPathResult.open("GET","https://api.exchangeratesapi.io/latest",true);

    XPathResult.onload = function(){
        if(this.status){
            console.log(this.responseText);
        }
    }

    xhr.send();
}