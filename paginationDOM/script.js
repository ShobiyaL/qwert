try{
    fetchData()
}catch(error){
    console.log(error.message);
}

function fetchData(){
   return fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    .then((result)=>result.json())
    .then((res)=>loadData(res))
    .catch((error)=>console.log(error))
}

function loadData  (data){
     console.log(data.length);
   let current_page=1;
   
   //change function takes button id as input and we can make request to call renderData based on the button which is clicked
   function change(input){
    if(typeof input==="number"){
        renderData(input)
       }else if(typeof input==="string"){
        switch(input){
            case "next":
            if(current_page<count_of_buttons){
                current_page=current_page+1;
                renderData(current_page);
            }
            break;
            case "first":
                if(current_page!==1) renderData(1);
                break;
            case "prev":
                if(current_page>1){
                    current_page=current_page-1;
                    renderData(current_page);
                }
            default:
                // console.log("default");
                renderData(1);
        }
       }
        
   }
   const page_buttons = document.getElementById('pagination');


//to create the required buttons according to data present..(addeventlistener to navigate) buttons call the change function
const required_buttons=(no_of_buttons)=>{
//   console.log(buttons);
for(let i=0;i<no_of_buttons;i++){
    let button = document.createElement('button');
    button.textContent=i+1;
    button.setAttribute('id',i+1)
    button.addEventListener('click',()=>change(i+1));
    page_buttons.appendChild(button)
}
if(no_of_buttons>2){
    let prev= document.createElement('button')
        prev.textContent = "prev";
        prev.setAttribute("id", "prev");
        prev.addEventListener("click", () => change("prev"));
        page_buttons.insertBefore(prev, page_buttons.firstChild);

    let next= document.createElement('button')
        next.textContent = "next";
        next.setAttribute("id", "next");
        next.addEventListener("click", () =>change("next"));
        page_buttons.append(next);
        
    let first= document.createElement('button')
        first.textContent = "first";
        first.setAttribute("id", "first");
        first.addEventListener("click", () => change("first"));
        page_buttons.insertBefore(first,page_buttons.firstChild);
}
}

let table_items = document.querySelector('#table_items');
let table= document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let table_heading=()=>{
    thead.innerHTML = `
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    </tr>`;
        table.append(thead);
        table_items.appendChild(table);
      };

let table_content=(data)=>{
   tbody.textContent="";
   data.map((el)=>
   tbody.innerHTML += `
   <tr>
   <td>${el.id}</td>
   <td>${el.name}</td>
   <td>${el.email}</td>
   </tr>
   `)
   table.append(tbody);
   table_items.append(table);
}
let total_data_length = data.length;
let data_per_page = 10;
let count_of_buttons=Math.ceil(total_data_length/data_per_page);

table_heading();
required_buttons(count_of_buttons)
renderData(current_page);

function renderData(curr_page) {
    current_page = curr_page;
    let startIndex=(current_page - 1) * data_per_page;
    let endIndex=startIndex+ data_per_page;
    let dataOnParticularPage = data.slice(startIndex, endIndex);
      // here "dataOnParticularPage" will be that particular array, we will determine after slicing
      console.log("startIndex", startIndex);
      console.log("endIndex", endIndex);
      console.log(dataOnParticularPage);
      table_content(dataOnParticularPage);
//To disable th prev and first button on startingPage
    if(current_page===1){
        prev.setAttribute('disabled',true);
        first.setAttribute("disabled", true);
        prev.classList.add("disable-button");
        first.classList.add("disable-button");
    }else {
        prev.removeAttribute("disabled");
        first.removeAttribute("disabled");
        prev.classList.remove("disable-button");
        first.classList.remove("disable-button");
    }
    //To disable the next button on the last page
    if(current_page===count_of_buttons){
        next.setAttribute("disabled", true);
        next.classList.add("disable-button");
      } else {
        next.removeAttribute("disabled");
        next.classList.remove("disable-button");
    }
    //checks active btn condition for no btns
    for (let i = 0; i < count_of_buttons; i++) {
        if (i + 1 === current_page) {
          document.getElementById(i + 1).classList.add("active");
        } else {
          document.getElementById(i + 1).classList.remove("active");
        }
      }
}
}


