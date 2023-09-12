
function getData(data){
    return new Promise(function(resolve, reject){

        setTimeout(() => {
            resolve("Olumlu sonuc");
            // reject("Olumsuz sonuc");
        }, 10000);
    })
}

// console.log(getData("Merhaba")); //

getData("Merhaba").then(function(response){
    console.log(response);
})
// getData("Merhaba").catch(function(err){
//     console.log(err);
// })

