import React, { Component } from 'react'
import Product from '../Product'

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
    const { images } = this.state
    const { item } = this.props

    if (item === 1) return <Product images={images} title='List products 1' />
    if (item === 2) return <Product images={images} title='List products 2' />
    if (item === 3) return <Product images={images} title='List products 2' />

    return <Product images={images} title='List products' />
  }
}
