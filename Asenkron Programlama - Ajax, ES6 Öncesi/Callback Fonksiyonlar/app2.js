// Callback fonksiyonlar

// * 1- bir array olusturup tum elemanlarini console'da gorelim
const langs = ["Python", "Java", "C#"];

langs.forEach(function(lang){
    console.log("Programming languages: " + lang);
})

// * 2- addEventListener fonksiyonlari bir function /  callback
document.getElementById("btn").addEventListener("click", function(){
    console.log("Tikla calisti");
})

// * iki function yazip ard arda calistiralim
function processA(){
    console.log("Process A");
}
function processB(){
    console.log("Process B")
}
processA();
processB();

// * 3- simdi setTimeOut() ile bu iki function icin yazim sirasini degistirelim
function processC(){
    setTimeout(function(){
        console.log("Process C");
    }, 5000);
}
function processD(){
    setTimeout(() => {
        console.log("Process D");
    }, 3000);
}
console.log("Digerlerini beklemeden bu calisir")
processC();
processD();

// *  4- callBack kullanarak siralamayi ayarlayalim
function processE(callback){
    setTimeout(function(){
        console.log("Process E");
        callback();
    }, 5000);
}
function processF(){
    setTimeout(() => {
        console.log("Process F");
    }, 3000);
}
console.log("Digerlerini beklemeden bu calisir")
processE(processF);
 
// * 5- 

const programs = ["HTML", "CSS", "Javascript"];
function processG(program){
    setTimeout((function() {
        programs.push(program);
        console.log("Eklendi")
    }), 2000);
}
function getAllPrograms(){
    setTimeout(function() {
    programs.forEach(function(program){
        console.log(program)
    });
    }, 1000);
}

processG("Javascript");
getAllPrograms(); // Asenkron 

// * 6- 
const programs2 = ["HTML", "CSS", "Bootstrap"];

function diller(dil, callback){
    setTimeout(function() {
        programs2.push(dil);
            console.log("Callback eklendi");
        callback();
    }, 10000);
}
function getAllPrograms2(){
    setTimeout(function() {
        programs2.forEach(function(dil){
            console.log(dil)
    });
    }, 6000);
}

diller("Javascript", getAllPrograms2);
 