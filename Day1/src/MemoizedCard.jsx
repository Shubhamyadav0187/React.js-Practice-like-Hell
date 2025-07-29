import React ,{useMemo}from 'react'

const MemoizedCard = React.memo(function memoizedComponent({name, age, onGreet}){
    const category = useMemo(()=>{
        console.log("Calculating age Category....");
        return age < 18 ? "Minor" : "Adult";

        
    }, [age])
    console.log('child reload');
    
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age} - {category}</p>
            <button onClick={onGreet}>Greet</button>
        </div>
    )

})

export default MemoizedCard