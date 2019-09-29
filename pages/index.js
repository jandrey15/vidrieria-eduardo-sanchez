import React, { Component } from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import List from '../components/List'
import Products from '../components/Products'

class Home extends Component {
  render () {
    return (
      <Layout>
        <Slider />
        <List />
        <Products />
        <Products item={1} />
        <Products item={2} />
        <Products item={3} />
      </Layout>
    )
  }
}

export default Home
