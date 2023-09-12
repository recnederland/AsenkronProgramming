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
// arrow function yazalim
getData("Merhaba promise").then((response) =>{
    console.log("Gelen deger " + response);
}).catch((err)=> {
    console.log(err);
}); // Gelen deger Merhaba promise


// * tek satir oldugu icin {} silebiliriz istersek
getData(25)
.then((response) => console.log("Gelen deger " + response))
.catch( (err) => console.error(err) ); // Lutfen string bir deger giriniz!

