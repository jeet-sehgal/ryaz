import React, { useContext } from 'react'
import JeetContext from '../context/JeetContext';

function Profile() {
  const {jeet}=useContext(JeetContext);
  if(jeet) return <h1>Welcome {jeet.user}</h1>
  return <h1>Please login</h1>
}

export default Profile