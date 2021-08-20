// localStorage.setItem("itemname", "value") // saves the data in the item
// localStorage.getItem("itemname")          // get the data in the item
// localStorage.removeItem("itemname")       // removes the item
// localStorage.clear()                      // removes all items
'use strict'

function Todo(id, content, isDone) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
}

function TodoController() {
    this.todoList = [];
    this.id = 1;
    this.ENTER_KEY = 13;
    this.todoInput = document.getElementById('newTodo');
    this.todoListView = document.getElementById('todoListView');
}

TodoController.prototype = {
    getTodoFromLocalstorage: function (key) {   // взять из локального хранилища
        let todoList = JSON.parse(localStorage.getItem(key)) || [];
        return todoList;
    },

    setTodoLocalstorage: function (key) { // записать в локальное хранилище
        localStorage.setItem('todoList', JSON.stringify(key));
    },

    handleTodoItem: function (value) { // value - название задачи
        this.isDone = false;
        let mainArray = todoController.getTodoFromLocalstorage('todoList');
        this.id = todoController.idLargestOfLocal(mainArray) + 1;
        let todoItem = new Todo(this.id, value, this.isDone);
        return todoItem;
    },

    idLargestOfLocal: function (mainArray) { // последний елемент в массиве локального хранилища
        let lengthArr = mainArray.length;
        if (lengthArr !== 0) {
            return mainArray[lengthArr - 1].id;
        } else {
            return 0;
        }
        return lastId;
    },

    addNewTodo: function (todo, list) { //
        list.push(todo);
        todoController.setTodoLocalstorage(list);
        return todo;
    },
    setAttributes: function (element, attrs) {
        for (let key in attrs) {
            element.setAttribute(key, attrs[key]);
        }
    },

    checkboxView: function (todoId) {
        let inpCheckbox = document.createElement('input');
        this.setAttributes(inpCheckbox, {type: 'checkbox', class: 'itemList', id: todoId});
        inpCheckbox.addEventListener('click', function (e) {//event check for input checkbox
            let list = todoController.getTodoFromLocalstorage('todoList');//get list array from localStorage
            let id = e.target.getAttribute('id');
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    list[i].isDone = e.target.checked;
                }
            }
            todoController.setTodoLocalstorage(list);//save list todo to localStorage
            todoController.countItem();
        });
        return inpCheckbox;
    },

    createLableView: function (todo) {
        let lbContent = document.createElement('label');
        this.setAttributes(lbContent, {value: todo.content, class: 'labelContent '});
        lbContent.innerHTML = todo.content;
        return lbContent;//return node lable
    },

    initTodoITem: function (todo) { //  create new li element (item  todo from addNewTodo)
        let item = document.createElement('li');
        this.setAttributes(item, {class: 'todoItem '});
        item.addEventListener('dblclick', function (e) {//event event double click in node li
            item.classList.add('editing');
        });
        return item;//return node li
    },

    editInputView: function (todo) {
        let list = todoController.getTodoFromLocalstorage('todoList');
        let inputEdit = document.createElement('input');
        this.setAttributes(inputEdit, {
            id: todo.id,
            class: 'edit',
            value: todo.content,
            type: 'text',
        });
        inputEdit.focus();
        inputEdit.onblur = function (e) {
            todoController.handleTodoUpdate(e);
        };
        inputEdit.onkeypress = function (e) {
            if (event.which == todoController.ENTER_KEY || event.keyCode == todoController.ENTER_KEY) {
                todoController.handleTodoUpdate(e);
            }
        }
        return inputEdit;
    },
    handleTodoUpdate: function (event) {
        let list = todoController.getTodoFromLocalstorage('todoList');
        let inputEdit = event.target;
        let todoItem = new Todo(inputEdit.id, inputEdit.value, false);
        todoController.updateTodoEdit(todoItem, list);
        let editing = document.querySelector('.editing');
        editing.classList.remove('editing');
        todoController.renderTodo();
    },
    updateTodoEdit: function (todo, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == todo.id) {
                list[i].content = todo.content;
                todoController.setTodoLocalstorage(list);
                break;
            }
        }
        return todo;
    },
    removeButtonView: function (todo) {
        let btnRemove = document.createElement('button');
        this.setAttributes(btnRemove, {class: 'remove', id: todo.id});
        btnRemove.addEventListener('click', function (e) {
            let id = e.target.getAttribute('id');
            todoController.removeTodo(id);
            todoController.renderTodo();
            todoController.countItem();
        });
        return btnRemove;
    },
    todoView: function (todo) {
        let item = this.initTodoITem(todo);//create node li
        let inpCheckbox = this.checkboxView(todo.id),//create node input checkbox
            lbContent = this.createLableView(todo),//create node lable
            inputEdit = this.editInputView(todo),//create node input edit
            btnRemove = this.removeButtonView(todo);//create node button remove item todo
        item.appendChild(inpCheckbox);
        item.appendChild(lbContent);
        item.appendChild(inputEdit);
        item.appendChild(btnRemove);
        document.querySelector('#todoListView').appendChild(item);
        return item;
    },
    removeTodo: function (id, list) {
        list = todoController.getTodoFromLocalstorage('todoList');
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                list.splice(i, 1);
                break;
            }
        }
        todoController.setTodoLocalstorage(list);
    },
    countItem: function (index, list) {
        list = todoController.getTodoFromLocalstorage('todoList');
        index = 0;
        for (let i = 0; i < list.length; i++) {
            if (!list[i].isDone) {
                index++;
            }
        }
        document.getElementById('todoCount').innerHTML = index;
    },
    events: function () {
        todoController.todoInput.onkeyup = function (event) {
            if (event.which == todoController.ENTER_KEY || event.keyCode == todoController.ENTER_KEY) {
                let todoList = todoController.getTodoFromLocalstorage('todoList');
                let todoItem = todoController.handleTodoItem(todoController.todoInput.value);
                let todo = todoController.addNewTodo(todoItem, todoList);
                todoController.todoView(todo);
                todoController.todoInput.value = '';
                todoController.countItem();
            }
        };
        let list = document.getElementsByClassName('itemList');
        let checkAll = document.getElementById('toggleInputAll');
        checkAll.addEventListener('change', function (e) {
            let check;
            for (let i = 0; i < list.length; i++) {
                list[i].checked = this.checked;
                check = e.target.checked;
                todoController.checkAllTodo(check);
            }
            todoController.countItem();
        });
        let listWork = document.getElementsByClassName('todoItem');//Show all items
        let showAllItem = document.getElementById('allWorks');
        showAllItem.addEventListener('click', function () {
            for (var i = 0; i < listWork.length; i++) {
                listWork[i].style.display = 'block';
            }
        });
        let activeItem = document.getElementsByClassName('todoItem');// Filter todo list with actived items
        let todoActive = document.getElementById('activedItems');
        todoActive.addEventListener('click', function () {
            for (var i = 0; i < list.length; i++) {
                if (!list[i].checked) {
                    activeItem[i].style.display = 'block';
                } else {
                    activeItem[i].style.display = 'none';
                }
            }
        });
        let completeItem = document.getElementsByClassName('todoItem');//Filter completed todo list
        let todoCompleted = document.getElementById('completedTodos');
        todoCompleted.addEventListener('click', function () {
            for (var i = 0; i < list.length; i++) {
                if (list[i].checked) {
                    completeItem[i].style.display = 'block';
                } else {
                    completeItem[i].style.display = 'none';
                }
            }
        });
        let clearButton = document.getElementById('btnClear');// Added event clear completed items for button
        clearButton.addEventListener('click', function () {
            var list = todoController.getTodoFromLocalstorage('todoList');//get from localStorage
            todoController.clearCompleted(list);
            todoController.setTodoLocalstorage(list);
            todoController.renderTodo();
        });
    },
    clearCompleted: function (list) {
        while (list.find(({isDone}) => isDone)) {
            list.splice(list.indexOf(list.find(({isDone}) => isDone)), 1);
        }
    },
    checkAllTodo: function (check, todoList) {
        todoList = todoController.getTodoFromLocalstorage('todoList');
        for (let i = 0; i < todoList.length; i++) {
            todoList[i].isDone = check;
            todoController.setTodoLocalstorage(todoList);
        }
    },
    renderTodo: function () {
        let list = todoController.getTodoFromLocalstorage('todoList');//get from localStorage
        todoController.removeElement();
        for (let i = 0; i < list.length; i++) {
            let element = todoController.todoView(list[i]);
            if (list[i].isDone) {
                element.classList.add('checked');
            }
        }
    },
    removeElement: function () {
        var todoListView = document.getElementById('todoListView');
        while (todoListView.hasChildNodes()) {
            todoListView.removeChild(todoListView.firstChild);
        }
    },
};

function changeClass(elem) {
    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('selected');
    }
    ;
    elem.classList.add('selected');
};
let todoController = new TodoController();//todoController handle all action add, delete, edit, events
let todo = new Todo();//todo create new object todo
todoController.events();//performing the events
todoController.renderTodo();// //performing render todo display to UI
todoController.countItem();//performing count all item active
