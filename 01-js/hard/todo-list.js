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
todo;
constructor(){
  this.todo=[]
}
add(task){
  this.todo.push(task);
}
remove(index){
  if(index>=this.todo.length){
    return null;
  }
  
    this.todo.splice(index,1);
  
}
  update(index,updatedtodo){
    if(index>=this.todo.length){
      return this.todo
    }
    this.todo[index]=updatedtodo
  }
getAll(){
  return this.todo
}
get(indexId){
if(indexId>=this.todo.length){
  return null;
}
return this.todo[indexId];

}
clear(){
  this.todo=[]
}

}

module.exports = Todo;
