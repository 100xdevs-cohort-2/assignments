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
    this.obj = [];
    this.i = 0;
  }

  add(todo){
    this.obj[this.i] = todo;
    this.i++;
  }

  remove(indexOfTodo){
    if(indexOfTodo<0||indexOfTodo>this.i-1){
      return "Invalid  task";
    }
    this.obj.splice(indexOfTodo, 1);
    this.i--;
  }

  update(indexOfTodo, updatedTodo){
    if(indexOfTodo<0||indexOfTodo>this.i-1){
      return "Invalid  task";
    }
    this.obj[indexOfTodo] = updatedTodo;
  }

  getAll(){
    return this.obj;
  }

  get(indexOfTodo){
    if(indexOfTodo<0||indexOfTodo>this.i-1){
      return null;
    }
    return this.obj[indexOfTodo]
  }

  clear(){
    this.obj = [];
  }
}

module.exports = Todo;
