import React from 'react'

const OnlineUser = () => {
    const user = [
        {id: 1, name: "Shubham", online: true},
        {id:2, name: "Nitin", online: false},
        {is:3, name: "sahil", online: true}
    ]
  return (
    <div>
        <h1>Online user</h1>
        <ul>
            {user.map((users) =>(
                <li key={users.id}>{users.name} {users.online ? "Online" : "offline"}</li>
            ))}
        </ul>


    </div>
  )
}

export default OnlineUser