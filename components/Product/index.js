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
      <div className='contact'>
        <i className='wp' />
        <span>Cotizar</span>
      </div>
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
        .contact {
          display: flex;
          align-items: center;
          background: #50b154;
          padding: 5px;
          border-radius: 2px;
          width: 130px;
          justify-content: space-evenly;
          cursor: pointer;
        }
        .wp {
          background: url('/static/wp.png') no-repeat;
          height: 32px;
          display: block;
          width: 32px;
        }
        span {
          text-transform: uppercase;
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

export default Product
