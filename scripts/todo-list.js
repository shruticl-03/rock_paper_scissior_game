const todoList = [{
    name: 'make dinner',
    dueDate: '2024-12-20'
}, {
    name: 'watch tv',
    dueDate: '2024-12-20'
}];
renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
            " class="delete-todo-button">Delete</button> 
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate
    });
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}