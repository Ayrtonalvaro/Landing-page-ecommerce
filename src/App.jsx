import Header from './Header'
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import plus from './assets/icon-plus.svg'
import minus from './assets/icon-minus.svg'
import Carousel from './Carousel'
import iconCart from './assets/icon-cart.svg'


function App() {

  const [amount, setAmount] = useState(0)

  const[total, setTotal] = useState(0)

  function calcularTotal(amount){
    setTotal(amount*125)
  }


  return (
    <div className='container '>
      <Header total={total}/>
      <div className='row'>
        <div className='col-6'>
          <Carousel  />
        </div>
        <div className='col-6'>
          <div className='text-container'>
            <div><h6>sneaker company</h6></div>
            <div><h1>fall limited edition sneakers</h1></div>
            <div><p id="main-text">These low-profile sneakers are  youre perefect casual wear
              companion. Featuring a durable rubber outer sole. they'll
              withstand everything the weather can offer.</p>
            </div>
            <div className='d-flex gap-3 mt-4'><p className='fs-3 fw-bold'>$125.0</p> <p >50%</p></div>
            <p className='text-muted text-decoration-line-through' >$250.00</p>
            <div className='d-flex gap-5'>
              <div className='d-flex align-items-center'>
                <button className='btn btn-light' onClick={() =>  amount === 0 ? 0 : setAmount(amount - 1)}><img src={minus} /></button><p id="cantidad">{amount}</p><button className='btn btn-light' onClick={() => setAmount(amount + 1)}  ><img src={plus} /></button>
              </div>
              <div className='button-cart-container'><button className='button-cart' onClick={calcularTotal} ><img src={iconCart} />Add to cart</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
