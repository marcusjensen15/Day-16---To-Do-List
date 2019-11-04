//Business Logic
function TaskList(){

  this.totalTasks = []

}

TaskList.prototype.addTask = function(newTask) {
  this.totalTasks.push(newTask);
}


function NewTask(taskDec, dueDate, who, taskType){
  this.taskDec = taskDec,
  this.dueDate = dueDate,
  this.who = who,
  this.taskType = taskType
};



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
    var nextTask = new TaskList();
    var nextTask2 = new NewTask(taskName, dueDate, who, type);

    nextTask.addTask(nextTask2);
    $("#to-do").append("Type:" + nextTask.totalTasks[0].type + "Task:"+ nextTask.totalTasks[0].taskDec + "For" + nextTask.totalTasks[0].who + "Due By:" +nextTask.totalTasks[0].dueDate);

    console.log(nextTask.totalTasks[0].taskDec);




    // nextTask.addTask(test);

    event.preventDefault();
  });


});
