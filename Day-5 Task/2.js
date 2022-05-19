//title caps [IIFE]
(function (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(' '));
  })(("BLACK butter Coffee"));
  

  //title caps[Anonymous function]
let titleCaps = function(string){
      let a = string.toLowerCase().split(' ');
      for(let i=0;i<a.length;i++){
          a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
      }
       return a.join(" ");
};
let caps=titleCaps("Coffee butter BLACK");
console.log(caps);


// title caps [Arrow function]
let titlecaps =(stri)=>{
     let b = stri.toLowerCase().split(" ");
    for(let i=0;i<b.length;i++){
        b[i]=b[i].charAt(0).toUpperCase()+b[i].slice(1);
    }
    return b.join(" ");
};
let cap = titlecaps("BUTTER black coffee");
console.log(cap);