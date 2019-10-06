import React, { useEffect } from 'react'
import Slider from 'react-slick'
import AOS from 'aos'
import './styles.css'
import './styles-theme.css'
import './aos.css'
import { colors } from '../GlobalStyles/colores'

const Product = ({ images, title, item }) => {
  useEffect(() => {
    AOS.init({
      once: false
    })
  }, []) // [] Solo se ejecuta una sola vez

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
    <div id={`product-${item}`} className='slider-items' data-aos='fade-up'>
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
      <a href={`https://api.whatsapp.com/send?phone=57 3115055761&text=Quiero cotizar los ${title}`} target='_blank'>
        <div className='contact'>
          <i className='wp' />
          <span>Cotizar</span>
        </div>
      </a>
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
          color: ${colors.blackGray};
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
        a {
          text-decoration: none;
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

export default Product
