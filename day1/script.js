document.querySelector("button").addEventListener("click",()=>{
    input=document.querySelector("input")
    if(!input.checkValidity()){
        input.style.border="1px solid red";
        document.querySelector(".input .top h3").style.visibility="visible";
        input.classList.add("error")
    }
    else{
        input.style.border="1px solid rgba(128, 128, 128, 0.484)";
        document.querySelector(".input .top h3").style.visibility="hidden";
        document.querySelector("#name").innerHTML=input.value;
        document.querySelector(".main").classList.toggle("hide");
        document.querySelector(".done").classList.toggle("hide");
        input.classList.remove("error")
    }
})
function reset(){
    document.querySelector(".main").classList.toggle("hide");
    document.querySelector(".done").classList.toggle("hide");
    document.querySelector("input").value="";
}
