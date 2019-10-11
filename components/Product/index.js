import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import AOS from 'aos'
import './styles.css'
import './styles-theme.css'
import './aos.css'
import { colors } from '../GlobalStyles/colores'

const Product = ({ images, title, item }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  useEffect(() => {
    AOS.init()
  }, []) // [] Solo se ejecuta una sola vez

  // Reglas del los Hooks -> https://es.reactjs.org/docs/hooks-rules.html

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   )
    // }
  }

  return (
    <section ref={element} id={`product-${item}`} className='slider-items'>
      {
        show && (
          <article data-aos='fade-up'>
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
          </article>
        )
      }
      <style jsx>{`
        .slider-items {
          margin: 30px auto 50px;
          max-width: 1000px;
          min-height: 600px;
          width: 100%;
        }
        h2 {
          text-align: center;
          font-size: 1.6rem;
          text-transform: uppercase;
          color: ${colors.blackGray};
          margin-bottom: 20px;
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
          display: block;
          width: 140px;
        }

        @media screen and (max-width: 768px) {
          a { margin-left: 5px; }
        }
      `}</style>
    </section>
  )
}

export default Product
