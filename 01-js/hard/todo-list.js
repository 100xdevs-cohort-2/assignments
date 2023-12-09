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

const { todo } = require("node:test");

class Todo {
   
 constructor() {
  this.todos = Array();
 }

 add(todo) {
  this.todos.push(todo);
 }
 remove(index) {
  if(index < this.todos.length - 1) {
  
  for(let i=index,j=index+1; j<this.todos.length; i++,j++) {
      this.todos[i] = this.todos[j];
  }
 }
  if(index < this.todos.length)
  this.todos.length  = this.todos.length - 1;
 }
 update(index, todo) {
  if(index < this.todos.length)
  this.todos[index] = todo;
 }
 getAll(){
  return this.todos;
 }
 clear () {
  this.todos.length = 0;
  return this.todos;
 }
 get(index) {
  if(index < this.todos.length)
  return this.todos[index];
return null;
 }

}

module.exports = Todo;