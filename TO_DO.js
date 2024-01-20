let AllTaskList = []

function styleFunction(task){
    let styleLabel = document.getElementById(task +"id")
    styleLabel.style.paddingLeft = '20px'
    
    let styleCheckbox = document.getElementById(task)
    styleCheckbox.style.border = 'none';
}

function AddTask(){

    let task = prompt("Enter your Task")

    localStorage.setItem(`TODO${task}`, task)

    let checkbox = document.createElement("input")
    checkbox.type = 'checkbox'
    checkbox.id = task
    AllTaskList.push(task)
    
    let label = document.createElement("label")
    label.htlmFor = task
    label.id = task+"id"
    label.appendChild(document.createTextNode(task));

    let br = document.createElement("br")

    let TODOLIST = document.getElementById("AllNotes")
    TODOLIST.appendChild(checkbox)
    TODOLIST.appendChild(label)
    TODOLIST.appendChild(br)    

    styleFunction(task)
}    


function DeleteTask(){

    var checkedValues = [];
    

    AllTaskList.forEach((todo) =>{
        //alert("forEach "+todo)
        let checkboxes = document.getElementById(todo);
        if(checkboxes.checked){
            checkedValues.push(checkboxes.id);
        }
    })
    
    checkedValues.forEach((deleteTODO) =>{

        localStorage.removeItem(`TODO${deleteTODO}`)

        let deleteItem = document.getElementById(deleteTODO)
        deleteItem.remove()
        let checkboxLabel = document.getElementById(deleteTODO+"id")
        checkboxLabel.remove()
    })
}

