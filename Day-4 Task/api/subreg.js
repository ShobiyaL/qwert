let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function(){
    console.log(this.response)
    let con= JSON.parse(this.response);
    for(let el in con){
        console.log(con[el].subregion);
    }
    
}
request.onerror = function(){
    console.error("Oops,Something Went Wrong");
}
request.send();

//Western Asia subreg.js:7:17
// Southern Africa subreg.js:7:17
// North America subreg.js:7:17
// Polynesia subreg.js:7:17
// Eastern Africa subreg.js:7:17
// Eastern Europe subreg.js:7:17
// Polynesia subreg.js:7:17
// South America subreg.js:7:17
// Western Africa subreg.js:7:17
// Caribbean subreg.js:7:17
// Western Europe subreg.js:7:17
// South America subreg.js:7:17
// Central America subreg.js:7:17
// Eastern Africa subreg.js:7:17
// Caribbean subreg.js:7:17
// Eastern Africa subreg.js:7:17
// South-Eastern Asia subreg.js:7:17
// Northern Europe subreg.js:7:17
// Caribbean subreg.js:7:17
// Southeast Europe subreg.js:7:17
// undefined subreg.js:7:17
// Western Europe subreg.js:7:17
// Southern Africa subreg.js:7:17
// Micronesia subreg.js:7:17
// Eastern Africa subreg.js:7:17
// Southern Europe subreg.js:7:17
// Australia and New Zealand subreg.js:7:17
// Micronesia subreg.js:7:17
// Central Europe subreg.js:7:17
// South-Eastern Asia 2 subreg.js:7:17
// Southern Asia subreg.js:7:17
// undefined subreg.js:7:17
// Northern Africa subreg.js:7:17
// Western Europe 2 subreg.js:7:17
// Micronesia subreg.js:7:17
// Caribbean subreg.js:7:17
// Southern Asia subreg.js:7:17
// Middle Africa subreg.js:7:17
// Australia and New Zealand subreg.js:7:17
// Central Europe subreg.js:7:17
// Middle Africa subreg.js:7:17
// undefined subreg.js:7:17
// Caribbean subreg.js:7:17
// Polynesia subreg.js:7:17
// Caribbean subreg.js:7:17
// Western Africa subreg.js:7:17
// Caribbean 2 subreg.js:7:17
// Eastern Asia subreg.js:7:17
// Southern Asia subreg.js:7:17
// Central America subreg.js:7:17
// Australia and New Zealand subreg.js:7:17
// South America subreg.js:7:17
// Polynesia subreg.js:7:17
// Western Asia subreg.js:7:17
// Southern Asia subreg.js:7:17
// Northern Europe subreg.js:7:17
// Caribbean