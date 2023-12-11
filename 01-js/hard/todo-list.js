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
  constructor () {
    this.todoList = []
  }
  add(todo){
    this.todoList.push(todo)
  }
  remove(i){
    this.todoList.splice(i,1)
  }
  update(index, thing){
    if (index >= this.todoList.length || index < 0){
      return;
    }
    this.todoList[index] = thing;
  }
  getAll(){
    return this.todoList;
  }
  get(i){
    return (this.todoList[i] === undefined) ? null : this.todoList[i]
  }
  clear(){
    this.todoList = [];
  }
}

module.exports = Todo;
