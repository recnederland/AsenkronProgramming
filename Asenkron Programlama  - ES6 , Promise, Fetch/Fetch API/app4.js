// ! 1 text file okuyalim
function getTextFile(){
    // once response halini alalim sonra da text'e cavirelim
    // text dosyasindan data okumus olduk
    // Burası bir text dosyası
    fetch("example.txt")
    .then(response =>  response.text())
        // tek islem yaptigiiz icin parentezsiz yazabildigimiz gibi return'suz de yazabiliriz
        // console.log(response))
        
    .then(data => console.log(data))    
    .catch(err => console.log(err));

}

// getTextFile();

// ! 2 JSON file okuyalim
// bir locale JSON dosyasini okuyalim example2()

function getJsonFile() {
    fetch("example2.json")
    .then(response => response.json())
    .then(data  => console.log(data))
    .catch(err => console.log(err));

}
// getJsonFile();

/*
 [{…}, {…}, {…}]0: {name: 'Recep', age: 44, salary: 10000}1: {name: 'Saban', age: 45, salary: 5000}2: {name: 'Ramazan', age: 46, salary: 3000}length: 3[[Prototype]]: Array(0)
*/

// ! 3 online JSON file okuyalim
// https://exchangeratesapi.io/
// todo https://open.er-api.com/v6/latest/USD

function getExternalAPI(){

    fetch("https://open.er-api.com/v6/latest")
    .then(response => response.json())
    .then(data => 
        // console.log(data))
        // console.log(data.rates)
        // {USD: 1, AED: 3.6725, AFN: 73.765294, ALL: 100.532252, AMD: 385.82434, …}
        console.log(data.rates.TRY))
        // 26.844859
    .catch(err => console.err(err));

}
getExternalAPI();
// {result: 'success', provider: 'https://www.exchangerate-api.com', 
// documentation: 'https://www.exchangerate-api.com/docs/free', 
// terms_of_use: 'https://www.exchangerate-api.com/terms', 
// time_last_update_unix: 1694131351, …}
