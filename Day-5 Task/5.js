//return palindrome in an array
//[anonymous function]
let palindrome = function(arr){
   let pali=[];
   for(let i=0;i<arr.length;i++){
       if(isPalin(arr[i])){
           pali.push(arr[i]);
       }
   }
   return pali
}
let isPalin = function(word){
    for(let j=0;j<Math.floor(word.length/2);j++){
        if(word[j]!=word[word.length-(j+1)]){
            return false;
        }
    }
    return true;
};
 let A=palindrome(["madam","civic","mountain","series","asdfgfdsa"]);
console.log(A);

//[Arrow Function]
let B = (array)=>{
    let palin=[];
    for(let i=0;i<array.length;i++){
        if(palindrome(array[i])){
            palin.push(array[i]);
        }
    }
    return palin;
};
 palindrome = (wstr)=>{
    for(k=0;k<Math.floor(wstr.length/2);k++){
        if(wstr[k]!=wstr[wstr.length-(k+1)]){
            return false;
        }
    }
    return true;
};
let c=[121,131,156,171,3456543,123]
let drome = B(c);
console.log(drome);

