 
// todo https://github.com/dalisc/fetch-api-tutorial
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
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                
            } }
            )
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

            // .catch(err => console.log(err));
        })

    }
    delete(url){
        return new Promise((resolve, reject) =>{
            fetch('https://jsonplaceholder.typicode.com/albums/11', {
           method: 'DELETE'
            }).then(response => resolve("Veri silme islemi basarili"))
                .catch(err => reject(err));
        })
    }
}

//! get 
const requestGet = new Request();
let albums;

requestGet.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
     
    console.log(albums);
})
.catch(err => console.log(err))

console.log(albums); // burada sonuc alamayiz asenkron

//! post
const requestPost = new Request();
requestPost.post("https://jsonplaceholder.typicode.com/albums", {userId:111, title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

// {userId: 111, title: 'Thriller', id: 101}

//! put
const requestPut = new Request();
requestPut.put("https://jsonplaceholder.typicode.com/albums/11", {userId:11, title:"Baris Manco"})
.then(album => console.log(album))
.catch(err => console.log(err));
// {userId: 11, title: 'Baris Manco', id: 11}

//! delete
const requestDelete = new Request();
requestDelete.delete("https://jsonplaceholder.typicode.com/albums/11") 
.then(message => console.log(message))
.catch(err => console.log(err));

/*
Veri silme islemi basarili
app8.js:86 {userId: 11, title: 'Baris Manco', id: 11}
*/