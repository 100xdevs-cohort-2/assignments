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
    this.taskList = [];
  }
  add(taskDescription){
    this.taskList.push(taskDescription)
  }
  remove(indexOfTask){
    this.taskList.splice(indexOfTask, 1);
  }
  update(indexOfTask, updatedTodo){
    if(indexOfTask > this.taskList.length-1 || indexOfTask < 0){
      
    }
    else{
      this.taskList[indexOfTask] = updatedTodo
    }
    
  }
  getAll(){
    return this.taskList
  }
  get(indexOfTodo){
    if(indexOfTodo > this.taskList.length-1 || indexOfTodo < 0){
      return null
    }
    return this.taskList[indexOfTodo]
  }
  clear(){
    this.taskList.splice(0, this.taskList.length)
  }
}

module.exports = Todo;
