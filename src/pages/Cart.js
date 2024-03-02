import React from 'react'
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux';
import { remove } from '../Store/cartSlice';
const Cart = () => {
  const items=useSelector(state=>state.cart)
const dispatch=useDispatch();
const handleDelete=(itemId)=>{
  dispatch(remove(itemId));
  console.log('Clicked')
}

  return (
    <div className='container'>
      <div className="list-group">
  {
    items.map(item=>(
      <a className="my-3 py-5 rounded-3 list-group-item list-group-item-action" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
    <img src={item.images} className='w-img' alt="" />
    <div className='mx-3 position-relative'>
    <h5 className="mb-1">{item.title}</h5>
    <p className="mb-1">{item.description}</p>
      <button className='bg-danger text-light position-absolute end-0 mx-3 border-0 rounded-pill' onClick={()=>handleDelete(item.id)}>
      <i class="bi bi-trash3-fill" > Delete</i>
      </button>
      <b>${item.price}</b>
      
      </div>  
    </div>
    
  </a>
    ))
  }
 
</div>
      
    </div>
  )
}

export default Cart
