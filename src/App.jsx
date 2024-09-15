// src/App.jsx
import React from 'react';
import LogInForm from './components/User_Auth/LogInForm';
import { useSelector } from 'react-redux';
import UserProfile from './components/User_Auth/UserProfile';

const App = () => {
 
  const auth = useSelector(state=> state.auth)

 return (
<div>
  {
    !auth.isAuthenticated ? <LogInForm/> : <UserProfile/>
  }
  
  
  
    </div>
 );
}
export default App;
