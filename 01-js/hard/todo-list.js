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
let TodoList = [];
class Todo {

  constructor(){
    TodoList.length =0;
  }
  
  add(todo) {
    TodoList.push(todo);
  }

  remove(index)
  {
    TodoList.splice(index , 1);
  }

  update(index , updateToDo)
  {
    if(index < TodoList.length)
    TodoList.splice(index , 1 ,updateToDo)
  }
  getAll()
  {
    return TodoList;
  }
  get(index)
  { if(index < TodoList.length)
      return TodoList[index];
    return null;
  }
  clear()
  {
    TodoList.length = 0;
  }
}



module.exports = Todo;
