class person{
    constructor(name,age,gender,mailId){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.mailId=mailId;
    }
};
let person1 = new person ("Karnan",25,"Male","karnan786@gmail.com");
let person2 = new person ("Abimanyu",24,"Male","abimanyu12@gmail.com");
let person3 = new person ("Sherley",30,"Female","sherleyshinny3@gmail.com");

for(details in person1){
    console.log(details+":"+person1[details]);
}
for(details in person2){
    console.log(details+":"+person2[details]);
}
for(details in person3){
    console.log(details+":"+person3[details]);
}

//output
// name:Karnan
// age:25
// gender:Male
// mailId:karnan786@gmail.com
// name:Abimanyu
// age:24
// gender:Male
// mailId:abimanyu12@gmail.com
// name:Sherley
// age:30
// gender:Female
// mailId:sherleyshinny3@gmail.com


