class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(rating==null){
            this.rating="PG"
        }
    }
    getPG(array){
       let newArray = array.filter(element => element.rating=="PG");
       console.log(newArray);
    }
};
let picture = new Movie ("Casino Royale","Eon Productions","PG13");
let picture1 = new Movie ("This is us","Amazon");
let picture2 = new Movie("Undone","AP","R");
let picture3 = new Movie("Upload","AS","PG")
let Arr = [picture,picture1,picture2,picture3];
picture.getPG(Arr);

// output

// // [
//   Movie { title: 'This is us', studio: 'Amazon', rating: 'PG' },
//   Movie { title: 'Upload', studio: 'AS', rating: 'PG' }
// ]