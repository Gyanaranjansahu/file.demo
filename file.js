let button=document.querySelector(".about")
let menu=document.querySelectorAll(".container-info")
let bar=document.querySelector(".info-bar")

let con=true;
button.addEventListener("click",()=>{
    menu.forEach((val)=>{
        if(con=true){
            val.after(bar);
            con=false;
        }
        else{ 
            
           button.after(val);
           console.log("false")
        }
    })
})