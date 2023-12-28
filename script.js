var tasks = [];

function addTask() {
  var taskInput = document.getElementById("task");
  var taskText = taskInput.value;

  var task = { text: taskText };

  tasks.push(task);

  displayTasks();

  taskInput.value = "";

  alert(" Total pembayaran: " + taskText);
}

var kodes = [];

function addKode() {
  var taskInput = document.getElementById("kode");
  var taskText = taskInput.value;

  var task = { text: taskText };

  tasks.push(task);

  displayTasks();

  taskInput.value = "";

  alert(" Total pembayaran: " + taskText);
}

function displayTasks() {
  var taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.textContent = task.text;
    taskList.appendChild(li);
  });
}
