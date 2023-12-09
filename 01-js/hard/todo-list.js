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
  };
  add(val){
    this.todos.push(val);
  };
  remove(idx){
    this.todos.splice(idx,1);
  };
  update(idx,val){
    if(idx < this.todos.length){
      this.todos[idx] = val;
    };
  };
  getAll(){
    return this.todos;
  };
  get(idx){
    if(idx < this.todos.length){
      return this.todos[idx];
    };
    return null;
  };
  clear(){
    this.todos = [];
  };
};

// space complexity - O(n)
// time complexity of all method (except remove) - O(1)
// time complexity of remove method - O(n)
module.exports = Todo;
