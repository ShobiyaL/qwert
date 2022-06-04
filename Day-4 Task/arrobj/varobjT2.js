//Simple problems

//1. Square of a number
let s = 7;
s**=2;
console.log(s); //49

//2. Swapping 2 numbers
let a=10;
let b=20;
a=a+b;
b=a-b;
a=a-b;
console.log(a); // 20
console.log(b); //10

//3. Addition of 3 numbers
let ten=10;
let nine=9;
let seven=7;
let total=ten+nine+seven;
console.log(total); //26

//4. Celsius to Fahrenheit conversion
let celsius=36;
let fahrenheit=(celsius*1.8)+32;
console.log(fahrenheit); //96.8

//5. Meter to miles
let meter = 10;
let miles = meter/1609.344;
console.log(miles.toFixed(7)); // 0.0062137

//6. Pounds to kg
let pounds = 120;
let kg= pounds*0.4535;
console.log(kg); //54.42

//7. Calculate Batting Average
let runs = 10000;
let matches = 250; 
let not_out = 50;
let notDismissed;
let battingAvg;
notDismissed=matches-not_out;
battingAvg = runs/notDismissed;
console.log(battingAvg);  //50

//8. Calculate five test scores and print their average
let arr=[50,90,46,98,77];
let tot=0;
for(let el of arr){
    tot+=el;
}
console.log(tot);         //361
let avg = tot/arr.length;
console.log(avg);         //72.2

//9. Power of any number x ^ y.
let x =5;
let y = 3;
let pow=Math.pow(x,y);
console.log(pow); //125

//10. Calculate Simple Interest
let p=10000;
let n=4;
let r=7;
let SI=(p*n*r)/100;
console.log(SI);//2800

//11. Calculate area of an equilateral triangle
let side=3;
let areaET=(1/4)*(Math.sqrt(3)*side**2);
console.log(areaET.toFixed(2));//3.90

//12. Area Of Isosceles Triangle
let ba=4;
let h=5;
let area=1/2*ba*h;
console.log(area);//10

//13. Volume Of Sphere
let rad=3;
const pi=22/7;
let V=4/3*pi*rad**3;
console.log(V.toFixed(2)); //113.14

//14. vofPrism
let a1=3;
let b1=4;
let h1=6;
let v=1/2*a1*b1*h1;
console.log(v);  //36

//15. Find area of a triangle.
let s1=3;
let s2=7;
let s3=8;
let S=(s1+s2+s3)/2;
console.log(S); //9
let areaT= Math.sqrt(S*((S-s1)*(S-s2)*(S-s3)));
console.log(areaT.toFixed(2)); //10.39

//16. Give the Actual cost and Sold cost, Calculate Discount Of Product
let ac=150;
let sc=120;
let dis=ac-sc;
console.log(dis);//30

//17. Given their radius of a circle and find its diameter, circumference and area.
let r1=7;
const pi1=Math.PI;
let dia=2*r;
let circum=2*pi1*r;
let cirarea=pi1*r**2;
console.log(dia);   //14
console.log(circum.toFixed(2)); //43.98
console.log(cirarea.toFixed(2));  //153.94

//18. Given two numbers and perform all arithmetic operations.
let ed=5;
let ab=3;
console.log(ed+ab);//8
console.log(ed-ab);//2
console.log(ed*ab);//15
console.log((ed/ab).toFixed(2));//1.67
console.log(ed%ab);//2
console.log(ed**ab);//125

//19. Display the asterisk pattern as shown below(No loop needed):
let str ="* * * * *";
str+= "\n";
let ti=5;
  console.log(str.repeat(ti));
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

//20. Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill
//of that consumer if per unit rate is 10?
let wPHr=100;
let wh=wPHr*24*30; // gives consumption for one month in watt hour
let kwh=wh/1000;
//1unit=1kwh;
let unit=kwh;
console.log(unit);//72
let cpu=10;
let bill= unit*cpu;
console.log(bill);//720

//21. Program To Calculate CGPA
let points=[9,7,8,8,9];
let total1=0;
for(let i=0;i<points.length;i++){
    total1+=points[i];
}
console.log(total1);                  //41
let cgpa=total1/points.length;
console.log(cgpa);                   //8.2
let cgpapercent=cgpa*9.5;
console.log(cgpapercent.toFixed(2)); //77.89