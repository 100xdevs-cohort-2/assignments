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
    this.total = 0
  }
  add(todo){
    this.todos.push(todo)
    this.total = this.todos.length
  }
  remove(indexOfTodo){
    if(indexOfTodo >= this.total)return;
    this.todos = this.todos.filter((_, index) => {
      return index != indexOfTodo
    })
    this.total--;
  }
  update(index, updatedTodo){
    if(index >= this.total)return;
    this.todos[index] = updatedTodo
  }
  getAll(){
    return this.todos
  }
  get(indexOfTodo){
    return this.todos[indexOfTodo] ? this.todos[indexOfTodo] : null
  }
  clear(){
    this.todos = []
    this.total = 0
  }
}

module.exports = Todo;
