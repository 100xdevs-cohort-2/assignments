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

  all_todos;

  constructor()
  {
      this.all_todos=[];
  }

  add(todo)
  {
      this.all_todos.push(todo);
  }

  remove(indexOfTodo)
  {
      this.all_todos.splice(indexOfTodo,1);
  }

  update(index,updatedTodo)
  {
      if(index>=this.all_todos.length) return;
      this.all_todos[index]=updatedTodo;
  }

  getAll()
  {
      return this.all_todos;
  }

  get(indexOfTodo)
  {
      if(indexOfTodo>=this.all_todos.length) return null;
      return this.all_todos[indexOfTodo];
  }

  clear()
  {
      this.all_todos=[];
  }
}

module.exports = Todo;
