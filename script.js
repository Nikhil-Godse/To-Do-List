const inputBox = document.querySelector("#inputBox");
const addbutton = document.querySelector("button");
const listContainer = document.querySelector(".listContainer");
const delbutton = document.querySelector("#del")
let count = 0;

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        count++
    }
    inputBox.value ="";
    saveData()
}

addbutton.addEventListener("click", ()=>{
    addTask()
})

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData()
        
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
    }
}, false);



function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

function deletTask(){
    localStorage.removeItem("data")
}

delbutton.addEventListener("click",()=>{
    if (confirm("Are you sure you want to delet all task") == true) {
        deletTask()
        showTask()
    }
})

showTask()