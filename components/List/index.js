import React, { Component } from 'react'
import styles from './styles'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch(
      'https://api.unsplash.com/photos/?client_id=77a52921a8e2c2d2b5b789c1dc29148144eceb99a29c40780a2b6b92c12ed7bc&per_page=3'
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        this.setState({
          data
        })
      })
  }

  render () {
    const { data } = this.state
    return (
      <section id='List'>
        <ul>
          {data.map(item => {
            return (
              <li key={item.id}>
                <img src={item.urls.regular} alt={item.id} />
              </li>
            )
          })}
        </ul>
        <style jsx>{styles}</style>
      </section>
    )
  }
}
export default List
