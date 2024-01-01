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
   todo = [];
  
  add(tasks)
  {
    this.todo.push(tasks);
  }
  remove(index)
  {
    if(index < this.todo.length)
     {
      this.todo.splice(index , 1);
    }
  }
  update(index , newtasks)
  {
    if(index < this.todo.length)
     {
    this.todo[index] = newtasks;
     }
  }
  getAll()
  {
    return this.todo;
  }
  get(indexOfTodo){
    if(indexOfTodo >= this.todo.length) return null;
    return this.todo[indexOfTodo];
  }
  clear()
  {
    this.todo=  []
  }

}

module.exports = Todo;
