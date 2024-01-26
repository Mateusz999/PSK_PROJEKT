const hamburger = document.getElementById("hamburger");

const hide = document.getElementsByClassName("hide");



hamburger.addEventListener("click",()=>{
    for(i=3;i>=0;i--){
         hide[i].classList.toggle("hide-expanded");
     

    }

           
    
   
})