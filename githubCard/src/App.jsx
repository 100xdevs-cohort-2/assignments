import React, { useState, useEffect } from 'react';

const GitHubInfoCard = () => {
  const [userData, setUserData] = useState(null);
  const username = "krishvsoni";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, [username]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {userData ? (
        <div style={{ display: 'inline-block', textAlign: 'left', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <img src={userData.avatar_url} alt={`${username}'s avatar`} width="100" height="100" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repositories: {userData.public_repos}</p>
        </div>
      ) : (
        <p>Loading GitHub information...</p>
      )}
    </div>
  );
};

export default GitHubInfoCard;
