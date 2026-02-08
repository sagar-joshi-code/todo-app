// Grab input field, add button, and clear button from the HTML
const input = document.getElementById("todoInput");
const addbtn = document.getElementById("addBtn");
const clearbtn = document.getElementById("clearBtn");

// Array to store all todo tasks
const todos = [];

// ---------------------- ADD TODO LOGIC ----------------------

// Listen for click on "Add Task" button
addbtn.addEventListener("click", () => {
  // Get the value typed in the input box
  const task = input.value;

  // Check if the input is not empty (ignore empty spaces)
  if (task.trim() !== "") {
    // Add the task to the todos array
    todos.push(task);
    console.log(todos); // Log the array to see what tasks are stored
  }

  // Clear the input field so user can type next task
  input.value = "";

  // Render / update the list of tasks on screen
  rendertodo();
});

// ---------------------- RENDER TODOS ----------------------

// Grab the <ul> element from HTML where tasks will appear
const todolist = document.getElementById("todoList");

// Function to render the todo list on the screen
const rendertodo = () => {
  // Clear previous tasks in the list to avoid duplicates
  todolist.innerHTML = "";

  // Loop through each task in the todos array
  todos.forEach((l) => {
    // Create a new <li> element for each task
    const list = document.createElement("li");

    // Set the text of the <li> to the task
    list.textContent = l;

    // Add the <li> to the <ul> in the HTML
    todolist.appendChild(list);
  });
};

// ---------------------- CLEAR TODOS LOGIC ----------------------

// Listen for click on "Clear Completed" button
clearbtn.addEventListener("click", () => {
  // Clear the todos array (memory)
  todos.length = 0;

  // Re-render the empty list on screen
  rendertodo();
});
