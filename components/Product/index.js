import React from 'react'
import Slider from 'react-slick'
import './styles.css'
import './styles-theme.css'
import { red } from '../GlobalStyles/colores'

const Product = ({ images, title }) => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    swipeToSlide: true
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   )
    // }
  }

  return (
    <div className='slider-items'>
      <h2>{title}</h2>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt={`image-${index}`} />
            </div>
          )
        })}
      </Slider>
      <style jsx>{`
        .slider-items {
          margin: 30px auto 50px;
          max-width: 1000px;
          width: 100%;
        }
        h2 {
          text-align: center;
          font-size: 1.6rem;
          text-transform: uppercase;
          color: ${red};
        }
      `}</style>
    </div>
  )
}

export default Product
