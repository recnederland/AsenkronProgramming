// todo https://jsonplaceholder.typicode.com/
// todo https://jsonplaceholder.typicode.com/albums
// todo https://github.com/dalisc/fetch-api-tutorial
// todo https://github.com/typicode/jsonplaceholder/blob/master/templates/GUIDE.md
// todo https://github.com/facebook/react-native/issues/37907
// todo 
class Request{
    // post request
    get(url){ 

        return new Promise((resolve, reject) =>{
            fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

        })
    
    }
    post(url, data){
        return new Promise((resolve,reject) =>{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                
            }
            
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));

        })

    }
}

//! get 
// const request = new Request();
// let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
     
//     console.log(albums);
// })
//.catch(err => console.log(err))

// console.log(albums); // burada sonuc alamayiz asenkron

//! post
const request = new Request();
request.post("https://jsonplaceholder.typicode.com/albums", {userId:111, title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

// {userId: 111, title: 'Thriller', id: 101}
