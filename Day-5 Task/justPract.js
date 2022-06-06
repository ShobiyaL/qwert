var num = 10;
function addFive(num) { 
     return 5+num;
}
var result = addFive(num)
console.log(result);//15

// Write a function called “getOpposite”.
// Given a number, return its opposite
let nu = -5;
function getOpposite(num) {
    if( Number.isInteger(num)){
        return -1*num;
    }else if(num==0){
        return 0;
    }else if (typeof(num==="string")){
        return -1;
    }else if( typeof num === 'number' &&!Number.isInteger(num)){
        return -1;
    }    
    }
let pro = getOpposite(nu)
console.log(pro);//5

// Fill in your code that takes an number minutes and converts it to seconds.

var min = 5;
var secs = toSeconds(min);
console.log(secs);       //300
function toSeconds(min) {
    let seconds = min*60;
    return seconds;
 }

// Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
    let i = +mystr;
    return i;
}
var myint = toInteger(mystr);
console.log(typeof(myint));//number
console.log(myint);//5

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
    myint++;
    return myint;
}
var myNextint = nextNumber(myint);
console.log(myNextint);//1

// Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
    console.log(arr[0]);
}
getFirstElement(arr);//1

// Convert Hours into Seconds
// Write a function that converts hours into seconds.
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    let sec;
    let A=[];
    for(let i of arr){
        sec=i*3600;
        A.push(sec);
    }  
    console.log(A);  
}
hourToSeconds(arr);   //[ 3600, 7200, 10800 ]

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
    let P=2*(num1+num2);
    return P;
}
var peri = findPerimeter(6,7)
console.log(peri);

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    let nNum = num1+num2;
    if(nNum<100){
        return true;
    }else{
        return false;
    }
}
var res = lessThan100(22,15);
console.log(res);//true

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(num1,num2) {
    let N = num1%num2;
    return N;
}
var res = remainder(1,3);
console.log(res);//1

// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function CountAnimals(tur,horse,pigs) {
    let turLegs=2*tur;
    let horseLegs=4*horse;
    let pigslegs=4*pigs;
    let total=turLegs+horseLegs+pigslegs;
    return total;
}
var legs = CountAnimals(2,3,5);
console.log(legs);//36

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
    let fpS=60*num1*num2;
    return fpS;
}
var fps = frames(1,2);
console.log(fps);    //120

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
    if(num1%5==0){
        return true;
    }else{
        return false;
    }
}
var divisible = divisibleByFive(5);
console.log(divisible);//true

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
function isEven(num){
    if(num%2==0){
        return true;
    }else if(typeof(num=="")){
        return -1;
    }else{
        return false;
    }
 
}
var even = isEven(5);
console.log(even);//false

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
    if(num1%2!=0&&num2%2!=0){
       return true;
    }else{
        return false;
    }
 // your code here
}
let odd= areBothOdd(2,3);
console.log(odd);//false

// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName){
    let full_name=firstName+" "+lastName;
    console.log(full_name);
}
getFullName("GUVI", "GEEK");//GUVI GEEK

// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
    if(typeof(word1)=="string"){
    let strLen=word1.length;
    console.log(strLen);
    }else if(word1==null){
        console.log(-1);
    }else if((word1)==Number){
        console.log(-1);
    }else if(word1==""){
        console.log(0);
    }
}
getLengthOfWord('GUVI');//4

// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
 let s1=word1.length;
 let s2=word2.length;
 if(s1==s2){
     return true;
 }else{
     return false;
 }
}
let Y =  isSameLength("GUVIGEEK", "GEEK");
console.log(Y);//false

// Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2){
    let distance=Math.sqrt((x2-x1)**2+(y2-y1)**2);
    return distance.toFixed(2);
}
 //360.56

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array,n){
    for(let i in array){
        if(i==n){
            return array[i];
        }else if(array.length==0){
            return undefined;
        }
    }
}
let nth=getNthElement([1,3,5], 2);
console.log(nth);  // 5;
// Problem:

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array){
    if(array.length!=0){
     console.log(array[array.length-1]);
    }else if(array.length==0){
        console.log(-1);
    }
}
getLastElement([1, 2, 3, 9]);//9

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
 mykey: "value",
};
function getProperty(obj, key) {
for(let elemnt in obj){
    if(key!=elemnt){
        console.log(undefined);
    }else{
    console.log(obj[elemnt]);
    }
}
}
getProperty(obj,'mykey');//value
getProperty(obj,'dummykey');//undefined
// Problem:

// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {
 mykey: 'value'
};
function addProperty(obj, key){
    obj[key]="true";
    console.log(obj);
}
addProperty(obj,"keys");//{ mykey: 'value', keys: 'true' }

// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
function removeProperty(obj, key){
    delete obj[key];
    console.log(obj);
}
removeProperty(obj, "keys");
console.log(obj["keys"]);// undefined

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let array=[];
    let count=0;
    let sum=0;
    for(let element of arr){
       if(element<0){
           sum+=element;
       }else if(element>=0){
           count++;
       }
   }
   array.push(count,sum);
   return array;
}
console.log(ar2(arr));

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar){
    let e=[];
    for(let i=0;i<ar.length;i++){
        if(ar[i]>0){
            e.push(ar[i]);
        }
    }
    return e;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);//[ 10, 12, 5, 90, 1 ]

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
    let res=[];
    for(let i=0;i<=n;i++){
        res.push(2**i);
    }
  return res;
}
let result1=powersOfTwo(3);
console.log(result1);//[ 1, 2, 4, 8 ]
// Problem:

// Find the maximum number in an array of numbers
function findMax(ar){
    let max=[0];
    for(let el of ar){
        if(max<el){
            max=el;
        }
    }
    return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:", max);

// Print the first 100 prime numbers

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes){
 var n = 0;
 var i = 2;
 
 while(n < nPrimes){
 if (isPrime(i)){
 console.log(n, "→"  , i);
 n++;
 }
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n){
   for(i=2;i<n;i++){
       if(n%2==0){
           return false;
       }
   }
   return true;
}


//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt){
    var ar = [];
    var i = startAt;
    while(ar.length < nPrimes){
        if (isPrime(i)){
            ar.push(i);
        }
        i++;
    }
    return ar;
}
// Returns true if a number is prime
function isPrime(n){
    if (n < 2)
        return false;   
    if (n == 2)
        return true;
    var maxDiv = Math.sqrt(n);
    for(var i = 2; i <= maxDiv; i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
} 
//[101, 103, 107, 109,113, 127, 131, 137,139, 149]

// Reverse a string
var s = reverseString("JavaScript");
console.log(s);                      //tpircSavaJ
function reverseString(s){
    let str=s.split("");             //return a new array of strings
    let rev = str.reverse();         //reverse the newly created array elements
    let revJ = rev.join("");         //join all the elements of an array into a string
    return revJ;
}

// Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1){
   result.push(el);
}
for(let el of ar2){
   result.push(el);
}
 return result;
}
//[ 1, 2, 3, 4, 5, 6 ]

// Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));//57.3 
function sumCSV(s){
    let a = s.split(",");
    //console.log(a);  //['1.5',' 2.3',' 3.1',' 4',' 5.5',' 6',' 7',' 8',' 9','10.9']
    let sum=0;
    for(let v of a){
        sum+=Number(v);
    }
    return sum;
}
