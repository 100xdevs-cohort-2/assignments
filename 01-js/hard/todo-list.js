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
    this.todo = []
  }
  add( task){
    this.todo.push(task)
  }
  remove(index){
    if (index>=0 && index<this.todo.length){
      this.todo.splice(index, 1)
    }
    
  }
  update(index, updatedTodo){
    if (index<this.todo.length && index>=0){
      this.todo[index] = updatedTodo
    }
  }
  getAll(){
    return this.todo
  }
  get(index){
    if (index<this.todo.length && index>=0){
      return this.todo[index]
    }
    else{
      return null
    }
  }
  clear(){
    this.todo.splice(0, this.todo.length);

  }

}

module.exports = Todo;
