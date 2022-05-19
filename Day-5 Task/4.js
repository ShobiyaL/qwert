
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
 let ar=[1,5,7];
  console.log(array.filter(isPrime));


// [Anonymous function]
let primeNumbers = function(a){
    if(a<2){
        return false;
    }
    for(j=2;j<a;j++){
        if(a%j == 0){
            return false;
        }
    }
    return a > 1;
};
let arr = [3,5,6, 7,8,9];
console.log(arr.filter(primeNumbers));

//[Arrow function]
let prime = (array) =>{
    if(array<2){
        return false;
    }
    for(i=2;i<array;i++){
        if(array % i == 0){
            return false;
        }
    }
    return array > 1;
};
let a = [1,2,3,4,5,6,7,8,9,11,13,15,16,17,29,21,22,67];
let A = a.filter(prime);
console.log(A);

