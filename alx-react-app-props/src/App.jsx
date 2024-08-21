import './App.css';
import React from 'react';
import UserContext from './components/UserContext.jsx';
import ProfilePage from './components/ProfilePage.jsx';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;