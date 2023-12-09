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

/**
 * Todo class to manage todo items 
 */
class Todo {

  /**
   * Constructor initializes todos array
   */
  constructor() {
    this.todos = [];
  }

  /**
   * Add a new todo item
   * @param {string} todo 
   */
  add(todo) {
    this.todos.push(todo);
  }

  /**
   * Remove todo item at given index
   * @param {number} index 
   */
  remove(index) {
    if(index < 0 || index >= this.todos.length) {
      console.warn('Invalid index');
      return;
    }

    this.todos.splice(index, 1);
  }

  /**
 * Update todo item at given index
 * @param {number} index 
 * @param {string} updatedTodo
*/
update(index, updatedTodo) {
  if(index < 0 || index >= this.todos.length) {
    console.warn('Invalid index');
    return;
  }

  this.todos[index] = updatedTodo;
}

/**
 * Get all todo items
 * @returns {string[]}
*/ 
getAll() {
  return this.todos;
}

/** 
 * Get a single todo item at index
 * @param {number} index
 * @returns {string|undefined}
*/
get(index) {
  if(index < 0 || index >= this.todos.length) {
    console.warn('Invalid index');
    return undefined;
  }

  return this.todos[index];
}

/**
 * Clear all todo items
 */ 
clear() {
  this.todos = [];
}
}

// Usage
const todoList = new Todo();
todoList.add('Buy milk'); 




module.exports = Todo;



