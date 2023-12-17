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
    this.todos = []
  }
  isValidIndex(index) {
    return index >= 0 && index < this.todos.length;
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    if(this.isValidIndex(indexOfTodo)){
      this.todos.splice(indexOfTodo,1);
    }
  }

  update(index, updatedTodo){
    if(this.isValidIndex(indexOfTodo)){
      this.todos[index] = updatedTodo
    }
  }

  getAll(){
    return this.todos;
  }

  get(indexOfTodo){
    if(this.isValidIndex(index)){
      return this.todos[index]
    }else return null
  }

  clear(){
    this.todos = [];
  }
}

module.exports = Todo;
