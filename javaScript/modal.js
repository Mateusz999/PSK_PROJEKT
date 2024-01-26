const openModal = document.getElementById("openModal");
const openModall = document.getElementById("openModall");
const closeModal = document.getElementById("closeModal");
const sendModal = document.getElementById("send");
const infoModal = document.getElementById("informacja");
const openModalll = document.getElementById("openModalll");

openModal.addEventListener("click",()=>{
    document.getElementById("modal").style.display="block";
    document.getElementById("main").style.opacity="0.2";
})
openModall.addEventListener("click",()=>{
    document.getElementById("modal").style.display="block";
   document.getElementById("main").style.opacity="0.2";
})
openModalll.addEventListener("click",()=>{
    document.getElementById("modal").style.display="block";
   document.getElementById("main").style.opacity="0.2";
})
closeModal.addEventListener("click",()=>{
    document.getElementById("modal").style.display="none";
    document.getElementById("main").style.opacity="1";
})

sendModal.addEventListener("click",()=>{
    infoModal.innerHTML = "Wiadomość została wysłana na maila";
    
    setTimeout(()=>{
        document.getElementById("modal").style.display="none";
        document.getElementById("main").style.opacity="1";
    infoModal.innerHTML = "";
    },1000)
})
let modal = document.getElementById("main");
window.onclick = (event)=> {
if (event.target == modal) {
document.getElementById("modal").style.display="none";
document.getElementById("main").style.opacity="1";
}
}