class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // Get Request 
    get(url) {
        this.xhr.open("GET", url); // Bağlantı açık
        this.xhr.onload = function () {
            if (this.status === 200) {
                console.log(this.responseText);
            }
        }.bind(this);
        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                // Başarılı
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Hata Oluştu...", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                // Başarılı
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Hata Oluştu...", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request();

// GET request
// request.get("https://jsonplaceholder.typicode.com/albums");

// POST request
request.post("https://jsonplaceholder.typicode.com/albums", {userId: 2, title: "Thriller"}, function(err, album) {
    if (err) {
        console.log(album);
    } else {
        console.log(err);
    }
});
