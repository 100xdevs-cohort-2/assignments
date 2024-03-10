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

  allTodo =[]
  newTodo =[]

  add(todo){

    this.allTodo.push(todo)
  }

  remove(index){
    this.allTodo.splice(index, 1);
  }

  update(index, todo){
    this.allTodo[index] = todo
  }

  getAll(){
    console.log(this.allTodo);
    return this.allTodo
  }

  get(index){
    return this.allTodo[index]
  }

  clear(){
    this.allTodo.splice(0,this.allTodo.length)
  }



}


// let todoClass = new Todo
// todoClass.add("Task 1")
// todoClass.add("Task 2")
// todoClass.add("Task 3")
// todoClass.add("Task 4")

// todoClass.remove(1)
// todoClass.getAll()

module.exports = Todo;
