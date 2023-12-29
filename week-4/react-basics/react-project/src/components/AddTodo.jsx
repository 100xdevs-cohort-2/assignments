export default function AddTodo({handleAddition}) {
    function handleClick() {
        const title = document.querySelector('.title').value
        const description = document.querySelector('.description').value
        if(title !== '' || description !== '')
            handleAddition(title, description)
    }
    return (
        <div>
            <input className='title' type="text" placeholder='Title...' />
            <br />
            <input className='description' type="text" placeholder='decription' />
            <br />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    )        
}

