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

  constructor() {
    this.todos = [];
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(index)
  {
    if(index >= this.todos.length)
      return;
    this.todos.splice(index, 1);
  }

  update(index, todo){
    if(index >= this.todos.length)
      return;
    
    for(let i=0; i<index; i++)
      this.todos[index] = todo;
  }

  getAll()
  {
    return this.todos;
  }

  get(index)
  {
    if(index >= this.todos.length)
      return null;
    return this.todos[index];
  }

  clear()
  {
    this.todos = [];
  }
}

let todoList = new Todo();
// uncomment for manual testing
// todoList.add('Task 1');
// todoList.add('Task 2');
// todoList.add('Task 3');

// todoList.update(1, 'Updated Task 2');
// console.log(todoList.get(1));

// todoList.update(3, 'Invalid Task');
// console.log(todoList.getAll());

// todoList.remove(2);
// console.log(todoList.getAll());




module.exports = Todo;
