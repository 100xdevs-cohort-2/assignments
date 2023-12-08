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
    this.ans=[];
  }
  add(todo){
    this.ans.push(todo);
  }
  remove(index){
    if(index>=this.ans.length) return;
    this.ans.splice(index,1);
  }
  update(index,updatedTodo){
    if(index>=this.ans.length) return;
    this.ans[index]=updatedTodo;
  }
  getAll(){
    return this.ans;
  }
  get(index){
    if(index>=this.ans.length) return null;
    return this.ans[index]
  }
  clear(){
    while(this.ans.length){
      this.ans.pop();
    }
  }
}

module.exports = Todo;
