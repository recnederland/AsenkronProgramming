function getData(data){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if (typeof data === "string") {
                // olumlu
                resolve(data);
            } else {
                // olumsuz
                reject("Lutfen string bir deger giriniz!")
            }
        }, 5000);
    })


}
// getData("merhaba");

getData("Merhaba promise").then(function(response){
    console.log("Gelen deger " + response);
}).catch(function(err){
    console.log(err);
}); // Gelen deger Merhaba promise
