import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../Header'
import globalStyles from '../GlobalStyles'

class Layout extends Component {
  render () {
    let { children } = this.props

    return (
      <div id='Layout'>
        <Head>
          <title>Eduardo Sánchez</title>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          />
          <meta key='description' name='description' content='Vidriería y Aluminio' />

        </Head>

        <Header />
        {children}

        <style jsx global>{globalStyles}</style>
      </div>
    )
  }
}

export default Layout
