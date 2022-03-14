/*Was originally variable declaration for buttonEl, but changed so we can listen to an 
event happening on the entire form rather than just the button*/
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {//This overrides the default browser behavior//[] this selector selectes an HTML elements by its attribute //selecting the <input> element that has a name attribute set to value "task-name"
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
   
  var listItemEl = document.createElement("li");  // create list item
  listItemEl.className = "task-item";
  
  var taskInfoEl = document.createElement("div");// create div to hold task info and add to list item
  taskInfoEl.className = "task-info";
 
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl); // add HTML content to div

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl); 
};
/*Was originally for buttonEl.  This listens for two events: when a user clicks a button
with a type attribute of "submit" + when user presses Enter on their keyboard*/
formEl.addEventListener("submit", createTaskHandler);
