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
    this.todos = [];
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null; 
  }

  getAll() {
    return this.todos;
  }

  clear() {
    this.todos = [];
  }

}

let todList = new Todo();
todList.add("Gym");
todList.add("coding");
todList.add("food");

console.log(todList.getAll());

todList.remove(0);

console.log(todList.getAll());

todList.update(0, "Reading");

console.log(todList.getAll());

console.log(todList.get(1));

todList.clear();

console.log(todList.getAll());




module.exports = Todo;
