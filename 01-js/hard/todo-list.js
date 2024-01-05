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

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo <= this.todoList.length)
      this.todoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList.splice(index, 1, updatedTodo);
    }
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length) {
      return this.todoList[indexOfTodo];
    } else return null;
  }

  clear() {
    this.todoList = [];
  }
}

// Example usage:

//   const t = new Todo();
//
//   try {
//     t.add('Task1');
//     t.add('Task2');
//     t.add('Task3');
//
//     console.log('All Todos:', t.getAll());
//
//     t.update(1, 'Updated Task2');
//     console.log('Updated Task2:', t.getAll(1));
//
//     t.remove(0);
//     console.log('Remaining Todos:', t.getAll());
//
//     t.clear();
//     console.log('Cleared Todos:', t.getAll());
//   } catch (error) {
//     console.error(error.message);
//   }

module.exports = Todo;
