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
  constructor(todoList = []){
    this.todoList = todoList
  }

  add(todo){
    this.todoList.push(todo)
  }

  remove(indexOfTodo){
    if (indexOfTodo>=0 && indexOfTodo<this.todoList.length){
      this.todoList.splice(indexOfTodo,1)
    } else {
      this.todoList
    }
  }

  update(index, updatedTodo){
    if (index>=0 && index<this.todoList.length){
      this.todoList[index] = updatedTodo
    } else {
      this.todoList
    }
  }

  getAll(){
    return this.todoList;
  }

  get(indexOfTodo){
    if (indexOfTodo>=0 && indexOfTodo<this.todoList.length){
      return this.todoList[indexOfTodo]
    } else {
      return null
    }
  }

  clear(){
    this.todoList = []
  }
  
}

module.exports = Todo;
