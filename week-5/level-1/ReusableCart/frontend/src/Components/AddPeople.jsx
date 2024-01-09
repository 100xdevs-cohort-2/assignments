/* eslint-disable react/prop-types */
// import React from 'react'

function AddPeople({ setIsformShowable }) {
  async function handlePeople(e) {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      description: e.target.description.value,
      interest: e.target.interest.value,
      twitter: e.target.twitter.value,
      linkdin: e.target.linkdin.value,
      github: e.target.github.value,
    };
    //setUsers([...users, newUser]);

    try {
      const responce = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newUser,
        }),
      });
      if (!responce.ok) {
        console.log('adding is failed');
      } else {
        const data = await responce.json();
        console.log(data);
      }
    } catch (e) {
      console.log(e.message);
    }
    setIsformShowable((prev) => !prev);

    e.target.reset();
  }
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Add User</h1>
      <form onSubmit={handlePeople}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Description"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="interest" className="block text-gray-700 mb-1">
            Interest
          </label>
          <input
            type="text"
            id="interest"
            name="interest"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Interest"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="github" className="block text-gray-700 mb-1">
            Github Link
          </label>
          <input
            type="text"
            id="github"
            name="github"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Github Link"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="twitter" className="block text-gray-700 mb-1">
            Twiter Link
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Twitter Link"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="linkdin" className="block text-gray-700 mb-1">
            Linkdin Link
          </label>
          <input
            type="text"
            id="linkdin"
            name="linkdin"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Linkdin Link"
            required
          />
        </div>
        {/* Add similar structure for other input fields */}
        {/* Description, Interest, GitHub Link, Twitter Link, LinkedIn Link */}
        {/* ... */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddPeople;
