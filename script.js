// priority check boxes - sette opp kun en valg mulighet

const highPriorityCheck = document.querySelector("#highPriorityCheck");
const mediumPriorityCheck = document.querySelector("#mediumPriorityCheck");
const lowPriorityCheck = document.querySelector("#lowPriorityCheck");

mediumPriorityCheck.checked = true;

console.log(highPriorityCheck + mediumPriorityCheck + lowPriorityCheck);

highPriorityCheck.addEventListener("change", function() { mediumPriorityCheck.checked = false; lowPriorityCheck.checked = false; });
mediumPriorityCheck.addEventListener("change", function() { highPriorityCheck.checked = false; lowPriorityCheck.checked = false; });
lowPriorityCheck.addEventListener("change", function() { highPriorityCheck.checked = false; mediumPriorityCheck.checked = false; });



// end priority check box rutiner

// dark/light mode toggle

let darkMode = true;
const darkLightIcon = document.querySelector("#darkLightIcon");

function darkLightModeToggle()
{
    const main = document.querySelector("body");
    if(darkMode) 
    {
        main.classList.add("lightMode");
        darkMode = false;
    }
    else
    {
        main.classList.remove("lightMode");
        darkMode = true;
    }
}


darkLightIcon.addEventListener("click", darkLightModeToggle);

// end dark/light mode toggle

// klasse for MyTask

const highPriority = 1;
const mediumPriority = 2;
const lowPriorty = 3;


class MyTask 
{
    description;  // beskrivelse av to-do task
    date;         // dato
    priority;     // prioritet
    isCompleted;  // boolean for å skjekke om den er fullført

    constructor(description, date, priority)
    {
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.isCompleted = false;
    }
    
     setAsCompleted() { this.isCompleted = true; }    
     getTaskDateAndDescription() 
     { 
        return `$(this.date) - ${this.description}` 
     }
  
}

// start regisrering av to-do ting

const addTaskToListButton = document.querySelector("#addTaskToListButton");
addTaskToListButton.addEventListener("click", addTaskToList)

// setter denne globalt, skal brukes flere gange

const toDoList = document.querySelector("#toDoList");

function getProperDateString(dateTimeObject)
{
    const date = new Date(dateTimeObject);
    const month = date.getMonth()+1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;    
}


function addTaskToList(event)
{
    event.preventDefault();

    // hent data først

    const taskToDoInput = document.getElementById("taskToDoInput").value;
    console.log(taskToDoInput);

    const taskDateInput = document.getElementById("taskDateInput").value;
    console.log(taskDateInput);

    // lag list element

    const newTask = document.createElement("li");
    // const taskString = taskDateInput + "    -   " + taskToDoInput;
    newTask.textContent = getProperDateString(taskDateInput);
    
     newTask.classList.add("listElement");
     newTask.style.color = "white";

    // lag task som p element child - dette fordi jeg trenger å separere dato og task - grid

    const taskText = document.createElement("p");

    if(highPriorityCheck.checked) taskText.style.color = "var(--highPriorityColor)";
    else if(mediumPriorityCheck.checked) taskText.style.color = "var(--mediumPriorityColor)";
         else taskText.style.color = "var(--lowPriorityColor)";

    taskText.textContent = taskToDoInput;

    newTask.appendChild(taskText);

    // lag buttons

    const taskDoneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    const taskDoneImg = document.createElement("img");
    taskDoneImg.src ="/Icons/taskdone_alpha.png";
    taskDoneImg.style.width = "60px";

    const deleteImg = document.createElement("img");
    deleteImg.src ="/Icons/slett.png";
    deleteImg.style.width = "60px";

    taskDoneButton.appendChild(taskDoneImg);
    deleteButton.appendChild(deleteImg);
    // deleteButton.src = "/Icons/recycle-bin.png";
    // taskDoneButton.textContent = "Oppdrag utført !";
    // deleteButton.textContent = "Slett meg !"

    taskDoneButton.classList.add("listButton");
    deleteButton.classList.add("listButton");
    
    taskDoneButton.addEventListener("click", function() { this.parentElement.classList.add("taskDone"); });
    deleteButton.addEventListener("click", function () { this.parentElement.remove();} );
    
    // legg buttons til list element

    newTask.appendChild(taskDoneButton);
    newTask.appendChild(deleteButton);

    toDoList.appendChild(newTask);

}

