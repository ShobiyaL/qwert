//task3
//Write a loop that makes seven calls to console.log to output the following triangle:
let a="#";
let b="";
for(let i=0;i<7;i++){
    b+=a;
    console.log(b);
}
// #
// ##
// ###
// ####
// #####
// ######
// #######

//2. Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>","<option>Blues</option>","<option>New Age</option>",
      "<option>Classical</option>",
      "<option>Opera</option>"]
let str="";
for(let el of strArray){
    str+=el+"\n";
}
console.log(str);
/* <option>Jazz</option>
<option>Blues</option>
<option>New Age</option>
<option>Classical</option>
<option>Opera</option> */

// Arrays:

// write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55]
let length=0;
while(myarray[length]!=undefined){
    length++;
}
console.log(length);  //5

//Declare an empty array;
let empty =[];
console.log(empty);  //[]

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods=["Dark chocolate","Chocolate","Mango","Dosa","Chapathi","Idly","Curd","Potatoes","Tomatoes","Tofu","Almond",
"Poha","Orange","Beans","Carrot","Spinach","Roti","Bread","Wheat bread","Peanut butter"];

// How can you find your fifth favorite food?
let five = foods[4];
console.log(five);  //Chapathi

//Find the length of your foods array
let fL = foods.length;
console.log(fL);    // 20

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i]=="Mari"){
            input[i]="Munnabai";
        }
    }
    console.log(input);
}
dataHandling(friends);

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling1(arr){
    let done=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="CaptianAmerica"){
            break;
        }
        done.push(arr[i]);
    }
    console.log(done);
} 
dataHandling1(friends1);

//Find the person is ur friend or not.
let friends2 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling2(arr,name){
    let jeff;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==name){
           jeff= "Yes jeff is my friend";
        }
    }
    return jeff;
} 
let found = dataHandling2(friends2,'Jeff');
console.log(found);
//dataHandling2(friends2);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
let friends3 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends4= ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
function dataHandling3(a,b){
        for(let i=0;i<friends4.length;i++){
            friends3.push(friends4[i]);
        }
        console.log(friends3.sort());
     }
dataHandling3(friends3,friends4);


// 1. Get the first item, the middle item and the last item of the array
let array=["1a","2b","3c","4d","5e","6f","7g"];
console.log(array[1]);//1a

console.log(array[Math.floor(array.length/2)]);//4d //if length is odd  (Math.floor(array.length/2))
//if length is even (array.length/2)-1

console.log(array[array.length-1]);  //7g

// 2. Add your name to the end of the friends array, and add another name to beginning.
let friends_arr = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
friends_arr.push("Sofi");
friends_arr.unshift("Batman"); 
console.log(friends_arr);//['Batman','Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran','Sofi']

// 3. Add Mr or Ms to the names in the friends array.
let forest=["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let fore=[];
for(i=0;i<forest.length;i++){
     fore.push("Mr "+forest[i]); 
}
console.log(fore);   //['Mr Mari','Mr MaryJane','Mr CaptianAmerica','Mr Munnabai','Mr Jeff','Mr AAK chandran']


// 4. Concat all the names the friends array and return as comma “,” seperated string.
let city=["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
console.log(city.join(","));//Mari,MaryJane,CaptianAmerica,Munnabai,Jeff,AAK chandran

// 5. Find the friends names who has letter ‘a’ and return the list.
let town =["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function aLetter(arr){
    let aLet=[];
    for(let i=0;i<arr.length;i++){
        if(isA(arr[i])){
            aLet.push(arr[i]);
        }
    }
    return aLet;
}
let isA = function(check){
    for(let j=0;j<check.length;j++){
        if(check.includes("a")){
            return true;
        }
    }
    return false;
}
let find = aLetter(town);
console.log(find);   //[ 'Mari', 'MaryJane', 'CaptianAmerica', 'Munnabai', 'AAK chandran' ]

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let road =["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let L=[];
let avg = 0;
for(let i=0;i<road.length;i++){
    L.push(road[i].replace(" ","").length);
}
for(let j=0;j<L.length;j++){
    avg+=L[j];
}
console.log(L);   //[ 4, 8, 14, 8, 4, 11 ]
console.log(avg); //49

// 7. Find the names and return the list starting with letter M.
let nameM = road.filter((names)=>names.startsWith("M"));
console.log(nameM);//[ 'Mari', 'MaryJane', 'Munnabai' ]

// 8. Find the name with max characters and return the name.

  let lgth = 0;
  let max;
  for (var i = 0; i < road.length; i++) {
    if (road[i].length > lgth) {
      lgth = road[i].length;
      max = road[i];
    }
  }
console.log(max);

// 9. Find the name with min characters and return the name.
let road1=["abc","ab"];
let min;
let lnt=250;
for(let i=0;i<road1.length;i++){
    if(lnt>road1[i].length){
        lnt=road1[i].length;
        min =road1[i];
    }
}
console.log(min);
// — — — — — — — — — — — — — — — -

// Find the average in the array below.
// Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let num=friendsInfo.filter(i => typeof i === 'number');
console.log(num);//[ 6, 12, 1, 8, 10 ]
let sum=0;
for(let i of num){
     sum+=i;
}
let average = sum/num.length;
console.log(average);   //7.4


// — — — — — — — — — — — — — — — -
// Print the contents of the input variable

var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function data(input){
for (var i = 0; i < input.length; i++) {
    for(j=0;j<input[i].length;j++)
    console.log(input[i][j]);
}
}
data(input);
// 0001
// Roman Alamsyah
// Bandar Lampung
// 21/05/1989
// Membaca
// 0002
// Dika Sembiring
// Medan
// 10/10/1992
// Bermain Gitar
// 0003
// Winona
// Ambon
// 25/12/1965
// Memasak
// 0004
// Bintang Senjaya
// Martapura
// 6/4/1970
// Berkebun