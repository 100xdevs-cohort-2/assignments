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
    this.TDList = [];
  }

  add(todo){
   this.TDList.push(todo);  
  }
  remove(indexOfTodo){
    if(indexOfTodo > this.TDList.length){
      return;
    }
    this.TDList.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
    if(index >= this.TDList.length){
      return;
    }
    this.TDList[index] = updatedTodo;
  }
  getAll(){
    return this.TDList;
  }
  get(index){
    if(index >= this.TDList.length){
      return null;
    }
    return this.TDList[index];
  }
  clear(){
    this.TDList = [];
    return this.TDList;
  }
}

module.exports = Todo;
