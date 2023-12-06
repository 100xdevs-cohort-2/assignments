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
    return null; // Return null if index is out of bounds
  }

  clear() {
    this.todos = [];
  }
}

// Example usage:
const myTodoList = new Todo();

<<<<<<< HEAD
myTodoList.add("Buy groceries");
myTodoList.add("Finish homework");
console.log("All todos:", myTodoList.getAll());

myTodoList.update(0, "Buy new groceries");
console.log("Updated todo at index 0:", myTodoList.get(0));

myTodoList.remove(1);
console.log("After removing todo at index 1:", myTodoList.getAll());

myTodoList.clear();
console.log("After clearing todos:", myTodoList.getAll());
module.exports = Todo;
=======
myTodoList.add('Buy groceries');
myTodoList.add('Finish homework');
console.log('All todos:', myTodoList.getAll());

myTodoList.update(0, 'Buy new groceries');
console.log('Updated todo at index 0:', myTodoList.get(0));

myTodoList.remove(1);
console.log('After removing todo at index 1:', myTodoList.getAll());

myTodoList.clear();
console.log('After clearing todos:', myTodoList.getAll());

>>>>>>> bdfca9a4ea3724d3dcf3155ab1bf5b46deaea406
