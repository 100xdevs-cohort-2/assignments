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

  todos;
  constructor(){
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    const todos = this.todos.filter((i, idx) => idx !== index);
    this.todos = todos;
  }

  update(idx, updatedTodo) {
    const todos = this.todos.map((item, index) => {
      if(index === idx) {
        return {
          ...updatedTodo
        }
      }
      return item;
    })
    this.todos = todos;
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    return this.todos.find((i, idx) => idx === index);
  }

  clear() {
    this.todos = [];
  }
}


const todos = new Todo();
todos.add({id:1, name:'item 1'});
todos.add({id:1, name:'item 3'});
todos.add({id:1, name:'item 2'});
todos.add({id:1, name:'item 4'});
todos.add({id:1, name:'item 5'});
console.log(todos.getAll());
console.log(todos.get(3));
todos.update(1, {id: 2, name: 'item 2'})
todos.remove(3)
todos.clear()
todos.add({id:1, name:'item 5'});
console.log(todos.getAll());



module.exports = Todo;
