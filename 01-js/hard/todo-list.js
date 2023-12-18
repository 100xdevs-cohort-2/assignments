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
    this.todoListLength = 0;
  }

  add(todo) {
    this.todoList.push(todo);
    this.todoListLength++;
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= this.todoListLength) return null;

    let removeIndex = 0;

    const tempList = [];

    while (removeIndex < indexOfTodo) {
      tempList[removeIndex] = this.todoList[removeIndex];
      removeIndex++;
    }

    const removedElement = this.todoList[removeIndex];

    let remainingIndex = removeIndex + 1;

    while (remainingIndex < this.todoListLength) {
      tempList[removeIndex] = this.todoList[remainingIndex];
      remainingIndex++;
      removeIndex++;
    }

    this.todoList = tempList;
    this.todoListLength--;

    return removedElement;
  }

  update(index, updatedTodo) {
    if (index >= this.todoListLength) return null;
    this.todoList[index] = updatedTodo;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todoListLength) return null;
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList = [];
    this.todoListLength = 0;
  }
}

module.exports = Todo;
