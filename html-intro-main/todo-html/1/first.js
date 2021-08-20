// localStorage.setItem("itemname", "value") // saves the data in the item
// localStorage.getItem("itemname")          // get the data in the item
// localStorage.removeItem("itemname")       // removes the item
// localStorage.clear()                      // removes all items
'use strict'

function Todo(id, content, isDone, dueDate) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.due_date = new Date(dueDate);
}

function TodoController() {
    this.todoList = [];
    this.id = 1;
    this.ENTER_KEY = 13;
    this.todoInput = document.getElementById('newTodo');
    this.dueDate = document.getElementById('date');
    this.todoListView = document.getElementById('todoListView');
}

TodoController.prototype = {
    getTodoFromLocalstorage: function (key) {
        let todoList;
        todoList = JSON.parse(localStorage.getItem(key)) || []; // добраться до локального хранилища
        return todoList;
    },
    setTodoLocalstorage: function (key) {
        localStorage.setItem('todoList', JSON.stringify(key));  //ключ - установить в локальное хранилище
    },
    handleTodoItem: function (value, desc, dueDate) { //  {sting} value - содержание задачи
        this.isDone = false;
        this.due_date = dueDate;
        let mainArray = todoController.getTodoFromLocalstorage('todoList');
        this.id = todoController.idLargestOfLocal(mainArray) + 1;
        return new Todo(this.id, value, this.isDone, this.dueDate);
    },

    idLargestOfLocal: function (mainArray) { //mainArray - найти последний идентификатор в массиве в localstorage
        let lengthArr = mainArray.length;
        if (lengthArr !== 0) {
            return mainArray[lengthArr - 1].id;
        } else {
            return 0;
        }
        return lastId;
    },
    addNewTodo: function (todo, list) { // {array} list - id для todo {object} todo - вернуть объект todo
        list.push(todo);
        todoController.setTodoLocalstorage(list);
        return todo;
    },
    //  Presentation create new a todo item
    setAttributes: function (element, attrs) { //{value attribute} attrs - атрибут значения для элемента html @return {attribute} element - атрибут для элемента html
        for (let key in attrs) {
            element.setAttribute(key, attrs[key]);
        }
    },

    checkboxView: function (todoId) { // create new checkbox element  @param {number} todoId - id checkbox
        let inpCheckbox = document.createElement('input');
        this.setAttributes(inpCheckbox, {type: 'checkbox', class: 'itemList', id: todoId});

        inpCheckbox.addEventListener('click', function (e) {//event check for input checkbox
            let list = todoController.getTodoFromLocalstorage('todoList');//get list array from localStorage

            let id = e.target.getAttribute('id');
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === id) {
                    list[i].isDone = e.target.checked;
                }
            }
            todoController.setTodoLocalstorage(list);  //save list todo to localStorage
            todoController.countItem();
        });
        return inpCheckbox;
    },
    createLableView: function (todo) { //  todo - item todo from addNewTodo
        let lbContent = document.createElement('label');
        this.setAttributes(lbContent, {value: todo.content, class: 'labelContent '});
        lbContent.innerHTML = todo.content;
        return lbContent;  //return node lable
    },

    initTodoITem: function (todo) { //{object} todo - item todo from addNewTodo
        let item = document.createElement('li');
        item.setAttribute('class', 'todoItem',);
        this.setAttributes(item, {class: 'todoItem '});
        item.addEventListener('dblclick', function (e) {//событие событие двойной щелчок в узле li
            item.classList.add('editing');
        });
        return item;//return node li
    },
    editInputView: function (todo) { //{object} todo - item todo from addNewTodo
        let list = todoController.getTodoFromLocalstorage('todoList');//  получить массив из localStorage
        let inputEdit = document.createElement('input');
        this.setAttributes(inputEdit, {
            id: +todo.id,
            value: todo.content,
            deadline: todo.due_date
        });
        inputEdit.focus();
        inputEdit.onblur = function (e) {  //e событие onblur получить редактирование значения и удалить редактирование класса при щелчке вне этого ввода
            todoController.handleTodoUpdate(e);
        };
        inputEdit.onkeypress = function (e) {  //событие onkeyup получить значение форма редактирования inputEdit
            if (event.which === todoController.ENTER_KEY || event.keyCode === todoController.ENTER_KEY) {
                todoController.handleTodoUpdate(e);
            }
        };
        return inputEdit;//return node input for edit todo
    },
    handleTodoUpdate: function (event) {
        let list = todoController.getTodoFromLocalstorage('todoList');
        let inputEdit = event.target;
        let todoItem = new Todo(inputEdit.id, inputEdit.value, false, inputEdit.description, inputEdit.due_date);
        todoController.updateTodoEdit(todoItem, list);
        let editing = document.querySelector('.editing');
        editing.classList.remove('editing');
        todoController.renderTodo();
    },

    updateTodoEdit: function (todo, list) {  //{object} todo - получить задачу из события получить значение edit {array} list - массив в localStorage
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === todo.id) {
                list[i].content = todo.content;
                todoController.setTodoLocalstorage(list);
                break;
            }
        }
        return todo;//return new object have edit
    },
    removeButtonView: function (todo) {  //{object odo - получить задачу из события получить значение изменить
        let btnRemove = document.createElement('button');
        this.setAttributes(btnRemove, {class: 'remove', id: todo.id});
        btnRemove.addEventListener('click', function (e) {//event click mouse into btnRemove a item todo
            let id = e.target.getAttribute('id');
            todoController.removeTodo(id);
            todoController.renderTodo();
            todoController.countItem();
        });
        return btnRemove;//return node button
    },

    todoView: function (todo) { // презентация создать новый todo item todo - рендеринг объекта для просмотра
        let item = this.initTodoITem(todo);//create node li
        let inpCheckbox = this.checkboxView(todo.id),//create node input checkbox
            lbContent = this.createLableView(todo),//create node lable
            inputEdit = this.editInputView(todo),//create node input edit
            btnRemove = this.removeButtonView(todo);//create node button remove item todo
        item.appendChild(inpCheckbox);//item append each element
        item.appendChild(lbContent);
        item.appendChild(inputEdit);
        item.appendChild(btnRemove);
        document.querySelector('#todoListView').appendChild(item);//ul append each item
        return item;//return node li contain inpCheckbox, lbContent, inputEdit, btnRemove
    },
    removeTodo: function (id, list) { //{number} id - id button remove item todo {array} list - list array get from localStorage
        list = todoController.getTodoFromLocalstorage('todoList');
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                list.splice(i, 1);
                break;
            }
        }
        todoController.setTodoLocalstorage(list);//set value after remove item to localStorage
    },
    countItem: function (index, list) { // {array} list - list array get from localStorage {index} index - index in array object
        list = todoController.getTodoFromLocalstorage('todoList');
        index = 0;
        for (let i = 0; i < list.length; i++) {
            if (!list[i].isDone) {
                index++;
            }
        }

        document.getElementById('todoCount').innerHTML = index;// return index display to UI;
    },
    events: function () {

        todoController.todoInput.onkeyup = function (event) {// Event add todo
            if (event.which === todoController.ENTER_KEY || event.keyCode === todoController.ENTER_KEY) {
                let todoList = todoController.getTodoFromLocalstorage('todoList');//get from localStorage
                let todoItem = todoController.handleTodoItem(todoController.todoInput.value, todoController.dueDate.value);//attach value for todo
                let todo = todoController.addNewTodo(todoItem, todoList);//add new a Todo
                todoController.todoView(todo);//Execute display to UI
                todoController.todoInput.value = '';//clear input
                todoController.countItem();
            }
        };
        let list = document.getElementsByClassName('itemList');//event check all checkbox in list item
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
            for (let i = 0; i < listWork.length; i++) {
                listWork[i].style.display = 'block';
            }
        });
        let activeItem = document.getElementsByClassName('todoItem');// Filter todo list with actived items
        let todoActive = document.getElementById('activedItems');
        todoActive.addEventListener('click', function () {
            for (let i = 0; i < list.length; i++) {
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
            for (let i = 0; i < list.length; i++) {
                if (list[i].checked) {
                    completeItem[i].style.display = 'block';
                } else {
                    completeItem[i].style.display = 'none';
                }
            }
        });
        let clearButton = document.getElementById('btnClear');// Добавлено событие очистки завершенных элементов для кнопки
        clearButton.addEventListener('click', function () {
            let list = todoController.getTodoFromLocalstorage('todoList');//get from localStorage
            todoController.clearCompleted(list);
            todoController.setTodoLocalstorage(list);
            todoController.renderTodo();
        });
    },
    clearCompleted: function (list) { // presentation clear all item todo have isdone
        while (list.find(({isDone}) => isDone)) {
            list.splice(list.indexOf(list.find(({isDone}) => isDone)), 1);
        }
    },
    checkAllTodo: function (check, todoList) { //Presentation set status isDone into localstorage
        todoList = todoController.getTodoFromLocalstorage('todoList');
        for (let i = 0; i < todoList.length; i++) {
            todoList[i].isDone = check;
            todoController.setTodoLocalstorage(todoList);
        }
    },
    renderTodo: function () { //Статус набора презентаций isDone into localstorageСтатус набора презентаций isDone в список {array} localstorage - {array} list - list array get from localStorage
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
        let todoListView = document.getElementById('todoListView');
        while (todoListView.hasChildNodes()) {
            todoListView.removeChild(todoListView.firstChild);
        }
    },
};

function changeClass(elem) {//change class selected
    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('selected');
    }
    elem.classList.add('selected');//add class selected for element user click
}


let todoController = new TodoController();//todoController обрабатывает все действия: добавление, удаление, редактирование, события
let todo = new Todo();//todo create new object todo
todoController.events();// выполнение событий
todoController.renderTodo();// //выполнение рендеринга отображения задачи в пользовательском интерфейсе
todoController.countItem();//выполнение подсчета всех активных элементов