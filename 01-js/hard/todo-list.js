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
    this.todo = []
  }
  add(todo){
    this.todo.push(todo)
  }
  remove(idx){
    this.todo.splice(idx,1)
  }
  update(idx,val){
      return (idx<this.todo.length) ? this.todo[idx] = val : null
  }
  getAll(){
    return this.todo
  }
  get(idx){
    return (idx<this.todo.length) ? this.todo[idx] : null
  }
  clear(){
    this.todo = []
  }
}

module.exports = Todo;
