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

  // add method
  add(todo) {
    return this.todos.push(todo);
  }

  // remove todo
  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) return null;
    else this.todos.splice(indexOfTodo, 1);
  }

  // update toDo
  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) return null;
    else this.todos.splice(index, 1, updatedTodo);
  }

  // getAll todos
  get getAll() {
    return this.todos;
  }

  // get(indexOftoDo)
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) return null;
    else return this.todos[indexOfTodo];
  }

  // delete all todos
  clear() {
    this.todos.splice(0, this.todos.length);
  }
}

module.exports = Todo;
