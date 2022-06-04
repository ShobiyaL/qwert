let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function(){
   console.log(request.responseText);
   let res =JSON.parse(request.responseText);
   console.log(res);
   for(let element in res){
       console.log(res[element].flag);
   }
  
}
request.onerror = function(){
    console.error("Oops,Something Went Wrong");
}
request.send();
 
// 🇵🇳 api.js:8:16
// 🇲🇺 api.js:8:16
// 🇷🇺 api.js:8:16
// 🇹🇴 api.js:8:16
// 🇸🇷 api.js:8:16
// 🇹🇬 api.js:8:16
// 🇲🇸 api.js:8:16
// 🇲🇨 api.js:8:16
// 🇪🇨 api.js:8:16
// 🇵🇦 api.js:8:16
// 🇷🇼 api.js:8:16
// 🇹🇹 api.js:8:16
// 🇮🇴 api.js:8:16
// 🇲🇾 api.js:8:16
// 🇸🇪 api.js:8:16
// 🇲🇫 api.js:8:16
// 🇦🇱 api.js:8:16
// 🇧🇻 api.js:8:16
// 🇩🇪 api.js:8:16
// 🇿🇦 api.js:8:16
// 🇫🇲 api.js:8:16
// 🇸🇨 api.js:8:16
// 🇬🇷 api.js:8:16
// 🇨🇽 api.js:8:16
// 🇲🇵 api.js:8:16
// 🇸🇮 api.js:8:16
// 🇮🇩 api.js:8:16
// 🇸🇬 api.js:8:16
// 🇧🇩 api.js:8:16
// 🇦🇶 api.js:8:16
// 🇪🇬 api.js:8:16
// 🇧🇪 api.js:8:16
// 🇱🇮 api.js:8:16
// 🇲🇭 api.js:8:16
// 🇧🇧 api.js:8:16
// 🇲🇻 api.js:8:16
// 🇨🇩 api.js:8:16
// 🇦🇺 api.js:8:16
// 🇦🇹 api.js:8:16
// 🇨🇲 api.js:8:16
// 🇹🇫 api.js:8:16
// 🇦🇼 api.js:8:16
// 🇵🇫 api.js:8:16
// 🇧🇱 api.js:8:16
// 🇬🇲 api.js:8:16
// 🇦🇮 api.js:8:16
// 🇨🇼 api.js:8:16
// 🇭🇰 api.js:8:16
// 🇧🇹 api.js:8:16
// 🇳🇮 api.js:8:16
// 🇨🇨 api.js:8:16
// 🇨🇱 api.js:8:16
// 🇳🇺 api.js:8:16
// 🇯🇴 api.js:8:16
// 🇦🇫 api.js:8:16
// 🇫🇴 api.js:8:16
// 🇩🇲 api.js:8:16

// ​

