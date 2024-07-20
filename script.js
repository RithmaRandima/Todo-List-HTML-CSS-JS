const addBtn = document.querySelector(".add-btn");
const todoContainer = document.querySelector("#list-container");
const todoInput = document.querySelector("#input-box");

addBtn.addEventListener("click", () => {
  addTask();
});

todoContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function addTask() {
  if (todoInput.value === "") {
    alert("Please! You must Write Something.!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = todoInput.value;
    todoContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveData();
  todoInput.value = "";
}

function saveData() {
  localStorage.setItem("data", todoContainer.innerHTML);
}

function showList() {
  todoContainer.innerHTML = localStorage.getItem("data");
}

showList();
