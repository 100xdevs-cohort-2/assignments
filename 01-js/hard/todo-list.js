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
  todoArr 
  constructor(){
    this.todoArr = []
  }

   add(todoArr){
    this.todoArr.push(todoArr)
  }

  remove(indexOfTodo){
    this.todoArr.splice(indexOfTodo,1)
  }

  update(index,updatedTodo){
    //  this.todoArr[index] = updatedTodo
    // this.todoArr.splice(index,0,updatedTodo)
    for(let i = 0; i < this.todoArr.length; i++){
      if(i === index){
        this.todoArr[i] = updatedTodo;
      }
    }

    return this.todoArr;
  }

  getAll(){
    return this.todoArr
  }

  get(indexOfTodo){
    // let todoObj
    // for(let i = 0; i < this.todoArr.length; i++){
    //   if(i === indexOfTodo){
    //     todoObj = this.todoArr[i]
    //   }
    // }
    return indexOfTodo < this.todoArr.length ? this.todoArr[indexOfTodo] : null;
  }

  clear(){
    return this.todoArr = [];
  }

}

module.exports = Todo;
