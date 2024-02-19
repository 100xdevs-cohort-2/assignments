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
      console.error("Invalid index. Todo not removed.");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.error("Invalid index. Todo not updated.");
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.error("Invalid index. Todo not found.");
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;

// Testing the code
const myTodoList = new Todo();

myTodoList.add("Buy groceries");
myTodoList.add("Finish coding assignment");
myTodoList.add("Go for a run");

console.log("Initial Todo List:", myTodoList.getAll());

myTodoList.remove(1);
console.log("Todo List after removing item at index 1:", myTodoList.getAll());

myTodoList.update(0, "Buy snacks");
console.log("Todo List after updating item at index 0:", myTodoList.getAll());

console.log("Todo at index 1:", myTodoList.get(1));

myTodoList.clear();
console.log("Todo List after clearing all todos:", myTodoList.getAll());