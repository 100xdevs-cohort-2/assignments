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
    this.todos=[];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexOfTodo)
  {
      const len= this.todos.length;
      for(let i=indexOfTodo;i<len-1;i++)
      {
         this.todos[i]=this.todos[i+1];
      }
  }
  update(index,updatetodo)
  {  
    const len = this.todos.length;
    if(index>=len||index<0)
    {
       console.log("Invalid index");
    }
    else
    {
      this.todos[index]=updatetodo;
    }
    
  }
  getAll()
  {
    return this.todos;
  }
  get(indexOfTodo){
    const len = this.todos.length;
    if(indexOfTodo>=len||indexOfTodo<0)
    {
       console.log("Invalid index");
    }
    else
    return this.todos[indexOfTodo];
  }
  clear(){
    this.todos=[];
  }

}

module.exports = Todo;
