//Business Logic

function NewTask(taskDec, dueDate, who, taskType){
  this.taskDec = taskDec,
  this.dueDate = dueDate,
  this.who = who,
  this.taskType = taskType
};



$(document).ready(function(){



});

var test = new NewTask("fun with friends", "tomorrow", "steve", "personal");
console.log(test);

// Button to add task - Task Name, Due date, Who needs to complete it, Type of task (work, school or home)
// Button to delete task - different button for each task
// Toggle task being complete (on click)
//
//
// Way for a user to add a task
// Populate task to HTML page within div
