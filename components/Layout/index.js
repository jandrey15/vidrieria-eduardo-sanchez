import React, { Component } from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import * as gtag from '../../helpers/gtag'
import Header from '../Header'
import Footer from '../Footer'
import globalStyles from '../GlobalStyles'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = url => {
  NProgress.done()
  const NODE_ENV = process.env.NODE_ENV
  if (NODE_ENV !== 'development') {
    gtag.trackPageView(url)
  }
}

Router.onRouteChangeError = () => NProgress.done()

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
        <Footer />

        <style jsx global>{globalStyles}</style>
      </div>
    )
  }
}

export default Layout
