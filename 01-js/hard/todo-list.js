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
    this.todo_list = []
  }
  add(lis){
    this.todo_list.push(lis)
  }
  remove(index){
    this.todo_list.splice(index,1)
  }
  update(index,lis){
    if(index<this.todo_list.length) 
    this.todo_list[index] = lis
  }
  getAll(){
    return [...this.todo_list]
  }
  get(index){
    return index<this.todo_list.length ? this.todo_list[index] : null 
  }
  clear(){
    this.todo_list = []
  }
}

module.exports = Todo;
