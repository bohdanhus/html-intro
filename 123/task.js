

let taskID = 0;

const taskList = document.querySelector("#out");
taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        let inputTask = document.getElementById("todo");
        localStorage.setItem("email", inputTask.value);
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("task-complete");
    }
});
const input = document.querySelector("#in");
const form = document.querySelector("#add");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTask = document.createElement("li");
    const removeBtn = document.createElement("button");

    removeBtn.innerText = "Remove Task";
    newTask.innerText = input.value;

    newTask.appendChild(removeBtn);
    taskList.appendChild(newTask);

    let savedInput = input.value;
    store(savedInput);

    input.value = "";
    console.log(localStorage);
});

function getTasks() {
    return localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
}

function store(task) {
    const tasks = getTasks();

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(task) {
    const template = document.querySelector("#task");
    const taskNode = template.content.cloneNode(true);
    taskNode.querySelector("span").innerText = task;
    return taskNode;
}

function render() {
    const tasks = getTasks();

    tasks.forEach((task) => {
        const newTask = createTask(task);

        taskList.appendChild(newTask);
    });
}


render();