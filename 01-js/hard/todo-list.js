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
    this.todos_list=[];
  }

  add(todo){
    this.todos_list.push(todo);
  }

  remove(indexOfTodo){
    this.todos_list.splice(indexOfTodo,1);
  }

  update(index,updatedTodo){
    if(this.todos_list.length>index){
      this.todos_list.splice(index,1,updatedTodo);
    }
  }

  getAll(){
    return this.todos_list;
  }

  get(indexOfTodo){
    if(this.todos_list.length>indexOfTodo){
      return this.todos_list[indexOfTodo];
    }
    else {
      return null;
    }
  }

  clear(){
    this.todos_list=[];
  }
}

module.exports = Todo;
