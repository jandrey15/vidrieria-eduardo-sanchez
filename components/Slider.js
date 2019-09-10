import React, { Component } from 'react'
import Slider from 'react-slick'
// Doc: https://react-slick.neostack.com/docs/get-started
import './styles.css'
import './styles-theme.css'
// Site oficial -> https://react-slick.neostack.com/

export default class SliderItems extends Component {
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
        let images = []
        data.map(image => {
          // console.log(image.urls.regular);
          images.push(image.urls.small)
        })

        this.setState({
          images
        })
        // console.log(images)
      })
  }

  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }

    return (
      <div className='slider-items'>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {this.state.images.map((image, index) => {
            console.log(image)
            return (
              <div style={{ width: 320 }} key={index}>
                <img src={image} alt={`image-${index}`} />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
