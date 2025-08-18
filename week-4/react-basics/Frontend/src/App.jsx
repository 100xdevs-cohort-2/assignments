import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[{
        title: 'first',
        description: 'desc',
        completed: true
      }]}></Todos>
    </div>
  )
}


export default App
