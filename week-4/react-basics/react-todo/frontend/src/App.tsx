import Register from "./pages/register_page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todos from "./pages/todo_page";

function App() {
  //Router and Routes help in navigating through different pages
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
