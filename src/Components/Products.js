import React,{useState,useEffect} from 'react'
import { add } from '../Store/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
        const response= await fetch('https://api.escuelajs.co/api/v1/products');
        const data= await response.json();
        setProducts(data)
        console.log(data)
    }
    fetchData()
    },[]);
    const dispatch=useDispatch()
    const handleAdd=(product)=>{
dispatch(add(product))
    }
    
    return (
    <div>
        <div className="row container-fluid align-item-center justify-content-center">
     {
        products.map((product)=>(
                <div className="card m-3 col-lg-3 " height='30px'>
  <img src={product.images} className="card-img-top h-50" alt="..."/>
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
