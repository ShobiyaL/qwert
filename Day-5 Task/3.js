//sum of all numbers in an array[anonymous function]
let addition= function(arr){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=arr[i];
    }
    return sum;
}
let arr=[7,70,700];
let n=arr.length;
let ADD=addition(arr);
console.log(ADD);


//print odd numbers in an array[IIFE]
(function Addition (Arr){
   let Sum=0;
   for(let i=0;i<Arr.length;i++){
    Sum+=Arr[i];
   }
   console.log(Sum);
})(Arr = [7,70,700]);

// let add=Addition(Arr);
// console.log(add);

//arrow function
let AdD = (ArR)=>{
    let suM=0;
    for(let i=0;i<ArR.length;i++){
        suM+=ArR[i];
    }
    return suM;
}
let ArR=[7,70,700];
console.log(AdD(ArR));