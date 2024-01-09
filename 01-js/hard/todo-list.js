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
    this.todo = [];
  }

  add(str){
    this.todo.push(str);
  }

  remove(index){
    this.todo.splice(index,1);
  }

  update(index,str){
    if(this.todo[index] != undefined){this.todo[index] = str;}
  }
  getAll(){
    return this.todo;
  }
  get(index){
    if(this.todo[index] == undefined){
      return null;
    }
    return this.todo[index];
  }
  clear(){
    this.todo = [];
  }


}

module.exports = Todo;
