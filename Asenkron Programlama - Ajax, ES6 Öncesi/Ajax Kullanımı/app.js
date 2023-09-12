// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready


document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();
    console.log(xhr);
    
    // xhr.onload = function(){
    //     if (this.status === 200) {
    //         document.getElementById("ajax").textContent = this.responseText;
        
    //     }
    // }
    xhr.onreadystatechange = function(){
            // this XMLHttpRequest demek
        if(this.status == 200 && this.readyState == 4) {
            // Response Hazır
            console.log(this.responseText);
        }
        // console.log(this.readyState);   // 1 2 3 4
        // console.log(this.status);       // 200
    }

    // get requestini example.txt icin gonderiyoruz ve true ile asyncorn oldugunu belirtelim
    xhr.open("GET","example.txt",true);

    // icerde parametre olrak bir string gondermedik
    xhr.send();




});