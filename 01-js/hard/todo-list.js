/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.todos = [];
    }

    add = (todo) => {
        this.todos.push(todo);
    }

    isValidIndex = (index) => {
        return index >= 0 && index < this.todos.length;
    }

    remove = (index) => {
        if(this.isValidIndex(index)){
            this.todos.splice(index, 1);
        }
    }

    update = (index, updatedTodo) => {
        if(this.isValidIndex(index)){
            this.todos[index] = updatedTodo;
        }
    }

    getAll = () => {
        return this.todos;
    }

    get = (index) => {
        if (this.isValidIndex(index)) {
            return this.todos[index];
        }
        else {
            return null
        }
    }

    clear = () => {
        this.todos = [];
    }
}

module.exports = Todo;
