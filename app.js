const todolist = document.getElementById("todolist")
const input = document.getElementById ("input")
const addBtn = document.getElementById("button")

let arr = [];

addBtn.addEventListener("click",function(){
    arr.push(input.value);
    input.value="";
    ShowList()

})

function ShowList(){
    todolist.innerHTML = ""

    arr.forEach(function(el,i){
        let listItem = document.createElement("li")
        let anchor1 = document.createElement("a")
        let anchor2 = document.createElement("a")
        listItem.innerText = el;
        anchor1.innerText = "Edit me"
        anchor1.onclick=()=>{
            EditList(i);
        }

        anchor2.innerText = "delete"
        anchor2.style.marginRight = "10px"
        anchor2.onclick=()=>{
             DeleteList(el,i);
        }
        listItem.append(anchor1,anchor2)
        todolist.append(listItem)
    })

}

function EditList(i){

    let newValue = prompt("Please insert new value:")

    arr.splice(i,1,newValue);
    ShowList()

}

function DeleteList(index){
    arr.splice(index,1);
    ShowList()

}