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
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null; 
  }

  clear() {
    this.todos = [];
  }
}

const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Read a book");
todoList.add("Go for a run");

console.log("All todos:", todoList.getAll());

todoList.update(1, "Read two books");
console.log("Updated todo at index 1:", todoList.get(1));

todoList.remove(0);
console.log("After removing todo at index 0:", todoList.getAll());

todoList.clear();
console.log("After clearing all todos:", todoList.getAll());


module.exports = Todo;
