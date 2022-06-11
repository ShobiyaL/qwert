let func=(from,to)=>{
    setTimeout(a=()=>{
        console.log(from);
        if(from>to){
            setTimeout(a,1000);
            document.getElementById("timer").innerHTML=from;
        }
        if(from==to){
           document.getElementById("timer").innerHTML="Happy Independence Day (@@)";
        }
        from--;
    },1000) 
}
func(10,0);