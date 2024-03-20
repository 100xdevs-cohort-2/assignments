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
  constructor()
  {
     this.result=[]; 
  }
  add(todo)
  {
     this.result.push(todo); 
  }
  remove(index)
  {
    if(index<this.result.length)
    this.result.splice(index,1); 
  }
  update(index,updatedTodo)
  {
    if(index<this.result.length)
    this.result[index]=updatedTodo; 
  }
  getAll()
  {
    return this.result; 
  }
  get(index)
  {
    if(index<this.result.length)
    return this.result[index]; 
    return null; 
  }
  clear()
  {
    this.result.splice(0,this.result.length); 
  }
}

module.exports = Todo;
