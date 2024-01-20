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
  constructor(){
    this.todos = new Array();
  }
  InvalidIndex(index){
    if(index<0 || index >= this.todos.length) return true;

    return false;
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    if(this.InvalidIndex(indexOfTodo)){
      return;
    }
    this.todos.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
    if(this.InvalidIndex(index)){
      return;
    }
    this.todos[index] = updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(this.InvalidIndex(indexOfTodo)){
      return null;
    }
    return this.todos[indexOfTodo];
  }
  clear(){
    this.todos = [];
  }

}

module.exports = Todo;
