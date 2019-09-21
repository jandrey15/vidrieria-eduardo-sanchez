import React, { Component } from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import List from '../components/List'
import Products1 from '../components/Products1'

class Home extends Component {
  render () {
    return (
      <Layout>
        <div>Welcome to Next.js!</div>
        <Slider />
        <List />
        <Products1 />
      </Layout>
    )
  }
}

export default Home
