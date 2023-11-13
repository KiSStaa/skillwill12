import React from 'react'

const UserItem = ({id, name,action}) => {
  return (
    <div className="user-item">
        <p>Ongoing Homework: {name}</p>

        <button onClick={() => action(id)}>Remove</button>
     </div>
     
  )
}


export default UserItem