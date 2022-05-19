
//print odd numbers in an array[IIFE]

(function() {
    let b=[];
    for(let i=1;i<=10;i++){
        b.push(i);
        i++;
    }
    console.log(b);
})();

//[anonymous function]
let odd_numbers = function(){
    let a=[];
    for(let i=1;i<=10;i++){
        a.push(i);
        i++;
    }
    return a;
};
let odds=odd_numbers();
console.log(odds);

//{arrow function}
let oddNum=()=>{
    let c =[];
    for(let i=1;i<=10;i++){
        c.push(i);
        i++;
    }
    return c;
};   
oddNum();
console.log(oddNum());


