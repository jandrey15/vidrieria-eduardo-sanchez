import React, { Component } from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'

class Home extends Component {
  render () {
    return (
      <Layout>
        <div>Welcome to Next.js!</div>
        <Slider />
      </Layout>
    )
  }
}

export default Home
