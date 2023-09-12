
// https://open.er-api.com/v6/latest/USD

document.getElementById("change").addEventListener("click", change);

function change(){


    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://open.er-api.com/v6/latest/USD");

    xhr.onload = function(){
        if (this.status) {
            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            console.log(response);
            console.log(response.rates); // {USD: 1, AED: 3.6725, AFN: 81.135861, ALL: 99.787657, AMD: 385.998083, …}
            console.log(response.rates.TRY); // 26.718889 , 1 eylul 2023

            const rate   = response.rates.TRY;
            console.log(typeof rate); // number
            const amount = document.getElementById("amount").value;
            // const amount2 = Number(document.getElementById("amount").value);
            console.log(typeof amount); // string
            amountNumber = Number(amount);
            console.log(typeof amountNumber); // number
            console.log(amountNumber * rate);
            // simdi diger input alanina sonucu yazdiralim
            const sonuc = amountNumber * rate;
            document.getElementById("tl").value = sonuc  ;


        } else {
            console.log("Islem hatasi");

        }
    }
    xhr.send();
}

