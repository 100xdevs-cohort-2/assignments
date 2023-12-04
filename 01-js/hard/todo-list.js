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
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(index) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList.splice(index, 1);
    } 
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todoList;
  }

  get(index) {
    if (index >= 0 && index < this.todoList.length) {
      return this.todoList[index];
    } else {
      return null; 
    }
  }
  

  clear() {
    this.todoList = [];
  }
}

// Example usage:
// const todoList = new Todo();

// try {
//   todoList.add('Task 1');
//   todoList.add('Task 2');
//   todoList.add('Task 3');

//   console.log('All Todos:', todoList.getAll());

//   todoList.update(1, 'Updated Task 2');
//   console.log('Updated Task 2:', todoList.get(1));

//   todoList.remove(0);
//   console.log('Remaining Todos:', todoList.getAll());

//   todoList.clear();
//   console.log('Cleared Todos:', todoList.getAll());
// } catch (error) {
//   console.error(error.message);
// }

module.exports = Todo;
