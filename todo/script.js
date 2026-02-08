

const input = document.getElementById("todoInput");
const addbtn = document.getElementById("addBtn");
const clearbtn = document.getElementById("clearBtn");
const todos = [];

addbtn.addEventListener("click", () => {
  console.log(input.value);
  const task = input.value;
  if (task.trim() !== "") {
    todos.push(task);
    console.log(todos);
  }
  input.value = "";
  rendertodo();
});

const todolist = document.getElementById("todoList");
const rendertodo = () => {
  todolist.innerHTML = "";
  todos.forEach((l) => {
    const list = document.createElement("li");
    list.textContent = l;
    todolist.appendChild(list);
  });
};

clearbtn.addEventListener("click", () => {
  todos.length = 0;
  rendertodo()
});
