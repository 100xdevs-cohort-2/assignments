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
  toDos = [];
  add(toDo) {
    this.toDos.push(toDo);
  }

  remove(idx) {
    this.toDos = this.toDos.filter((_a, i) => i !== idx);
  }

  update(idx, updateTodo) {
    if (idx > this.toDos.length - 1) return;
    this.toDos[idx] = updateTodo;
  }

  getAll() {
    return this.toDos;
  }

  get(idxOfTodo) {
    return this.toDos[idxOfTodo] ? this.toDos[idxOfTodo] : null;
  }

  clear() {
    this.toDos = [];
  }
}

module.exports = Todo;
