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
		this.todo=[]
	}
	
	remove(ndx){
		this.todo.splice(ndx, 1);
	}
	
	update(ndx, updatedTodo){
		if (ndx<this.todo.length){
		
			this.todo[ndx]=updatedTodo;
		}
	}
	
	add(item){
		this.todo.push(item)
	}
	
	getAll(){
		return(this.todo);
	}
	
	get(ndx){
		if (ndx<this.todo.length){
			return(this.todo[ndx]);
		}
		else{
			return null;
		}
	}
	
	clear(){
		this.todo=[]
	}
}

module.exports = Todo;
