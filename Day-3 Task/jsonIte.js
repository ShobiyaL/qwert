// string format
// for-in-loop
let jsonStr='{"name":"Karnan","department":"CSE","college":"Anna university"}'
let A = JSON.parse(jsonStr);
console.log(A);

for(let element in A){
    console.log(element+":"+A[element]);
}

//output
//{ name: 'Karnan', department: 'CSE', college: 'Anna university' }
//name:Karnan
//department:CSE
//college:Anna university
