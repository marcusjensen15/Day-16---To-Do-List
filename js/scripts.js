//Business Logic
function TaskList(){
  this.totalTasks = [],
  this.currentId = 0
}

TaskList.prototype.addTask = function(newTask) {
  newTask.taskId = this.assignId();
  this.totalTasks.push(newTask);
}

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function NewTask(taskDec, dueDate, who, taskType){
  this.taskDec = taskDec,
  this.dueDate = dueDate,
  this.who = who,
  this.taskType = taskType
};

var nextTask = new TaskList();

function clicked(){
  var fired_button = $(".items").val();
  console.log(fired_button);

};

// Button to add task - Task Name, Due date, Who needs to complete it, Type of task (work, school or home)
// Button to delete task - different button for each task
// Toggle task being complete (on click)
//
//
// Way for a user to add a task
// Populate task to HTML page within div


$(document).ready(function(){
  $("#toDo").submit(function(event){

    var taskName = $("#taskName").val();
    var dueDate = $("#dueDate").val();
    var who = $("#who").val();
    var type = $("#type").val();

    var nextTask2 = new NewTask(taskName, dueDate, who, type);

    nextTask.addTask(nextTask2);
    var newI = nextTask.totalTasks.length - 1;
    var objId =  nextTask.totalTasks[newI].taskId;
    $("#to-do").append(`<li> <strong>Type: </strong> ${nextTask.totalTasks[newI].taskType}   <strong>Task: </strong>  ${nextTask.totalTasks[newI].taskDec} <strong>  For: </strong>  ${nextTask.totalTasks[newI].who} <strong>  Due By: </strong> ${nextTask.totalTasks[newI].dueDate} <button class = "items" value = "objId" onclick="clicked()"> Delete </button> <button> Mark Completed </button></li>`);

    console.log(objId);




    // nextTask.addTask(test);

    event.preventDefault();
  });


});

// Setting objId to the ID value within the object. Need to set the value of the button to that variable, because it will change for every list item
