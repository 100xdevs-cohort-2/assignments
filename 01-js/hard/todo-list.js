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
    this.todo=[];
    this.i = 0;
  }
  add(todo){
    if(typeof(todo) === 'string')
    this.todo[this.i] = todo;
    this.i+=1;
  }
  remove(indexOfTodo){
    if(typeof indexOfTodo === 'number' && indexOfTodo<=this.i && indexOfTodo>=0){
      this.todo.splice(indexOfTodo, 1);
      this.i--;
    }
  }
  update(index, updatedTodo){
    if(updatedTodo == 'Invalid Task') return null;
    if(typeof updatedTodo === 'string' && index <this.i && index>=0) 
    this.todo[index] = updatedTodo;
  }
  getAll(){
    return this.todo;
  }
  get(indexOfTodo){
    if(indexOfTodo<this.i && indexOfTodo>=0) 
    return this.todo[indexOfTodo];
    else{
      return null;
    }
    
  }
  clear(){
    this.todo = [];
  }
}

module.exports = Todo;
