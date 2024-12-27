import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset ,incrementBYAmount} from '../redux/counterSlice'
function Counter() {

    const dispatch = useDispatch()
   const count =  useSelector((state)=>state.counter.count)
   const [amount,SetAmount] = useState("")
   const handleIncrement = ()=>{
   if(amount==""){
    alert("please provide amount!!")
   }else{
     dispatch(incrementBYAmount(Number(amount)))
   }
  }
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
    <div className='d-flex justify-content-center align-items-center border rounded w-25 p-5 flex-column'>
    <h1 style={{fontSize:'100px'}}>{count}</h1>
    <div>
        <div className='w-100 d-flex' >
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning ms-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-3'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-info ms-3'>Incrememnt</button>

            </div>
            <div className="d-flex mt-5">
              <input type="text" onChange={e=>SetAmount(e.target.value)} className='form-control' placeholder='Enter amount to be incremented !!!'/>
              <button onClick={handleIncrement} className='btn btn-primary ms-3'>Incrememnt By Amount</button>

            </div>
    </div>
        </div>
    </div>
  )
}

export default Counter
