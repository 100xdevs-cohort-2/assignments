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
    this.myTODO = []
  }

  add(todo){
    this.myTODO.push(todo);
  }

  remove(indexOfTodo){
    if (indexOfTodo >= 0 && indexOfTodo < this.myTODO.length) {
      this.myTODO.splice(indexOfTodo, 1);
    } else {
      console.log("Invalid index or Todo list is empty");
    }
  }

  update(index, updatedTodo){
    if(index >0 && index < this.myTODO.length){
      this.myTODO[index] = updatedTodo
    }
    else{
      console.log("Invalid Index")
    }
  }

  getAll(){
    return this.myTODO
  }

  get(indexOfTodo){
    if(indexOfTodo >=0 && indexOfTodo < this.myTODO.length){
      return this.myTODO[indexOfTodo]
    }
    else{
      console.log("Invalid index")
      return null
    }
  }

  clear(){
    this.myTODO = []
    return this.myTODO
  }
}

module.exports = Todo;
