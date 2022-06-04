//Task 1: Simple Programs todo for variables
    //1.Declare four variables without assigning values and print them in console
let ab;
let bc;
var cd;
let de;
console.log(ab);//undefined
console.log(bc);//undefined
console.log(cd);//undefined
console.log(de);//undefined

// 2. How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");//"myvar"
console.log(myvar); //1;

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let first_name;
let last_name;
let maS;
let country;
let age;

//4. Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName, lastName, marital_status, cont, age0;

//5. Declare variables and assign string, boolean, undefined and null data types
let Q = "peace";
let W = true;
let E;
let R = null;
console.log(Q); //peace
console.log(W); //true
console.log(E); // undefined
console.log(R); //null

//6. Convert the string to integer
let free = parseInt('17');
console.log(free);//17
console.log(typeof(free));//number


let fre = Number('34');
console.log(fre);//34
console.log(typeof(fre));//number

let fr = +"25";
console.log(fr);//25
console.log(typeof(fr));//number

//7. Write 6 statement which provide truthy & falsey values.
let a = 5;
if(a<3){
    console.log(true);
}else{
    console.log(false);
}
//false

let b =(4<5)&&(4>4) ;
console.log(b);//false

let c =(4<5)||(4>4);
console.log(c);//true

let d =!((5>4)||(4>4));
console.log(d);//false

let e = (10>3)&&(3==3)&&(5<2);
console.log(e);//false

let f=10;
if(f==10){
    console.log(true);
}else{
    console.log(false);
}
//true


