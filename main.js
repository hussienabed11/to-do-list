const inputbox=document.getElementById("inputbox")
const listcontainer=document.getElementById("list_container")

function addTask(){
    if(inputbox.value === ""){
        alert("You must write somhing !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click" , function(e){
      if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
      }
      else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
      }
    
}, false)

function saveData (){
    localStorage.setItem("data" , list_container.innerHTML)
}
function showTask (){
    list_container.innerHTML = localStorage.getItem("data")
}
showTask();