class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}

export default Calculator;