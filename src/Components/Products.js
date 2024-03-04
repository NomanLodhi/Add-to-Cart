import React,{useState,useEffect} from 'react'
import { add } from '../Store/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import {fetchProducts} from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';
 const Products = () => {
  const {data:products,status} =useSelector((state)=> state.product)
    // const [products,setProducts]=useState([]);
    useEffect(()=>{
      dispatch(fetchProducts()); 
    //   const fetchData= async ()=>{
    //     // const response= await fetch('https://fakestoreapi.com/products');
    //     // const data= await response.json();
    //     // setProducts(data)
    //     // console.log(data)
    // }
    // fetchData()
    },[]);
    const dispatch=useDispatch()
    const handleAdd=(product)=>{
dispatch(add(product))
    }
    if(status === STATUSES.LOADING){
      return <div style={{height:'100vh',width:'100vw'}} className='d-flex align-items-center justify-content-center'>
         <div className="spinner-border m-5" role="status" style={{width:'200px',height:'200px'}}>
      <span className="visually-hidden">Loading...</span>
    </div>
      </div>
    }
    if(status === STATUSES.ERROR){
      return <div style={{height:'100vh',width:'100vw'}} className='d-flex align-items-center justify-content-center'>
<span>
<i className="bi bi-exclamation-triangle text-danger display-1"></i>
<p className='text-danger py-3'>Error 404</p>
</span>
      </div>
    }
    return (
    <div>
        <div className="row container-fluid align-item-center justify-content-center">
     {
        products.map((product)=>(
                <div className="card m-3 col-lg-3 " height='30px'>
  <img src={product.image} className="card-img-top h-50" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
 <div style={{display:'flex',justifyContent:'space-evenly'}} className='py-3'> 
 <span className="badge text-bg-light py-2 fs-4">${product.price}</span>
    <button onClick={()=>handleAdd(product)} className="btn btn-primary">Add to Cart</button>
 
 </div>
  </div>
</div>
        ))
    } 
    </div>
    </div>
  )
}

export default Products
