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
  constructor() {
    this.ToDoList =[];
  }
  AddToDo(Todostr)
  {
    this.ToDoList.push(Todostr);
    return this.ToDoList;
  }
   RemoveToDo(RemoveTodo)
   {
      if(RemoveTodo < this.ToDoList[0].length && RemoveTodo >=0)
      {
        this.ToDoList[0].splice(RemoveTodo,1);
        return this.ToDoList;
      }
      else{
        return null;
      }
   }
   UpdateToDo(updateIndex,updateStr)
   {
    if(updateIndex < this.ToDoList[0].length && updateIndex >=0)
    {
      this.ToDoList[0][updateIndex] = updateStr;
      return this.ToDoList;
    }
    else{
      return this.ToDoList;
    }
   }
   GetAllToDo()
   {
      return this.ToDoList;
   }
   GetToDo(indexToDo)
   {
    this.ToDoList[0].length;
    if(indexToDo <= this.ToDoList[0].length -1  && indexToDo >=0)
    {
      return this.ToDoList[0][indexToDo];
    }
    else{
      return "Invalid Index";
    }
   }
   ClearTodo()
   {
    return this.ToDoList =[];
   }
  
}

var callTodomethods = new Todo();
var data = callTodomethods.AddToDo(['Task 1','Task 2','Task 3']);
data.forEach(element => {
  console.log(element)});
callTodomethods.UpdateToDo(1).forEach(element => {
    console.log(element)});
callTodomethods.RemoveToDo(1,'Go to gym Task 2').forEach(element => {
      console.log(element)});
callTodomethods.GetAllToDo().forEach(element => {
  console.log(element)});
console.log(callTodomethods.GetToDo(2));
console.log(callTodomethods.ClearTodo());
