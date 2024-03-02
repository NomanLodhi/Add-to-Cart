import React from 'react'
import { remove } from '../Store/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
const ProductsModal = () => {
 const items=useSelector(state=>state.cart)
 const dispatch=useDispatch()
 const Del=(itemId) =>{
dispatch(remove(itemId)) 
}
 return (
    <div>
      <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body h-modal  overflow-y-scroll">
      <div className="list-group">
  {
    items.map(item=>(
      <a className="my-3 py-5 rounded-3 list-group-item list-group-item-action" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
    <img src={item.images} className='w-img' alt="" />
    <div className='mx-3 position-relative'>
    <h5 className="mb-1">{item.title}</h5>
    <p className="mb-1">{item.description}</p>
      
      <b>${item.price}</b>
      <button className='btn btn-danger rounded-pill mx-3' onClick={()=>Del(item.id)}><i class="bi bi-trash3-fill"></i></button>
      </div>  
    </div>
    
  </a>
    ))
  }
 
</div>   
      </div>
     
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductsModal