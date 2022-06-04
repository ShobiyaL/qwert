let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function(){
    console.log(this.response)
    let con= JSON.parse(this.response);
    for(let el in con){
        console.log(con[el].name);
    }
}
request.onerror = function(){
    console.error("Oops,Something Went Wrong");
}
request.send();

// Object { common: "Pitcairn Islands", official: "Pitcairn Group of Islands", nativeName: {…} }
// cName.js:7:17
// Object { common: "Mauritius", official: "Republic of Mauritius", nativeName: {…} }
// cName.js:7:17
// Object { common: "Russia", official: "Russian Federation", nativeName: {…} }
// cName.js:7:17
// Object { common: "Tonga", official: "Kingdom of Tonga", nativeName: {…} }
// cName.js:7:17
// Object { common: "Suriname", official: "Republic of Suriname", nativeName: {…} }
// cName.js:7:17
// Object { common: "Togo", official: "Togolese Republic", nativeName: {…} }
// cName.js:7:17
// Object { common: "Montserrat", official: "Montserrat", nativeName: {…} }
// cName.js:7:17
// Object { common: "Monaco", official: "Principality of Monaco", nativeName: {…} }
// cName.js:7:17
// Object { common: "Ecuador", official: "Republic of Ecuador", nativeName: {…} }
// cName.js:7:17
// Object { common: "Panama", official: "Republic of Panama", nativeName: {…} }
// cName.js:7:17
// Object { common: "Rwanda", official: "Republic of Rwanda", nativeName: {…} }
// cName.js:7:17
// Object { common: "Trinidad and Tobago", official: "Republic of Trinidad and Tobago", nativeName: {…} }
// cName.js:7:17
// Object { common: "British Indian Ocean Territory", official: "British Indian Ocean Territory", nativeName: {…} }
// cName.js:7:17
// Object { common: "Malaysia", official: "Malaysia", nativeName: {…} }
// cName.js:7:17
// Object { common: "Sweden", official: "Kingdom of Sweden", nativeName: {…} }
// cName.js:7:17
// Object { common: "Saint Martin", official: "Saint Martin", nativeName: {…} }
// cName.js:7:17
// Object { common: "Albania", official: "Republic of Albania", nativeName: {…} }
// cName.js:7:17
// Object { common: "Bouvet Island", official: "Bouvet Island", nativeName: {…} }
// cName.js:7:17
// Object { common: "Germany", official: "Federal Republic of Germany", nativeName: {…} }
// cName.js:7:17
// Object { common: "South Africa", official: "Republic of South Africa", nativeName: {…} }
// cName.js:7:17
// Object { common: "Micronesia", official: "Federated States of Micronesia", nativeName: {…} }
// cName.js:7:17
// Object { common: "Seychelles", official: "Republic of Seychelles", nativeName: {…} }
// cName.js:7:17
// Object { common: "Greece", official: "Hellenic Republic", nativeName: {…} }
// cName.js:7:17
// Object { common: "Christmas Island", official: "Territory of Christmas Island", nativeName: {…} }
// cName.js:7:17
// Object { common: "Northern Mariana Islands", official: "Commonwealth of the Northern Mariana Islands", nativeName: {…} }
// cName.js:7:17
// Object { common: "Slovenia", official: "Republic of Slovenia", nativeName: {…} }
// cName.js:7:17
// Object { common: "Indonesia", official: "Republic of Indonesia", nativeName: {…} }
// cName.js:7:17
// Object { common: "Singapore", official: "Republic of Singapore", nativeName: {…} }
// cName.js:7:17
// Object { common: "Bangladesh", official: "People's Republic of Bangladesh", nativeName: {…} }
// cName.js:7:17
// Object { common: "Antarctica", official: "Antarctica" }
// cName.js:7:17
// Object { common: "Egypt", official: "Arab Republic of Egypt", nativeName: {…} }
// cName.js:7:17
// Object { common: "Belgium", official: "Kingdom of Belgium", nativeName: {…} }
// cName.js:7:17
// Object { common: "Liechtenstein", official: "Principality of Liechtenstein", nativeName: {…} }
// cName.js:7:17
// Object { common: "Marshall Islands", official: "Republic of the Marshall Islands", nativeName: {…} }
// cName.js:7:17
// Object { common: "Barbados", official: "Barbados", nativeName: {…} }
// cName.js:7:17
// Object { common: "Maldives", official: "Republic of the Maldives", nativeName: {…} }
// cName.js:7:17
// Object { common: "DR Congo", official: "Democratic Republic of the Congo", nativeName: {…} }
// cName.js:7:17
// Object { common: "Australia", official: "Commonwealth of Australia", nativeName: {…} }
// cName.js:7:17
// Object { common: "Austria", official: "Republic of Austria", nativeName: {…} }
// cName.js:7:17
// Object { common: "Cameroon", official: "Republic of Cameroon", nativeName: {…} }
// cName.js:7:17
// Object { common: "French Southern and Antarctic Lands", official: "Territory of the French Southern and Antarctic Lands", nativeName: {…} }
// cName.js:7:17
// Object { common: "Aruba", official: "Aruba", nativeName: {…} }
// cName.js:7:17
// Object { common: "French Polynesia", official: "French Polynesia", nativeName: {…} }
// cName.js:7:17
// Object { common: "Saint Barthélemy", official: "Collectivity of Saint Barthélemy", nativeName: {…} }
// cName.js:7:17
// Object { common: "Gambia", official: "Republic of the Gambia", nativeName: {…} }
// cName.js:7:17
// Object { common: "Anguilla", official: "Anguilla", nativeName: {…} }
// cName.js:7:17
// Object { common: "Curaçao", official: "Country of Curaçao", nativeName: {…} }
// cName.js:7:17
// Object { common: "Hong Kong", official: "Hong Kong Special Administrative Region of the People's Republic of China", nativeName: {…} }
// cName.js:7:17
// Object { common: "Bhutan", official: "Kingdom of Bhutan", nativeName: {…} }
// cName.js:7:17
// Object { common: "Nicaragua", official: "Republic of Nicaragua", nativeName: {…} }
// cName.js:7:17
// Object { common: "Cocos (Keeling) Islands", official: "Territory of the Cocos (Keeling) Islands", nativeName: {…} }
// cName.js:7:17
// Object { common: "Chile", official: "Republic of Chile", nativeName: {…} }
// cName.js:7:17
// Object { common: "Niue", official: "Niue", nativeName: {…} }
// cName.js:7:17
// Object { common: "Jordan", official: "Hashemite Kingdom of Jordan", nativeName: {…} }
// cName.js:7:17
// Object { common: "Afghanistan", official: "Islamic Republic of Afghanistan", nativeName: {…} }
// cName.js:7:17
// Object { common: "Faroe Islands", official: "Faroe Islands", nativeName: {…} }
// cName.js:7:17
// Object { common: "Dominica", official: "Commonwealth of Dominica", nativeName: {…} }