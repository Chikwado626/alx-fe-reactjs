import './App.css';
import { useState } from 'react';
import UserContext from './components/UserContext.js';
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