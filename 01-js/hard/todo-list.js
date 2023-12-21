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
  currentTodoList = new Array();
  add(todo) {
    this.currentTodoList.push(todo);
  }

  remove(index) {
    if (index < this.currentTodoList.length - 1) {
      this.currentTodoList.splice(index, 1);
    } else {
      return;
    }
  }

  update(index, updatedTodo) {
    if (index < this.currentTodoList.length) {
      this.currentTodoList[index] = updatedTodo;
    } else {
      return;
    }
  }

  getAll() {
    return this.currentTodoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.currentTodoList.length) {
      return this.currentTodoList[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.currentTodoList = [];
  }
}

module.exports = Todo;
