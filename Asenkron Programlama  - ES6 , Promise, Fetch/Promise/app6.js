function addTwo(number){

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if (typeof number === "number") {
                // olumlu
                resolve(number + 2);
            } else {
                // olumsuz, Error objesi kullanalim
                reject(new Error("Lutfen number bir deger giriniz!"));
            }
        }, 5000);
    })


}

// ! Promise Chain/ zincir yapabiliyoruz
 addTwo("err").then(response => {
    console.log(response);
    return response + 2; // promise donuyor ve onu kullaniyoruz
}).then((responseA)=> console.log(responseA)
).catch(err => console.error(err));  // app6.js:23 Error: Lutfen number bir deger giriniz! at app6.js:10:24
// Todo sadece bir defa catch kullanabiliriz
