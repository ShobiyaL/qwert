//Remove duplicates from an array
//IIFE
(function (arr,n){
    let array=arr.sort();
    let A=[];
    for(let i=0;i<=n;i++){
        if(array[i]!=array[i+1]){
           A.push(array[i]);
        }
    }
    console.log(A);
})(arr=[1,2,1,1,3,3,1,4,7,4], n=arr.length);

//[Anonymous Function]
let removeDups = function (array){
     let arr=array.sort();
     let b=[];
     for(let i=0;i<arr.length;i++){
         if(arr[i]!=arr[i+1]){
             b.push(arr[i]);
         }
     } 
     return b;
}
let arN=removeDups([9,9,7,8,7,6,7]);
console.log(arN);