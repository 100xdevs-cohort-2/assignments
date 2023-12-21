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
    this.myTodos = []
  }
  add(todo){
    this.myTodos.push(todo)
  }
  remove(indexOfTodo){
    if (indexOfTodo >= 0 && indexOfTodo < this.myTodos.length) {
      this.myTodos.splice(indexOfTodo, 1);
    } else {
      console.log("Invalid index or Todo list is empty");
    }
  }
  update(index, updatedTodo){
    if (index >= 0 && index < this.myTodos.length) {
      this.myTodos[index] = updatedTodo;
    } else {
      console.log("Invalid index or Todo list is empty");
    }
  }
  getAll(){
    return this.myTodos
  }
  get(indexOfTodo){
    if (indexOfTodo >= 0 && indexOfTodo < this.myTodos.length) {
      return this.myTodos[indexOfTodo];
    } else {
      console.log("Invalid index or Todo list is empty");
      return null;
    }
  }
  clear(){
    this.myTodos = []
    return this.myTodos
  }

}

module.exports = Todo;
