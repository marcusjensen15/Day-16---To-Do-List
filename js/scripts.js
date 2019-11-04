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

// function clicked(){
//   $("#li").on("click","li",function() {
//    $(this).remove();
//  });
//
// };

// var nextTask = new TaskList();
// var test = new NewTask("fun with friends", "tomorrow", "steve", "personal");
//
// nextTask.addTask(test);

// console.log(nextTask.totalTasks);

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
    $("#to-do").append(`<li> <strong>Type: </strong> ${nextTask.totalTasks[0].taskType}   <strong>Task: </strong>  ${nextTask.totalTasks[0].taskDec} <strong>  For: </strong>  ${nextTask.totalTasks[0].who} <strong>  Due By: </strong> ${nextTask.totalTasks[0].dueDate} <button  id="li" onclick="clicked()"> Delete </button> <button> Mark Completed </button></li>`);

    console.log(nextTask.totalTasks);




    // nextTask.addTask(test);

    event.preventDefault();
  });


});
