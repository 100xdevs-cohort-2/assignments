/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodoOfTodo): remove todo from list of todos
    - update(indexOfTodo, updatedTodo): update todo at given indexOfTodo
    - getAll: returns all todos
    - get(indexOfTodoOfTodo): returns todo at given indexOfTodo
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []
  }

  // add todo 
  add(todo){
    this.todos.push(todo)
  }

  // remove a todo 
  remove(indexOfTodo){
    if (this.todos[indexOfTodo]) {
      this.todos.splice(indexOfTodo, 1);
    } 
  }
  // update 
  update(indexOfTodo, updatedTodo) {
    if (this.todos[indexOfTodo]) {
      this.todos[indexOfTodo] = updatedTodo;
    } 
  }

  //  get all todos
  getAll(){
    return [...this.todos]
  }

  // Returns the todo at the given indexOfTodo
  get(indexOfTodo) {

    if(this.todos[indexOfTodo]) {
      return this.todos[indexOfTodo];
    } else {
      return null;
    }
  }

   // Clears all todos from the list
   clear() {
    this.todos = [];
  }

 
}

module.exports = Todo;
