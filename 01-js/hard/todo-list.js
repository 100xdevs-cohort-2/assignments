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
        todos = [];

        add(todo){
           this.todos.push(todo);
        }

        remove(indexOfTodo){
          // console.log("before remove: ",this.todos);
             let updatedTodos =this.todos.filter((todo,index)=>{
                  if(indexOfTodo!==index)
                  return todo;
             })
             this.todos = updatedTodos;
            // console.log("After remove: ",updatedTodos);
        }

        update(index, updatedTodo){
              // console.log("before update: ",this.todos)
              const size=this.todos.length;
          if(index<size)
              this.todos[index]=updatedTodo;
              // console.log("after update: ",this.todos);
        }
        
        getAll()
        {
          return this.todos;
        }

        get(indexOfTodo){
          // console.log("received get ind todo: ",this.todos[indexOfTodo])
          let ans=null
          const size=this.todos.length;
          if(indexOfTodo<size)
          ans = this.todos[indexOfTodo];
        return ans;
          
        }

        clear(){
          // console.log("before clear: ",this.todos);
            this.todos = [];
          // console.log("after clear todos: ",this.todos);
        }

}

module.exports = Todo;
