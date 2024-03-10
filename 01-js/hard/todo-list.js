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
    this.List = [];
  }

  add(todo) {
    this.List.push(todo);
  }

  remove(indexOfTodo) {
    this.List.splice(indexOfTodo, 1);
  }

  update(index, updatedTask) {
    if (index > this.List.length - 1) return;
    this.List.splice(index, 1, updatedTask);
  }

  getAll() {
    return this.List;
  }

  get(indexOfTodo) {
    if (indexOfTodo > this.List.length - 1) return null;
    return this.List[indexOfTodo];
  }

  clear() {
    return (this.List = []);
  }
}

module.exports = Todo;
