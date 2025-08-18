export function Todos({ todos }) {
    return (
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <h2 style={{ margin: '0.5rem', fontSize: '1.5rem' }}>{todo.title}</h2>
            <p style={{ margin: '0.5rem' }}>{todo.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button>{todo.completed ? 'done' : 'left'}</button>
              <button>delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }