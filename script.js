// priority check boxes

const highPriorityCheck = document.querySelector("#highPriorityCheck");
const mediumPriorityCheck = document.querySelector("#mediumPriorityCheck");
const lowPriorityCheck = document.querySelector("#lowPriorityCheck");

console.log(highPriorityCheck + mediumPriorityCheck + lowPriorityCheck);

highPriorityCheck.addEventListener("change", function() { mediumPriorityCheck.checked = false; lowPriorityCheck.checked = false; });
mediumPriorityCheck.addEventListener("change", function() { highPriorityCheck.checked = false; lowPriorityCheck.checked = false; });
lowPriorityCheck.addEventListener("change", function() { highPriorityCheck.checked = false; mediumPriorityCheck.checked = false; });

mediumPriorityCheck.checked = true;
console.log(mediumPriorityCheck.check)

// end priority check box rutiner

// dark/light mode toggle

let darkMode = true;

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

const darkLightIcon = document.querySelector("#darkLightIcon");
darkLightIcon.addEventListener("click", darkLightModeToggle);

// end dark/light mode toggle