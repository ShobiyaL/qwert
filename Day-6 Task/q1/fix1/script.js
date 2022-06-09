alert("I'm invoked!");

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;//" " add space between fname and lname
alert( admin ); // "Guvi geek"

let f1name=10.5; 
f1name = "Guvi";
lname = "geek"
let name = f1name+" "+lname;
alert( 'hello ${name}' );//hello ${name}
alert(`hello ${name}`);//hello Guvi geek

let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);


var a1= "2" < "12";
//Don't touch below this
if (a1) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
//Diffused

let a2 = prompt("Enter a number?");
//Don't modify any code below this
if (a2) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
// if we dont enter a number we get "Success"

let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

let login = 'Employee';
let message = 
(login == 'Employee')? "welcome":
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);//welcome

// // You cant change the value of the msg
// let message1;
// if (null || 2 || undefined )
// {
//   message1= "welcome boss";
// }
// else
// {
//   message1 = "Go away";
// }
//   console.log(message1);//"welcome boss"

//   let mesage;
// let lock= 2;

// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   mesage = "Go away";
// }
// else
// {
//  mesage= "welcome";
// }
//   console.log(mesage);

//   let message2;
// let lock1 = "2";
// //Dont change any code below this
// if (lock1 && " " || undefined )
// {
//   message2 = "Go away";
// }
// else
// {
//  message2 = "welcome";
// }
// console.log(message2);

//You can change only 2 characters
let i = 3;
while (i) {
  console.log( i-- );
}
//3
//2
//1
//Change the code to print 1 to 10 in 4 lines
let num=10;
for(let i=1;i<=num;i++){
    console.log(i)
}

//Change the code to print even numbers
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

//   Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped  ${gifts[i]} and added a bow!`);
}
//Wrapped teddy bear and added a bow!
// Wrapped drone and added a bow!
// Wrapped doll and added a bow!

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown != 0){
      break;
  }else if(countdown==0){
    console.log("bomb triggered");
  }
}
console.log("Bomb Disarmed");

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);//hi 