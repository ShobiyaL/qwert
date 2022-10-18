let heading = document.createElement("h1");
heading.setAttribute("id", "title");
heading.setAttribute("class", "text-center");
heading.innerText = "Weather Summary For Countries";
document.body.appendChild(heading);

let container = document.createElement("div");
container.className = "container";

document.body.appendChild(container);

let row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

// let col = document.createElement("div");
// col.setAttribute("class", "col-md-12");
// row.appendChild(col);

let countries = async()=> {
   let res = await fetch("https://restcountries.com/v3.1/all");
   let country_res = await res.json();
//    console.log(country_res);


   country_res.forEach(async (element)=>{
    //getting required info from api to display in the card.
    let name = element.name.common
    let flag = element.flags.png;
    let capital = element.capital;
    let region = element.region;
    let country_code= element.cca2;
    let lat = element.latlng[0];
    let lng = element.latlng[1];   
    
    let col = document.createElement('div');
    col.setAttribute('class', 'col-sm-12  col-lg-4 mb-2 ');
    row.append(col);

    let card = document.createElement('div');
    card.setAttribute('class', 'card h-100 ');
    card.setAttribute('style',"width:18rem;")
    col.append(card);

    let title = document.createElement('h3');
    title.setAttribute('class', 'card-header text-center');
    title.innerHTML = `${name}`;
    card.appendChild(title);

    let flag_img = document.createElement('img');
    flag_img.setAttribute('src',`${flag}`);
    flag_img.setAttribute("class","card-img-top mt-2");
    card.appendChild(flag_img);

    let card_body = document.createElement('div');
    card_body.setAttribute('class','card-body text-center');
    card.append(card_body);

    let cap = document.createElement('h6');
    cap.innerText=`Capital: ${capital}`;
    card_body.appendChild(cap);

    let reg = document.createElement('h6');
    reg.innerText=`Region: ${region}`;
    card_body.appendChild(reg);

    let c_c = document.createElement('h6');
    c_c.innerText=`Country_code: ${country_code}`;
    card_body.appendChild(c_c);

    let latlng = document.createElement('h6');
    latlng.innerText=`latlng: ${lat}, ${lng}`;
    card_body.appendChild(latlng);

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-primary');
    button.innerText="Click For Weather";
    card_body.appendChild(button);

    //to get weather details
   //  ======================WEATHER =====================
    let w_data=  await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b6d82870ef4b57dd7863775a5565f82e&units=metric`)
   let weather_data =await w_data.json();
// console.log(weather_data);
     button.addEventListener('click', weather)
     function weather(){
      document.querySelector('.container').innerHTML="";

      let wd_row = document.createElement("div")
        wd_row.classList.add("row","g-3","container")
        container.append(wd_row);

      let wd_col= document.createElement('div');
      wd_col.className="col-auto col-lg-4 col-sm-12";
      wd_row.append(wd_col);
     
      let w_card = document.createElement('div');
      w_card.setAttribute("class","card h-100")
      w_card.setAttribute("style","width: 18rem;")
      wd_col.append(w_card);

      
      let title = document.createElement("div")
        title.setAttribute("class","card-header text-center")
        title.innerHTML =`<h3>${name}</h3>`;
        w_card.append(title);
      
      let w_flag = document.createElement("img");
      w_flag.setAttribute("src",`${flag}`);
      w_flag.setAttribute("alt",'...');
      w_flag.setAttribute('class','card-img-top mt-2');
      w_card.append(w_flag);

      let w_body = document.createElement('div');
      w_body.className = 'card-body text-center';
      w_card.append(w_body);
 
      let weather = document.createElement('h6');
      weather.innerText=`Weather: ${weather_data.weather[0].main}`;
      w_body.appendChild(weather);

      let temp = document.createElement('h6');
      temp.innerText=`Temperature: ${weather_data.main.temp}`;
      w_body.appendChild(temp);

      let wind_speed = document.createElement('h6');
      wind_speed.innerText=`Wind_Speed: ${weather_data.wind.speed}`;
      w_body.appendChild(wind_speed);

    let button = document.createElement('button');
    button.setAttribute("class",'btn btn-primary');
    button.innerText='Refresh'
    w_body.appendChild(button);

    button.addEventListener('click', ()=>{
      location.reload();
    });   
     }
   })
}

countries()