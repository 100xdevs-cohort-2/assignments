import axios from "axios";

function TodoList({ onTodoCompleted, todos }: any) {
  const done = async (todoId: any) => {
    try {
      const onDone = await axios.put(
        `http://localhost:3000/todos/completed/${todoId}`,
        null,
        {
          //headers should always be in the 3rd argument, make 2nd arg as null if nothing to send.
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (onDone) {
        onTodoCompleted();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (todos.length > 0) {
    return (
      <div className="container mx-auto flex items-center justify-between flex-col w-[40%] py-2 border border-gray-600">
        <ul className="py-5">
          {/* JS function to map all the todo items in the DOM */}
          {todos.map((item: any) => {
            return (
              <li
                key={item.id}
                className="my-5 py-2 border rounded-md w-80 px-2"
              >
                <h2 className="text-2xl">Title: {item.title}</h2>
                <p>Description: {item.description}</p>
                <button
                  className="bg-gray-700 rounded-md px-2"
                  onClick={() => done(item.id)}
                >
                  {item.completed == true ? "Done" : "Mark as Completed"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    //When there is nothing in the DB to populate
    return (
      <div className="container mx-auto flex items-center justify-between flex-col w-[40%] py-2 border border-gray-600">
        No items found
      </div>
    );
  }
}

export default TodoList;
