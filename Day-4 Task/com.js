//JSON object comparison

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let output = true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1){
        if(obj1[key]== obj2[key]){
              continue;
        }
        else{
              output = false;
              break;
        }
    }
}
else{
      output=false;     
}
console.log(output+" both have same values")
//true both have same values