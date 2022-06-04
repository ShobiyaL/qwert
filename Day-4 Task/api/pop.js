let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function(){
    console.log(this.response)
    let con= JSON.parse(this.response);
    for(let el of con){
        console.log(el.population);
    }
}
request.onerror = function(){
    console.error("Oops,Something Went Wrong");
}
request.send();
// 56 pop.js:7:17
// 1265740 pop.js:7:17
// 144104080 pop.js:7:17
// 105697 pop.js:7:17
// 586634 pop.js:7:17
// 8278737 pop.js:7:17
// 4922 pop.js:7:17
// 39244 pop.js:7:17
// 17643060 pop.js:7:17
// 4314768 pop.js:7:17
// 12952209 pop.js:7:17
// 1399491 pop.js:7:17
// 3000 pop.js:7:17
// 32365998 pop.js:7:17
// 10353442 pop.js:7:17
// 38659 pop.js:7:17
// 2837743 pop.js:7:17
// 0 pop.js:7:17
// 83240525 pop.js:7:17
// 59308690 pop.js:7:17
// 115021 pop.js:7:17
// 98462 pop.js:7:17
// 10715549 pop.js:7:17
// 2072 pop.js:7:17
// 57557 pop.js:7:17
// 2100126 pop.js:7:17
// 273523621 pop.js:7:17
// 5685807 pop.js:7:17
// 164689383 pop.js:7:17
// 1000 pop.js:7:17
// 102334403 pop.js:7:17
// 11555997 pop.js:7:17
// 38137 pop.js:7:17
// 59194 pop.js:7:17
// 287371 pop.js:7:17
// 540542 pop.js:7:17
// 89561404 pop.js:7:17
// 25687041 pop.js:7:17
// 8917205 pop.js:7:17
// 26545864 pop.js:7:17
// 400 pop.js:7:17
// 106766 pop.js:7:17
// 280904 pop.js:7:17
// 4255 pop.js:7:17
// 2416664 pop.js:7:17
// 13452 pop.js:7:17
// 155014 pop.js:7:17
// 7500700 pop.js:7:17
// 771612 pop.js:7:17
// 6624554 pop.js:7:17
// 544 pop.js:7:17
// 19116209 pop.js:7:17
// 1470 pop.js:7:17
// 10203140 pop.js:7:17
// 40218234 pop.js:7:17
// 48865 pop.js:7:17
// 71991