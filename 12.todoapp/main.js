let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let msg = document.getElementById('msg');
let dateInput = document.getElementById('dateInput');
let textArea = document.getElementById('textArea');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})


let formValidation = () => {
    if(textInput.value === "") {
        console.log('failure');
        msg.innerHTML= "Task can not be blank";  
    } //else is success area so acceptData function is invoked here
    else {
        console.log('success');
        msg.innerHTML= ""
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal"); 
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "")
        })();
    }
};

let data = [];



let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textArea.value,
    });

    localStorage.setItem("data", JSON.stringify(data));
    
    console.log(data);
    
    
    
    
    createTasks();
    
}; // we use this function to fetch the data from form and store in the above data object

let createTasks = () => {
    tasks.innerHTML= "";
    data.map((x,y) => {
        return(tasks.innerHTML += `
            <div id=${y}>
                <span class="fw-bold">${x.text}</span>
                <span class="small text-secondary">${x.date}</span>
                <p>${x.description}</p>

                <span class="options">
                    <i onClick= "editTask(this)" data-bs-toggle="modal"
        data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
                    <i onClick="deleteTask(this); createTasks()" class="fa-solid fa-trash"></i>
                    </span>
            </div>
    `);
    });
    
    resetForm();
};
//  function to reset the add new task;

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    
}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textArea.value = selectedTask.children[2].innerHTML; 

   deleteTask(e);
};
let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textArea.value = "";
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTasks()
    console.log(data)
})()



 