import styles from './styles'
import Link  from 'next/link'
import { Link as Linkscroll } from 'react-scroll'

const Header = () => {
  return (
    <header id='Header'>
      <div className='container'>
        <h3><Link href='/'><a>Eduardo Sánchez</a></Link></h3>

        <div className='menu'>
          <ul>
            <li>
              <Linkscroll
                activeClass='active'
                to='product-0'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products
              </Linkscroll>
            </li>
            <li>
              <Linkscroll
                activeClass='active'
                to='product-1'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products 1
              </Linkscroll>
            </li>
            <li>
              <Linkscroll
                activeClass='active'
                to='product-2'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products 2
              </Linkscroll>
            </li>
            <li>
              <Linkscroll
                activeClass='active'
                to='product-3'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Products 3
              </Linkscroll>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </header>
  )
}

export default Header
