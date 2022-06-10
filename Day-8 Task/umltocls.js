class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    Circle(){
        console.log(this.radius);
        console.log(this.color);
    }
    get getRadius(){
        return this.radius;
    }
    setRadius(r){
        return r;
    }
    get getColor(){
        return this.color;
    }
    setColor(c){
        return c;
    }
    toString(){
        return `Circle[radius=${this.radius} color=${this.color}]`
    }
    get getArea(){
        return Math.PI*this.radius*this.radius;
    }
    get getCircumference(){
        return 2*Math.PI*this.radius;
    }
    
}
let object = new Circle(7,"Black");
object.Circle();                                //7  //Black
console.log(object.getRadius);                  //7
console.log(object.setRadius=17);               //17
console.log(object.getColor);                   //Black
console.log(object.setColor="Blue");            //Blue
console.log(object.toString());                 //Circle[radius=7 color=Black]
console.log(object.getArea.toFixed(2));         //153.94
console.log(object.getCircumference.toFixed(2));//43.98
