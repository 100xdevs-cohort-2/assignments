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
    this.work=[];
    this.i=0;
  }
  add(todo){
    if (typeof todo === 'string'){
      this.work[this.i]=todo;
      this.i+=1;
  }
  }
  remove(indexOfTodo){
    if(typeof indexOfTodo=== 'number'  && indexOfTodo>=0 && indexOfTodo<this.work.length){
      //In the splice method, the second argument represents the number of elements to delete from the array. When you write splice(index, 1), it means you want to remove one element starting from the specified index.
      this.work.splice(indexOfTodo,1);
    }
  }
  update(index,updatedTodo){
    if(typeof updatedTodo === 'string' && index >= 0 && index < this.work.length) {
      this.work[index] = updatedTodo;
    }
  }
  getAll(){
    // for(let i=0;i<this.work.lengthl;i++){
    //   console.log(`${i}. ${this.work[i]}`)
    // }
    return this.work;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.work.length) {
      return this.work[indexOfTodo];
    } else {
      return null;
    }
  }
  clear() {
    this.work = [];
  }
}

module.exports = Todo;
