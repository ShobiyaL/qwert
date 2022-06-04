let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function(){
    console.log(this.response)
    let con= JSON.parse(this.response);
    for(let el in con){
        console.log(con[el].region);
    }
   
}
request.onerror = function(){
    console.error("Oops,Something Went Wrong");
}
request.send();

// Europe reg.js:7:17
// Africa reg.js:7:17
// Americas reg.js:7:17
// Asia reg.js:7:17
// Africa reg.js:7:17
// Asia reg.js:7:17
// Africa reg.js:7:17
// Americas reg.js:7:17
// Oceania reg.js:7:17
// Africa reg.js:7:17
// Europe reg.js:7:17
// Oceania reg.js:7:17
// Americas reg.js:7:17
// Africa reg.js:7:17
// Americas reg.js:7:17
// Europe reg.js:7:17
// Americas 2 reg.js:7:17
// Africa reg.js:7:17
// Americas reg.js:7:17
// Africa reg.js:7:17
// Asia reg.js:7:17
// Europe reg.js:7:17
// Americas reg.js:7:17
// Europe reg.js:7:17
// Antarctic reg.js:7:17
// Europe reg.js:7:17
// Africa reg.js:7:17
// Oceania reg.js:7:17
// Africa reg.js:7:17
// Europe reg.js:7:17
// Oceania 2 reg.js:7:17
// Europe reg.js:7:17
// Asia 3 reg.js:7:17
// Antarctic reg.js:7:17
// Africa reg.js:7:17
// Europe 2 reg.js:7:17
// Oceania reg.js:7:17
// Americas reg.js:7:17
// Asia reg.js:7:17
// Africa reg.js:7:17
// Oceania reg.js:7:17
// Europe reg.js:7:17
// Africa reg.js:7:17
// Antarctic reg.js:7:17
// Americas reg.js:7:17
// Oceania reg.js:7:17
// Americas reg.js:7:17
// Africa reg.js:7:17
// Americas 2 reg.js:7:17
// Asia 2 reg.js:7:17
// Americas reg.js:7:17
// Oceania reg.js:7:17
// Americas reg.js:7:17
// Oceania reg.js:7:17
// Asia 2 reg.js:7:17
// Europe reg.js:7:17
// Americas reg.js:7:17
