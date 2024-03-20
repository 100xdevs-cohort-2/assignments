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

  add(item){
    this.taskList.push(item);
  }

  remove(indexOfTodo){
    this.taskList.splice(indexOfTodo,1);
  }

  update(index, updatedTodo){
    if(index > this.taskList.length - 1){
      return 'invalid task.';
    }
    else{
      this.taskList[index] = updatedTodo;
    }
  }

  getAll(){
    return this.taskList;
  }

  get(indexOfTodo){
    if(indexOfTodo > this.taskList.length - 1){
      return null;
    }
    else{
      return this.taskList[indexOfTodo];
    }
  }

  clear(){
    this.taskList = [];
  }
}

module.exports = Todo;
