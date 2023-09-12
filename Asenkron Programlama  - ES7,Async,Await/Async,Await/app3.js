 
async function awaitFunction(data){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bu await keyword ornegidir..")
        }, 4000);
    });
     
    let response = await promise; // 4 saniye promise bekleyecek
     return response;

}
awaitFunction("Merhaba await keyword").then(response => console.log(response));
/*
Bu await keyword ornegidir..
*/


//! hata durumunu kontrol edelim
async function errorControl(data){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data);
            } else {
                reject(new Error("Lutfen string bir deger giriniz!!!"))
            }
        }, 4000);
    })
const response = await promise;
return response;

}
errorControl("thriller")
// errorControl(222)
.then(data => console.log(data))
.catch(err => console.log(err))
//* thriller

//! 3
async function getCurrency(url2){

    const response2  = await fetch(url2);  // Response object
    console.log(response2)
    const data2     = await response2.json(); // json object
    // console.log(data2);
    return data2;

}
getCurrency("https://api.axchangeratesapi.io/latest")
.then(recep => console.log(recep));

