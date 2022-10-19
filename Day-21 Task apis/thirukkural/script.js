function toGetInputNumber(){
    let number = document.getElementById('kural_number').value;
    // console.log(number);
    //to obtain kural from the thirukkuarl API
    thirukkuralAPI(number)
}
function randomBtn() {
    let num_for_random = Math.ceil(Math.random() * 1331);
    console.log(num_for_random, "random_number");
    thirukkuralAPI(num_for_random);
  }

let lang = "tamil";

//Using checked (checkBox)
function inEnglish(){
    let english = document.getElementById('english');
    if(english.checked){
        lang="english"
    }else{
        lang='tamil'
    }

}
let displayData;
 function thirukkuralAPI(inputNum){
    let res =  fetch(`https://api-thirukkural.vercel.app/api?num=${inputNum}`)
    res.then((result)=>result.json())
    .then((data)=>displayData=data)
    .then(()=>displayDataFunc(displayData))
    .catch((error)=>console.log(error))
}

let displayDataFunc =  (data)=> {
//    console.log(data);
let number 
let section;
let chapter;
let chapterGroup;
let explanation;
let lines;
if(lang==="english"){
    number= data.number;
   section = data.sect_eng;
   chapter = data.chap_eng;
   chapterGroup= data.chapgrp_eng;
   explanation =data.eng_exp;
   lines=data.eng;
}else{
    number= data.number;
    section = data.sect_tam;
    chapter = data.chap_tam;
    chapterGroup= data.chapgrp_tam;
    explanation =data.tam_exp;
    
    lines=`${data.line1}</br>${data.line2}`
}
let lineNo = document.querySelector(".card-footer");
    lineNo.innerHTML = "Kural Number : " + number;
let card_body = document.querySelector(".card-header");
    card_body.innerHTML =
      `<b>Section :</b>  
      ${section}  
      
      <b>Group :  </b>
      ${chapterGroup} 
      
      <b>Chapter :  </b>
      ${chapter}`
      
let kural = document.getElementsByClassName("card-title");
kural[0].innerHTML = "Kural: "+ lines;
let kural_exp = document.getElementsByClassName("card-text");
kural_exp[0].innerHTML=`<b>Explanation: </b>${explanation}`;

}

