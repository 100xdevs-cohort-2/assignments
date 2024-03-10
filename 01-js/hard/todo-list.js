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
  #todos = [];

  add(todo){
    this.#todos.push(todo);
  }

  remove(indexOfTodo){
    this.#todos = this.#todos.slice(0,indexOfTodo).concat(this.#todos.slice(indexOfTodo+1));
  }

  update(index, updatedTodo){
    if(this.#todos.length > index){
      this.#todos[index] = updatedTodo;
    }
  }

  get(indexOfTodo){
    if(this.#todos.length > indexOfTodo){
      return this.#todos[indexOfTodo];
    }
    else {
      return null;
    }
  }

  getAll(){
    return this.#todos;
  }

  clear(){
    this.#todos = [];
  }
}

module.exports = Todo;