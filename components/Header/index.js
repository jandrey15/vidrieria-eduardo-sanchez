import styles from './styles'

const Header = () => {
  return (
    <header id='Header'>
      <div className='container'>
        <h3>Eduardo Sánchez</h3>

        <div className='menu'>
          <ul>
            <li><a href='#' rel='noopener noreferrer'>Products</a></li>
            <li><a href='#' rel='noopener noreferrer'>Products 1</a></li>
            <li><a href='#' rel='noopener noreferrer'>Products 2</a></li>
            <li><a href='#' rel='noopener noreferrer'>Products 3</a></li>
            <li><a href='#' rel='noopener noreferrer'>Products 4</a></li>
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </header>
  )
}

export default Header
