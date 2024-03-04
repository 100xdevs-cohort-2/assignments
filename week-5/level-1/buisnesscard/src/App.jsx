import './App.css';
import BusinessCard from './BusinessCard';

function App() {
  const interests = [
    'Web Development',
    'UI/UX Design',
    'Hip-hop',
  ];

  return (
    <BusinessCard name={"Rohan"} description={"Am A Full Stack Dev"} interests={interests}/>
  );
}

export default App;
