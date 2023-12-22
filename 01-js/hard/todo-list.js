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
  todoList;
  constructor(){
    this.todoList = [];
  }
  clear(){
    this.todoList = [];
  }
  add(todo){
    if(!todo) return null;
    this.todoList.push(todo);
  }
  update(index, todo){
    if(!todo) return null;
    if(index>=this.todoList.length || index<0 ){
      return null;
    }
    this.todoList[index]= todo;

  }
  remove(index){
    if(index>=this.todoList.length || index<0 ){
      return null;
    }
    this.todoList.splice(index , 1 ); // remove 1 element starting from index
  }
  getAll(){
    return this.todoList;
  }
  get(index){
    if(index>=this.todoList.length || index<0 ){
      return null;
    }
    return this.todoList[index];
  }

}

module.exports = Todo;
