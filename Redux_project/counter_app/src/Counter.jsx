import React from 'react'

function Counter() {
const count=useselector((state)=>state.counter.value);
const dispatch=dispatch();

  return (
   <>
   <div className="container">
    <h1 className="title">Redux Cuounter</h1>
    <div className="count">{count}</div>
    <div className="buttons">
        <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>

    </div>
   </div>
   </>
  )
}

export default Counter