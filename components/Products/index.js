import React, { Component } from 'react'
import Product from '../Product'

export default class Products extends Component {
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
    const { images } = this.state
    const { products } = this.props

    return <section id='Products'>
      {
        products.map(item => {
          return <Product key={item} images={images} title={`List products ${item}`} item={item} />
        })
      }
    </section>
  }
}
