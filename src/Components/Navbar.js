import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const itemCount=useSelector((state)=>state.cart)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to={'/'}>Add To Cart</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/cart'}>Cart</Link>
          </li>
          
        </ul>
        <div className="d-flex px-5" role="search">
          <button  type="button" className="btn btn-transparent position-relative border-0"  data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className="bi bi-bag"></i>  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {itemCount.length}
  </span></button>
        </div>
      </div>
    </div>
  </nav>
    )
}

export default Navbar
