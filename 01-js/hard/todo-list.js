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
    this.len = 0;
	}

	add(todo) {
    this.todos.push(todo);
    this.len++;
	}

  remove(indexOfTodo) {
    if (indexOfTodo >= this.len) {
      return;
    } else {
      this.todos.splice(indexOfTodo, 1);
      this.len--;
    }
	}

  update(index, updatedTodo) {
    if (index >= this.len) {
      return;
    } else {
      this.todos[index] = updatedTodo;
    }
	}

	getAll() {
		return this.todos;
	}

  get(indexOfTodo) {
    if (indexOfTodo >= this.len) {
      return null;
    } else {
      return this.todos[indexOfTodo];
    }
	}

	clear() {
    this.todos = [];
    this.len = 0;
	}
}

module.exports = Todo;
