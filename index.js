let head=document.getElementById("heading").style.color="red"; 


let bttn=document.getElementById("bttn");
bttn.addEventListener("click", replace);
function replace(){
    document.getElementById("txt").innerText="Welcome to Elevation Academy";
}

let btn=document.getElementById("btn");
btn=addEventListener("click",chdir);
function chdir(){
document.getElementById("container").style.flexDirection="column";
}