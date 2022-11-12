import React from 'react'
import logo from './assets/logo.svg'
import avatar from './assets/image-avatar.png'
import iconCart from './assets/icon-cart.svg'
import img1 from './assets/image-product-1.jpg'


const Navbar = () => {


  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light p-4'>
        <div className='container'>
          <a className='navbar-brand  d-flex align-item-center' href='#'><img src={logo} alt="logo" /></a>
          <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav '>
              <li className="nav-item">
                <a className='nav-link active text-muted' href='#'>Collections</a>
              </li>
              <li className="nav-item">
                <a className='nav-link active text-muted' href='#'>Men</a>
              </li>
              <li className="nav-item">
                <a className='nav-link active text-muted' href='#'>Women</a>
              </li>
              <li className="nav-item">
                <a className='nav-link active text-muted' href='#'>About</a>
              </li>
              <li className="nav-item">
                <a className='nav-link active text-muted ' href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='d-flex aling-item-center gap-3' >
            <button className='btn btn-ligth btn-sm' data-bs-toggle="modal" data-bs-target="#myModal"><img src={iconCart} alt="iconCart" /></button>
            <img className='img-fluid' style={{ width: 40 }} src={avatar} alt='avatar' />
          </div>
        </div>
      </nav>

      <div className='modal' id="myModal">
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-tittle'>Carrito de compras</h5>
              <button className='btn btn-close' data-bs-dismiss="modal"></button>
            </div>
            <div className='modal-body d-flex align-items-center gap-4 '>
              <img src={img1} style={{ width: "15%" }} />
              <p className='fs-1'>Total: </p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Navbar
