
let div = document.createElement("div");
div.innerHTML=`<input type="text" id="text" placeholder="search by number">
<button type="button" class="text" onclick="fun()" >Search</button>`
div.className="bText";
document.body.append(div);

let url="https://www.anapioficeandfire.com/api/books";

async function fun(){
    try{
    let val = document.getElementById("text").value;
    let res = await fetch(`https://www.anapioficeandfire.com/api/books/${val}`);
    let res1=await res.json();
    console.log(res1);
    }catch(error){
        console.log(error);
    }
}

async function book(){
    
    let res= await fetch(url);
    let result= await res.json();
    console.log(result);

for(let i=0;i<result.length;i++){
    let allBooks=document.createElement("p");
    allBooks.innerHTML=`#..${result[i].name}`;  
    console.log(allBooks);
    document.body.append(allBooks);
}

//----------------name and its isbn-----------------
let div1 = document.createElement("div");
div1.setAttribute("class","cont");
document.body.append(div1);

let ulEl=document.querySelector("#list-items");
div1.appendChild(ulEl);
    for(let i=0;i<result.length;i++){
    let name=result[i].name;
    console.log(name);

    let isbn = result[i].isbn;
    console.log(isbn);
    
    let li = document.createElement("li");
    li.innerHTML=(`${name}     
    <b><i>ISBN:<i><b> `);

    let b= document.createElement("b");
    let textnode=document.createTextNode(isbn);

    b.appendChild(textnode);
    li.appendChild(b);
     
    ulEl.appendChild(li); 
    // console.log(result[i].numberOfPages);
}

let div2= document.createElement("div");
// div2.setAttribute("class","pages");
document.body.append(div2);

let pages = document.createElement("ul");
pages.setAttribute("type","square")
pages.setAttribute("class","pages")
pages.innerHTML="<b>No.of.pages</b>";
div2.appendChild(pages);

let addPages = ((array)=>{
    array.forEach(element => {
        let li = document.createElement("li");
        li.textContent = `${element.name}:  ${element.numberOfPages}  pages`;
        pages.append(li);
        console.log(li);
    });
})
addPages(result);

//-------------Authors------------------
let div3= document.createElement("div");
div3.setAttribute("id","author")
document.body.append(div3);

let authors= document.createElement("dd");
authors.innerHTML="<h4>AUTHORS</h4>"
div3.append(authors);
let A;
for(el of result){
    A = el.authors;
     console.log(A); 
}
authors.append(A);



//---------Publisher name and released date------
let publisher = document.createElement("ol");
publisher.innerHTML="<h4>Publisher name</h4>";
document.body.append(publisher);
//let pub=document.createElement("tr");
// //let date=document.createElement("tr");


for(element in result){
    let pub=document.createElement("li");
    pub.innerHTML=result[element].publisher;
    console.log(pub);
    publisher.append(pub);
}
let releasedDate= document.createElement("ul");
releasedDate.setAttribute("id","rd")
releasedDate.innerHTML="<h4>Released Date</h4>";
document.body.append(releasedDate);

for(element in result){
    let date=document.createElement("li");
    date.innerHTML=result[element].released;
    console.log(date);
    releasedDate.append(date);
}

}
  book();



      
