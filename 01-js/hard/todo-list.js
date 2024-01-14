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
    this.todo_list = [];
  }
  add(x){
    this.todo_list.push(x);
  }
  remove(index){
    const temp = this.todo_list.length;
    if (index>-1 && index<temp){
      this.todo_list.splice(index, 1);
    }
  }
  update(index, x){
    const temp = this.todo_list.length;
    if (index>-1 && index<temp){
      this.todo_list[index] = x;
    }
  }
  getAll(){
    return this.todo_list;
  }
  get(index){
    const temp = this.todo_list.length;
    if (index>-1 && index<temp){
      return this.todo_list[index];
    }
    else{
      return null;
    }
  }
  clear(){
    this.todo_list = [];
  }
}

module.exports = Todo;
