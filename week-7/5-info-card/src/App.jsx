import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { Insertcard } from './component/Insertcard';
import { DetailsCard } from './component/DetailsCard';

function App() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(username !== ''){
      setLoading(true);
      axios(`https://api.github.com/users/${username}`)
      .then((res) => {
      setData(res.data);
      setLoading(false);
    })
    }
    
  },[username]);

  return(
    <div>
      <Insertcard setUsername={setUsername} />
      <div>
        {data ? loading ? <p>loading...</p> : <DetailsCard data={data}/> : <p>Enter the corect Username</p> }
      </div>
    </div>
  )
}

export default App
