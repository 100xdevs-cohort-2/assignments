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
  result=[]
   add(todo){
this.result.push(todo)
   }

   remove(indexOfTodo){
this.result.splice(indexOfTodo,1)
   }

   update(index, updatedTodo){
    if(index<this.result.length){


      this.result[index]=updatedTodo
    }
    

   }

   getAll(){
    return this.result

   }

   get(indexOfTodo){
    if(indexOfTodo<this.result.length){

      return this.result[indexOfTodo]
    }
    return null
   }

   clear(){
this.result = []
   }

}

module.exports = Todo;
