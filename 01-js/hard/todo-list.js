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
  todo_list = [];
  
  constructor(){
  }

  add(todo){
      this.todo_list.push(todo);
  }

  remove(indexOfTodo) {
      this.todo_list.splice(indexOfTodo, 1)
  }

  update(index, updatedTodo){
    if (this.todo_list.length-1 >= index){
      this.todo_list[index] = updatedTodo;
      }  
    }

  getAll() {
      return this.todo_list;
  }

  get(indexOfTodo){

        if (indexOfTodo <= this.todo_list.length-1){
            return this.todo_list[indexOfTodo];
        } else {
            return null; 
        }  
  }

  clear(){
      this.todo_list.length = 0;
  }
}

module.exports = Todo;
;
