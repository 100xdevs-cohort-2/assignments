/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of list_task
    - remove(indexOfTodo): remove todo from list of list_task
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all list_task
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all list_task

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list_task = [];
  }

  add(todo) {
    this.list_task.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.list_task.length) {
      this.list_task.splice(indexOfTodo, 1);
    } else {
      console.error("Invalid index. Todo not removed.");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.list_task.length) {
      this.list_task[index] = updatedTodo;
    } else {
      console.error("Invalid index. Todo not updated.");
    }
  }

  getAll() {
    return this.list_task;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.list_task.length) {
      return this.list_task[indexOfTodo];
    } else {
      console.error("Invalid index. Returning null.");
      return null;
    }
  }

  clear() {
    this.list_task = [];
  }
}

module.exports = Todo;
