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
  todos = [];

  add(todo){
    this.todos.push(todo);
  }

  remove(idx){
    this.todos.splice(idx,1);
  }

  update(idx, updatedTodo){
    if(idx > this.todos.length || updatedTodo == 'Invalid Task') return;
    this.todos[idx] = updatedTodo;
  }

  getAll(){
    return this.todos;
  }

  get(idx){
    if(idx > this.todos.length-1) return null;
    return this.todos[idx];
  }

  clear(){
    this.todos.splice(0, this.todos.length);
  }
}

module.exports = Todo;
