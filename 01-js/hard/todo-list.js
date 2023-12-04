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
    this.todos = {};
    this.idx = 0;
  }

  add(todo){
    this.todos[this.idx] = todo;
    this.idx+=1;
  }

  remove(index){
    if(this.todos.hasOwnProperty(index)){
       console.log('deleting property at index '+ index);
       delete this.todos[index];
    }
  }

  update(index, todo){

    if(this.todos.hasOwnProperty(index)){
      this.todos[index] = todo;
    }
  }

  getAll(){
    let curr_todos = [];
    for (let key in this.todos){
      curr_todos.push(this.todos[key]);
    }

    return curr_todos;
  }

  get(index){
    if((this.todos.hasOwnProperty(index))){
      return this.todos[index];
    }else{
      return null;
    }
  }

  clear(){
    this.todos = {};
  }

}

module.exports = Todo;
