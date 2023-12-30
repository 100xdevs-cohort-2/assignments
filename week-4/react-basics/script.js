let todoList = [];

function addTodo() {
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');

    const title = titleInput.value;
    const description = descriptionInput.value;

    if (title && description) {
        const todo = { title, description };
        todoList.push(todo);
        displayTodos();
        titleInput.value = '';
        descriptionInput.value = '';
    } else {
        alert('Please enter both title and description.');
    }
}

function displayTodos() {
    const todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';

    todoList.forEach((todo, index) => {
        const todoElement = document.createElement('div');
        todoElement.innerHTML = `<strong>${todo.title}</strong>: ${todo.description} <button onclick="removeTodo(${index})">Remove</button>`;
        todoListContainer.appendChild(todoElement);
    });
}

function removeTodo(index) {
    todoList.splice(index, 1);
    displayTodos();
}
