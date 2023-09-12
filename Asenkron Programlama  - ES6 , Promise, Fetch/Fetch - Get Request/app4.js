// todo https://jsonplaceholder.typicode.com/
// todo https://jsonplaceholder.typicode.com/albums

class Request{
    // get request
    get(url){ 

        return new Promise((resolve, reject) =>{
            fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));

        })

    }
}

const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err => console.log(err))

// console.log(albums); // burada sonuc alamayiz asenkron

