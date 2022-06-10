class Uberprice{
    constructor(distance,person){
        this.distance=distance;
        this.person=person;
    }
    n() {
        console.log(this.distance);
        console.log(this.person);
    }
    distanceRate(){
        let amtPerkm=35;
        let d=amtPerkm*this.distance;
        return d;
    }
    farePerson(){
        let amtPerson=50;
        let f= amtPerson*this.person;
        return f;
    }
    totalFare(x,y){
        return x+y;
    }
   
}
let new_object= new Uberprice(7, 1);
new_object.n(); //7
                //1
let a = new_object.distanceRate();
console.log(a);  //245

let b = new_object.farePerson();
console.log(b);   //50

let rate=new_object.totalFare(a,b);
console.log(rate);  //295

