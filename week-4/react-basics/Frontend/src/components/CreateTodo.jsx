export function CreateTodo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="text" name="" id="" placeholder="Title" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="text" name="" id="" placeholder="Description" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <button>save</button>
        </div>
    );
}  