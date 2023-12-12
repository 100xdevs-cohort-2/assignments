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
  constructor()
  {
    this.todoList = [];
  }
  /** adds todo to list of todos */
   add(taskname){
    this.taskname = taskname;
    return this.todoList.push(taskname);
    

  }

  /**returns all todos */
  getAll(){
    console.log(this.todoList)
    return this.todoList
  }

/** remove todo from list of todos  */  
  remove(indexOfTodo){
    if (indexOfTodo<this.todoList.length){
      return this.todoList.splice((indexOfTodo),1)
    }
    else{
      return "Invalid index"
    }
    
    // this.todoList.splice((indexOfTodo-1),1)
  }

  clear(){
    const len = this.todoList.length
    for(let i =0;i<len;i++){
      this.todoList.pop()
    }
    console.log("TODO list cleared")
    return this.getAll()
  }

/**returns todo at given index */
  get(indexOfTodo){
    if (this.todoList[indexOfTodo]){
      return this.todoList[indexOfTodo]
    }
    else{
      return null
    }
    
    

  }

  /**update todo at given index */
  update(index, updatedTodo){
    if (index<this.todoList.length){
      this.todoList[index]=updatedTodo
      console.log("TODOLIST updated")
    }
    
    
    return this.getAll()

  }
  

}

let mytodo = new Todo()
mytodo.add("Go for a walk")
mytodo.add("Go for a run")
mytodo.add("Go for a swim")
mytodo.add("Go for a dance")
mytodo.getAll()
mytodo.remove(24)
// mytodo.getAll()
// console.log(mytodo.clear())
// console.log(mytodo.get(6))
mytodo.update(7,"Take dog for a walk")




module.exports = Todo;
