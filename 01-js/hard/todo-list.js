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
    this.allTodos = [];
  }

  add(todo){
    this.allTodos.push(todo);
  }

  remove(indexOfTodo){
    if(indexOfTodo>=0 && indexOfTodo<this.allTodos.length){
      this.allTodos = this.allTodos.slice(0 , indexOfTodo).concat(this.allTodos.slice(indexOfTodo+1));
    }
  }

  update(index , updatedTodo){
    if(index >= 0 && index<this.allTodos.length){
      this.allTodos[index] = updatedTodo;
    }
  }

  getAll(){
    return this.allTodos;
  }

  get(indexOfTodo){
    if(indexOfTodo >=0 && indexOfTodo<this.allTodos.length){
      return this.allTodos[indexOfTodo];
    } else {
      return null;
    }
  }

  clear(){
    this.allTodos = [];
  }

}

module.exports = Todo;
