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
     getTaskDateAndDescription 
     { 
        return `$(this.date) - ${this.description}` 
     }
  
}

// start regisrering av to-do ting

const addTaskToListButton = document.querySelector("#addTaskToListButton");


function addTaskToList()
{

}
