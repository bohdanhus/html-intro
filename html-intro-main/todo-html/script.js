let displayAllListPart = 'all';
let displayStatus = document.getElementById('display-status');
const URL = 'http://localhost:3000/tasks';


function getTodosList() {
    return getTodosApi()
        .then(date => {
            return date;
        });
}

function DisplayTodos(todosArr) {
    let todos = document.getElementById('todo-list');

    todosArr.forEach(todo => {
        let item_li = document.createElement('li');
        createSingleTodo(todo, todos, item_li);
    });
}

function createSingleTodo(todo, todos, item_li) {
    let todo_div = document.createElement('div');

    todo_div.id = todo.id;

    let title = createTitle(todo.title, todo.status, todo.due_date);
    todo_div.appendChild(title);

    let done = createCheckbox(todo.status);
    todo_div.appendChild(done);

    if (todo.description) {
        let description = createDescription(todo.description);
        todo_div.appendChild(description);
    }

    if (todo.due_date) {
        let due_date = createDate(todo.due_date);
        todo_div.appendChild(due_date);
    }

    let deleteButton = createDeleteButton();
    todo_div.appendChild(deleteButton);

    item_li.appendChild(todo_div);
    todos.appendChild(item_li);


    deleteButton.onclick = deleteTodo;
    done.onclick = changeStatus;
    return todo_div;
}

function createTitle(text, done, date) {
    let title = document.createElement('li');
    title.innerHTML = text;
    title.classList.add("new-todo");
    if (done) {
        title.style.textDecoration = 'line-through';
        title.style.color = '#808080';
    }
    if (date - new Date() < 0 && done == false) {
        title.style.color = 'red';
    }
    return title;
}

function createCheckbox(status) {
    let done = document.createElement('input'); // set disabled=true
    done.type = 'checkbox';
    if (status) { done.checked = 'checked'; }
    done.classList.add("task-status");
    return done;
}

function createDescription(descr) {
    let description = document.createElement('p');
    description.innerHTML = descr;
    description.classList.add("task-description");
    description.style.color = '#808080';
    return description;
}

function createDeleteButton() {
    let del = document.createElement('button');
    del.innerHTML = 'x';
    // del.classList.add("task-delete");
    return del;
}

function createDate(dateApi) {
    let due_date = document.createElement('p');
    let date = Date.parse(dateApi);
    date = new Date(date);
    due_date.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    due_date.classList.add("task-date");
    return due_date;
}

function deleteTodo() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);

    fetch(URL + '/' + listItem.id, {
        method: 'DELETE',
    }).then(res => res.json());

}

function deleteTodoFromList(id) {
    const index = todos.findIndex(n => n.id == id);
    if (index !== -1) {
        todos.splice(index, 1);
    }
}

function getStatusToSet(id) {
    return fetch(URL + '/' + id)
        .then(response => response.json())
        .then(json => {
            return json;
        });
}


function changeStatus() {
    let div = this.parentNode; // div in li
    let item_li = document.createElement('li');

    getStatusToSet(div.id)
        .then((todo) => {
            fetch(URL + '/' + div.id, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: !todo.status
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            }).then(() => {
                getStatusToSet(div.id)
                    .then((newTodo) => {
                        let newTodoDiv = createSingleTodo(newTodo, document.getElementById('todos-list'), item_li);
                        div.replaceWith(newTodoDiv);
                        if (displayAllListPart === 'open') {
                            displayOpenTasks();
                        }
                        if (displayAllListPart === 'completed') {
                            displayCompleted();
                        }
                    });
            })
        });
}

function displayAll() {
    displayStatus.innerHTML = 'Status: you see all tasks';
    let todosList = document.getElementById('todos-list');
    todosList.replaceChildren();

    fetch(URL)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                let item_li = document.createElement('li');
                createSingleTodo(todo, todosList, item_li);
            });
        });
    displayAllListPart = 'all';
}

function displayAllButton() {
    if (displayAllListPart !== 'all') {
        displayAll();
    }
    displayAllListPart = 'all';
}

function displayCompleted() {
    displayStatus.innerHTML = 'Status: you see only completed tasks';
    let todosList = document.getElementById('todos-list');
    todosList.replaceChildren();

    fetch(URL)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                if (todo.status !== false) {
                    let item_li = document.createElement('li');
                    createSingleTodo(todo, todosList, item_li);
                }
            });
        });
    displayAllListPart = 'completed';
}

function displayCompletedButton() {
    if (displayAllListPart !== 'completed') {
        displayCompleted();
    }
    displayAllListPart = 'completed';
}

function displayOpenTasks() {
    displayStatus.innerHTML = 'Status: you see only open tasks';
    let todosList = document.getElementById('todos-list');
    todosList.replaceChildren();

    fetch(URL)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                if (todo.status !== true) {
                    let item_li = document.createElement('li');
                    createSingleTodo(todo, todosList, item_li);
                }
            });
        });
    displayAllListPart = 'open';
}

function displayOpenTasksButton() {
    if (displayAllListPart !== 'open') {
        displayOpenTasks();
    }
    displayAllListPart = 'open';
}

function createNewTask(tempTask) {
    let newTask = {};

    if (tempTask.title.length > 0) {
        newTask.title = tempTask.title;
        if (tempTask.description.length > 0) {
            newTask.description = tempTask.description;
        }
        newTask.status = (tempTask.status == 'on') ? true : false;
        if (tempTask.due_date.length > 0) {
            newTask.due_date = new Date(tempTask.due_date);
        }
    }
    return newTask;
}

// document.addEventListener("DOMContentLoaded", DisplayTodos(todos));

let todoForm = document.forms['task-form__input'];

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(todoForm);
    const tempTask = Object.fromEntries(formData.entries());
    if (tempTask.title) {
        let newTask = createNewTask(tempTask);

        createSingleTodo(newTask, document.getElementById('todos-list'), document.createElement('li'));

        createTodoApi(newTask)
            .then(() => {
                getTodosApi().then((res) => {
                    // console.log(res);
                })
            });

        todoForm.reset();
    }

});


function createTodoApi(newTodo) {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
        .then(response => response.json())
}

async function getTodosApi() {

    let response;
    let todosArr;

    try {
        response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            todosArr = await response.json();
        }
    } catch (e) {
        console.log(e);
    }

    return todosArr;
}


getTodosList().then(res => {
    DisplayTodos(res);
});