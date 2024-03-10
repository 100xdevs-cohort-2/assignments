class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
    return true; // Operation is always successful for 'add'
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
      return true; // Operation is successful for a valid index
    } else {
      return false; // Operation fails for an invalid index
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
      return true; // Operation is successful for a valid index
    } else {
      return false; // Operation fails for an invalid index
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      return null; // Return null for an invalid index
    }
  }
  

  clear() {
    this.todos = [];
    return true; // Operation is always successful for 'clear'
  }
}

module.exports = Todo;
