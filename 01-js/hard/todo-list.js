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
  todos = [];
  isInvalidIndexToOperate(index) {
    return index < 0 || index >= this.todos.length;
  }
  add(task) {
    this.todos.push(task);
  }
  remove(index) {
    if (this.isInvalidIndexToOperate(index)) return;
    this.todos.splice(index, 1);
  }
  update(index, updatedTodo) {
    if (this.isInvalidIndexToOperate(index)) return;
    this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (this.isInvalidIndexToOperate(indexOfTodo)) return null;
    return this.todos[indexOfTodo];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
