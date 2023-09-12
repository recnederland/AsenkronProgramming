//* https://javascript.info/
//* https://javascript.info/async-await

// 1 normal function

function normal(data){
   
    return data;

}

console.log(normal("Hello")); // Hello
// Hello


// 2 promise function
function promiseFunction(data){

    return new Promise((resolve, reject)=> {
        resolve(data);
        reject("Hata var");
    })
}
console.log(promiseFunction("Hi promise normal function"))
// Promise {<fulfilled>: 'Hi promise normal function'}
// async functionlar mutlaka bir promise doner


// 3 async function
async function asyncFunction(data){
     // promise return new promise
     return data;
}
console.log(asyncFunction("Merhaba async"));
// Promise {<fulfilled>: 'Merhaba async'}

asyncFunction("async function").then( (response) => {console.log(response)});
// async function

//! await anahtar kelimesi promise olumlu donus yapacak beklentisi varsa kullanilir
// 4 await
// await async function ile calisir ve bekleme islvei gorur
async function awaitFunction(data){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bu await keyword ornegidir..")
        }, 4000);
    });
    //* await yazildigi yerde bekler ve sonraki kodlari calistirmaz
    let response = await promise; // 4 saniye promise bekleyecek
    console.log(response)
    console.log( "4 sn sonra await sonrasi calisti");
}
awaitFunction("Merhaba await keyword");
/*
Bu await keyword ornegidir..
4 sn sonra await sonrasi calisti
*/
