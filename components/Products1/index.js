import React, { Component } from 'react'
import Slider from 'react-slick'
import './styles.css'
import './styles-theme.css'

export default class MultipleItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount () {
    fetch(
      'https://api.unsplash.com/photos/?client_id=77a52921a8e2c2d2b5b789c1dc29148144eceb99a29c40780a2b6b92c12ed7bc&per_page=9'
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        // image.urls.regular -> small, full
        let images = []
        data.map(image => {
          // console.log(image.urls.full);
          images.push(image.urls.regular)
        })

        this.setState({
          images
        })
        // console.log(images)
      })
  }

  render () {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 2,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        )
      }
    }

    return (
      <div className='slider-items'>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {this.state.images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image} alt={`image-${index}`} />
              </div>
            )
          })}
        </Slider>
        <style jsx>{`
          .slider-items {
            margin: 0 auto;
            max-width: 1000px;
            width: 100%;
          }  
        `}</style>
      </div>
    )
  }
}
