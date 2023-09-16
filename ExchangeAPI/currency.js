

class Currency{

    constructor(firstCurrency, secondCurrency){
        this.firstCurrency  = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url            = "https://api.exchangerate.host/latest?base=";
        this.amount         = null;
        
    }

    exchange(){
        return new Promise((resolve,reject)=>{
            fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data["rates"][this.secondCurrency];
            const amountParity = Number(this.amount);

            let total = parity * amountParity;
            // console.log(total);
            resolve(total);
        })
        .catch(err => console.log(err));
        })
    }
    changeAmout(amount){
        this.amount = this.amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}








