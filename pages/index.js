import React, { Component } from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import List from '../components/List'

class Home extends Component {
  render () {
    return (
      <Layout>
        <div>Welcome to Next.js!</div>
        <Slider />
        <List />
      </Layout>
    )
  }
}

export default Home
