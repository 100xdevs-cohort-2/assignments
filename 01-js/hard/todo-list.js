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
  this.todolist = [];
 }
 add(x){
  this.todolist.push(x);
 }
 remove(x){
  let arr1 = this.todolist.slice(0,x);
  let arr2 = this.todolist.slice(x+1,this.todolist.length);
  this.todolist = arr1.concat(arr2);
 }
 update(x,y){
  if(x<this.todolist.length){
    this.todolist[x]=y;
  }
  
 }
 getAll(){
  return this.todolist;
 }
 get(x){
  if(x<this.todolist.length){
    return this.todolist[x];
  }
  else{
    return null;
  }
 }
 clear(){
  this.todolist = [];
 }
}

module.exports = Todo;
