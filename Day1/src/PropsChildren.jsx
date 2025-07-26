import React from 'react'

const PropsChildren = ({data, children}) => {
  return (
    <div>
       <h1>My name is {data.name}</h1>
       <h2>Age:{data.age}</h2>
       {children}

    </div>
  )
}

export default PropsChildren