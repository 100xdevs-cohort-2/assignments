/*
  Implement a class `Todo` having below methods
   x- add(todo): adds todo to list of todos
   x- remove(indexOfTodo): remove todo from list of todos
   x- update(index, updatedTodo): update todo at given index
   x- getAll: returns all todos
   x- get(indexOfTodo): returns todo at given index
   x- clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
        this.todoList = [];
    }
    add(todo){
        this.todoList.push(todo);
    }
    remove(indexOfTodo){
        if(this.checkInIndex(indexOfTodo)){
            this.todoList.splice(indexOfTodo, 1);
        }
    }
    update(index, updateTodo){
        if(this.checkInIndex(index)){
            this.todoList[index] = updateTodo;
        }
    }
    getAll(){
        return this.todoList;
    }
    get(indexOfTodo){
        if(this.checkInIndex(indexOfTodo)){
            return this.todoList[indexOfTodo];
        }
        return null;
    }
    clear(){
        this.todoList = [];
    }
    checkInIndex(index){
        return index >= 0 && index < this.todoList.length;
    }
}

module.exports = Todo;
