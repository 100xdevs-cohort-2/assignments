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
    this.todos = []; 
  }

  add(text){
    this.todos.push(text);
  }
  remove(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo<this.todos.length){
      this.todos.splice(indexOfTodo, 1)
    } else {
      console.log('Index Invalid')
    }
  }
  update(index, updatedTodo){
    if(index >= 0 && index <this.todos.length){
      this.todos[index] = updatedTodo
    } else {
      console.log('Invalid')
    }
  }
  get(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo<this.todos.length){
      return this.todos[indexOfTodo]
    } else {
      console.log('Error')
      return null;
    }
  }
  getAll(){
    return this.todos;
  }
  clear(){
    this.todos = [];
  }
}

module.exports = Todo;