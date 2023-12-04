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
		this.todoList = [];
	}
	add(todo) {
		this.todoList.push(todo);
	}
	get(index) {
		if (!this.todoList[index]) return null;
		return this.todoList[index];
	}
	remove(index) {
		this.todoList = this.todoList.filter((v, ind, arr) => ind !== index);
	}
	getAll() {
		return this.todoList;
	}
	clear() {
		this.todoList = [];
		return this.todoList;
	}
	update(index, updatedTodo) {
		if (!this.todoList[index]) return;
		this.todoList[index] = updatedTodo;
	}
}

module.exports = Todo;
