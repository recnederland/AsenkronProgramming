// todo https://jsonplaceholder.typicode.com/
// todo https://jsonplaceholder.typicode.com/albums

class Request{
    // get request
    get(url){ 

        fetch(url)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums");

