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
    this.todoList = [];
  }

  add(task){
    this.todoList.push(task);
  }

  remove(index){
    if(-1 < index && index < this.todoList.length){
      this.todoList.splice(index, 1);
    }
  }

  update(index, task){
    if(-1 < index && index < this.todoList.length){
      this.todoList[index] = task;
    }
  }

  getAll(){
    return this.todoList;
  }

  get(index){
    if(0 <= index && index < this.todoList.length){
      return this.todoList[index];
    }else{
      return null;
    }
  }

  clear(){
    this.todoList = [];
  }
}

module.exports = Todo;
