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

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      // throw new Error('Invalid index for removal');
      return this.todos
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      // throw new Error('Invalid index for update');
      return this.todos
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      // throw new Error('Invalid index for retrieval');
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}


// Testing 
// const todoList = new Todo();
//   todoList.add('Task 1');
//   todoList.add('Task 2');
//   todoList.add('Task 3');

// todoList.remove(1);
// const res = todoList.getAll()
// console.log(res);

module.exports = Todo;