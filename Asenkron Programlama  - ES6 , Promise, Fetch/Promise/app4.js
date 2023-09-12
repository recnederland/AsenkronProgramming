function getData(data){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if (typeof data === "string") {
                // olumlu
                resolve(data);
            } else {
                // olumsuz, Error objesi kullanalim
                reject(new Error("Lutfen string bir deger giriniz!"));
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


getData(25).then(function(response){
    console.log("Gelen deger " + response);
}).catch(function(err){
    console.error(err);
}); // Lutfen string bir deger giriniz!

