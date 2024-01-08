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
    this.Todo = [];
  }
  
  add(add_todo){
    this.Todo.push(add_todo);
  }

  remove(re_todo){
    this.Todo.splice(re_todo,1);
  }

  update(index,up_todo){
    if (index>=this.Todo.length){
      return;
    }
    this.Todo.splice(index,1,up_todo);
  }

  getAll(){
    return this.Todo;
  }

  get(index){
    if(index>=this.Todo.length){
      return null;
    }
    return this.Todo[index];
  }

  clear(){
    this.Todo = [];
  }
}

module.exports = Todo;
