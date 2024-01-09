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
  toDoList = [];

  add(str){
    this.toDoList.push(str);
  }

  remove(index){
    if(index!=-1){
      this.toDoList.splice(index,1);
    }
  }

  update(index, str){
    if(index < 0 || index >= this.toDoList.length){
      return null;
    }
    this.toDoList[index] = str;
  }

  getAll(){
    return this.toDoList;
  }

  get(i){
    if(i<0 || i >= this.toDoList.length){
      return null;
    }
    return this.toDoList[i]
  }

  clear(){
    this.toDoList = [];
  }
}

module.exports = Todo;
