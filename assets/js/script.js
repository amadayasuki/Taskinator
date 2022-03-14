var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  
  formEl.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  console.dir(listItemEl);

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);


/*Was originally variable declaration for buttonEl, but changed so we can listen to an 
event happening on the entire form rather than just the button
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {//This overrides the default browser behavior//[] this selector selectes an HTML elements by its attribute //selecting the <input> element that has a name attribute set to value "task-name"
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    //checking if input values are empty strings
    if (taskNameInput ===""||taseTypeInput ==="") { //! is here to check for a falsy value
    alert("You need to fill out the task form!");
    return false; //used for event handlers
    }

  formEl.reset();
    //reset form fields for next task to be entered
    document.querySelector("input[name='task-name']").value = "";
    document.querySelector("select[name='task-type']").selectedIndex = 0;
 
  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput 
  };
  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
}; 

var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");  // create list item
  listItemEl.className = "task-item";
  
  var taskInfoEl = document.createElement("div");// create div to hold task info and add to list item
  taskInfoEl.className = "task-info";
 
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl); // add HTML content to div

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl); 

};

Was originally for buttonEl.  This listens for two events: when a user clicks a button
with a type attribute of "submit" + when user presses Enter on their keyboard
formEl.addEventListener("submit", taskFormHandler);
//whakjlfka */