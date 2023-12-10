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
  // set the intial value of tasks
  constructor() {
    this.tasks = [];
  }

  // This function is for add the given task and set it to tasks variable
  add(task) {
    return this.tasks.push(task);
  }

  // This function is for remove the given task and set it to tasks variable
  remove(indexOfTodo) {
    return this.tasks.splice(indexOfTodo, 1);
  }

  // This function is for update the given task for the given index and set it to tasks variable
  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.tasks.length) {
      return this.tasks.splice(indexOfTodo, 1, updatedTodo);
    }
    return this.tasks;
  }

  // This function is get all to tasks values
  getAll() {
    return this.tasks;
  }

  // This function is get task value based on the index value of tasks
  get(indexOfTodo) {
    let filteredArray = this.tasks.filter((i, index) => index === indexOfTodo);
    if (filteredArray.length === 1) {
      return filteredArray[0];
    }
    return null;
  }

  // This function is set the tasks value based on the index value of tasks
  clear() {
    return (this.tasks = []);
  }
}

module.exports = Todo;
