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
    this.todos =[] ;
  }
  
  add(todo){
    this.todos.push(todo);
  }
  remove(index){
    if(index<this.todos.length && index>=0) this.todos.splice(index,1);
  }
  update(index ,updatedTodo){
    if(index<this.todos.length && index>=0) this.todos[index] = updatedTodo;
  }
  get(index){
    let r= this.todos[index];
    if(r) return r;
    else  return null;
  }
  getAll(){
    return this.todos;
  }
  clear(){
    this.todos = [];
  }
}

module.exports = Todo;
