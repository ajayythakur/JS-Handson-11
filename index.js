let head=document.getElementById("heading").style.color="red"; 


let bttn=document.getElementById("bttn");
bttn.addEventListener("click", replace);
function replace(){
    document.getElementById("txt").innerText="Welcome to Elevation Academy";
}