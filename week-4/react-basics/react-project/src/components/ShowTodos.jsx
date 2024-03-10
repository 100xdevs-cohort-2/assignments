export default function ShowTodos({todos, handleClick}) {
    const list = todos.map((todo) => 
        <div key={todo.id}>
        <p><b>{todo.title}</b></p>
        <p>{todo.description}</p>
        <button key={todo.id} onClick={() => handleClick(todo.id)} >{todo.completed?'Done':'Mark as done!'}</button>
        </div>
    );

    return (
        <div>
            <h2>Todos: </h2>
            <div>{list}</div>
        </div>
    )
}
