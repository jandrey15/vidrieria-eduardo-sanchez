import styles from './styles'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header id='Header'>
      <div className='container'>
        <h3>Eduardo Sánchez</h3>

        <div className='menu'>
          <ul>
            <li>
              <Link
                activeClass='active'
                to='product-0'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='product-1'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products 1
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='product-2'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products 2
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='product-3'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </header>
  )
}

export default Header
