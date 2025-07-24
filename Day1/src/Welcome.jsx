import React , {useState}from 'react'

const Welcome = (props) => {
    const {name, surname} = props
    const [count, setcount] = useState(0)

  return (
    <div>
        <h1>Hello, {name} {surname}</h1>
        <h1>Count: {count}</h1>
        <button onClick={()=>setcount(count+1)}>+</button>
        <button onClick={()=> {setcount(count-1)}}>-</button>

    </div>
  )
}

export default Welcome