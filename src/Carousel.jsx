import React from 'react'
import './Carousel.css'
import { useState } from 'react'
import img1 from './assets/image-product-1.jpg'
import img2 from './assets/image-product-2.jpg'
import img3 from './assets/image-product-3.jpg'
import img4 from './assets/image-product-4.jpg'



const Carousel = () => {

  const imagenes = [img1, img2, img3, img4];

  const [imagenSeleccionada, setImagenSeleccionada] = useState (img1)
  
  return (
    <div className='imagenes-container'>
      <div className='imagen-principal'>
        <img src={imagenSeleccionada} />
      </div>
      
      <div className='imagenes-secundarias'>
        <div className='d-flex justify-content-between'>
          {imagenes.map((imagen) => (
            <img onClick={() => setImagenSeleccionada(imagen)} src={imagen} alt={imagen} />
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Carousel
