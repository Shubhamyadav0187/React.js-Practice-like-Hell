import React from 'react'

const Welcome = (props) => {
    const {name, surname} = props
  return (
    <div>
        <h1>Hello, {name} {surname}</h1>
    </div>
  )
}

export default Welcome