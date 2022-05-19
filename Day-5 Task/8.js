//IIFE
(function rotateByK (array,n,K){
    K=K%n;
    let arr=[];
    for(let i=0;i<n;i++){
        if(i<K){
            arr.push(array[n+i-K]);
        }else{
            arr.push(array[i-K]);
        }
    }
    console.log(arr);
}) ( array=[1,2,3,4,5],
     n=array.length,
    3) ;




//Anonymous function
let arrayRotate = function(arr,N,k){
    k=k%N;
    let array=[];
    for(let i=0;i<N;i++){
        if(i<k){
            array.push(arr[N+i-k]);
        }else{
            array.push(arr[i-k]);
        }
    }
    return array;
}
let arr=[5,4,3,2,1];
let N=arr.length;
let k=2;
let A = arrayRotate(arr,N,k);
console.log(A);
