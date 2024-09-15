import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Reduc/authSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleLogOut = ()=>{
    dispatch(logOut())
  }


  if (auth.isAuthenticated) {
    return (
      <>
        <h1>Already Logged In</h1>
        <h2>Welcome {auth.user.email}</h2>
        <h2>Your role is {auth.user.role}</h2>
        <img src={auth.user.avatar} className='h-[500px] w-[300px] rounded-lg'/>
        <button onClick={handleLogOut}>Logout</button>
      </>
    );
  }
  return <h1>Please log in</h1>;
};

export default UserProfile;
