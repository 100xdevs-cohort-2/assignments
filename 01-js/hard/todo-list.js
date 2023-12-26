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
  constructor(task){
    this.task=[];
  }
  add(todo){
    this.task.push(todo);
  }
  remove(indexOfTodo){
    this.task.splice(indexOfTodo,1);
  }
  update(index,updatedTodo){
    if(index<=this.task.length && updatedTodo!="Invalid Task"){
    this.task[index]=updatedTodo;
    }
  }
  getAll(){
    return this.task;
  }
  get(indexOfTodo){
    if (indexOfTodo>this.task.length-1){
      return null;

    }
    else
    return this.task[indexOfTodo];
  }
  clear(){
    this.task=[];
  }
}

module.exports = Todo;
