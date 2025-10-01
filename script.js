const highPriorityCheck = document.querySelector("#highPriorityCheck");
const mediumPriorityCheck = document.querySelector("#mediumPriorityCheck");
const lowPriorityCheck = document.querySelector("#lowPriorityCheck");

console.log(highPriorityCheck + mediumPriorityCheck + lowPriorityCheck);

mediumPriorityCheck.check = true;

highPriorityCheck.addEventListener("check", function() { mediumPriorityCheck.check = false; lowPriorityCheck.check = false; });
mediumPriorityCheck.addEventListener("check", function() { highPriorityCheck.check = false; lowPriorityCheck.check = false; });
lowPriorityCheck.addEventListener("check", function() { highPriorityCheck.check = false; mediumPriorityCheck.check = false; });