// Array JSON

let obj = [{
    "name":"Mithran",
    "department":"EEE",
    "college":"PSG"
},
{
    "name":"Arjunan",
    "department":"ECE",
    "college":"SriKrishna"
}];

// for loop
for(let i=0;i<obj.length;i++){
    console.log(obj[i]);  
    let a=obj[i];
    for(let keys in a){
        console.log(keys+":"+a[keys])
    }  
}
//{ name: 'Mithran', department: 'EEE', college: 'PSG' }
//name:Mithran
//department:EEE
//college:PSG
//{ name: 'Arjunan', department: 'ECE', college: 'SriKrishna' }
//name:Arjunan
//department:ECE
//college:SriKrishna

//for-of-loop
for(let prop of obj){
    console.log(prop);   
}
//{ name: 'Mithran', department: 'EEE', college: 'PSG' }
//{ name: 'Arjunan', department: 'ECE', college: 'SriKrishna' }

// for-in-loop
for(let element in obj){
    console.log(obj[element]);
}
 //{ name: 'Mithran', department: 'EEE', college: 'PSG' }
//{ name: 'Arjunan', department: 'ECE', college: 'SriKrishna' }    


// for each loop
obj.forEach(key => console.log(key));

//{ name: 'Mithran', department: 'EEE', college: 'PSG' }
//{ name: 'Arjunan', department: 'ECE', college: 'SriKrishna' }