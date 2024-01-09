import { useEffect, useState } from 'react';
import AddPeople from './Components/AddPeople';
import Card from './Components/Card';
// import PageFormat from './Components/PageFormat';

function App() {
  // const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]);
  const [isformShowable, setIsformShowable] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/user');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setUsers(data);
        {
          console.log(users);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  console.log(users.length);

  return (
    <div>
      {isformShowable || users.length === 0 ? (
        <AddPeople setIsformShowable={setIsformShowable} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="p-8">
              <div className="grid grid-cols-3 gap-4">
                {users.map((user) => (
                  <Card
                    key={user._id}
                    name={user.name}
                    description={user.description}
                    interest={user.interest}
                  />
                ))}
              </div>
            </div>
          </div>
          <footer className="bg-gray-100 p-4">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => {
                setIsformShowable((prev) => !prev);
              }}
            >
              Add User
            </button>
          </footer>
        </div>
      )}
    </div>

    // <AddPeople />
  );
}

export default App;
