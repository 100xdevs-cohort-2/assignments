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
    this.Todo = [];
  }


  add(todo) {
    this.Todo.push(todo);
  }

  remove(i) {
    this.Todo.splice(i, 1);
  }

  update(i, str) {
    if (i>= this.Todo.length){
      return;
    }
    this.Todo.splice(i, 1, str);
  }

  
  getAll(){
    return this.Todo;
  }

  get(i){
    if (i>= this.Todo.length){
      return null;
    }
    return this.Todo[i];
  }

  clear(){
    this.Todo = [];
    // return Todo;
  }



}

module.exports = Todo;
