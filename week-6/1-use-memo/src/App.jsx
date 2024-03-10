import './App.css';
import { Assignment1 } from './components/Assignment1';
import { Assignment2 } from './components/Assignment2';
import { Assignment3 } from './components/Assignment3';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label><input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} />Dark mode</label>
      {/* <Assignment1 theme={isDark ? "dark" : "light"} /> */}
      {/* <Assignment2 theme={isDark ? "dark" : "light"} /> */}
      <Assignment3 theme={isDark ? "dark" : "light"} />
    </>
  )
}

export default App
