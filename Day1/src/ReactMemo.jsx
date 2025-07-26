import React from 'react'

const ReactMemo = React.memo(function memoComponent({name}){
console.log("child  render")
 return <h1>Hello {name}</h1>
})  
 


export default ReactMemo