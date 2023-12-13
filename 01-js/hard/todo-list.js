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

  constructor(todo = [])
  {
    this.todo = todo;
  }

  add(x)
  {
    this.todo.push(x);
  }

  remove(indexOfTodo)
  {
    if(indexOfTodo < this.todo.length)
    {
      this.todo.splice(indexOfTodo,1);
    }
  }

  update(index, updatedTo)
  {
    if(index<this.todo.length)
    {
      this.todo.splice(index,1, updatedTo);
    }
  }

  getAll()
  {
    return this.todo;
  }
  
  get(indexOfTodo)
  {
      if(indexOfTodo>=this.todo.length) return null;
      return this.todo[indexOfTodo];
  }

  clear()
  {
      this.todo=[];
  }

}

module.exports = Todo;
