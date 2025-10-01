const highPriorityCheck = document.querySelector("#highPriorityCheck");
const mediumPriorityCheck = document.querySelector("#mediumPriorityCheck");
const lowPriorityCheck = document.querySelector("#lowPriorityCheck");

console.log(highPriorityCheck + mediumPriorityCheck + lowPriorityCheck);

highPriorityCheck.addEventListener("change", function() { mediumPriorityCheck.checked = false; lowPriorityCheck.checked = false; });
mediumPriorityCheck.addEventListener("change", function() { highPriorityCheck.checked = false; lowPriorityCheck.checked = false; });
lowPriorityCheck.addEventListener("change", function() { highPriorityCheck.checked = false; mediumPriorityCheck.checked = false; });

mediumPriorityCheck.checked = true;
console.log(mediumPriorityCheck.check)

