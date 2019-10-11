import css from 'styled-jsx/css'
import { colors } from '../GlobalStyles/colores'

export default css`
  #Header {
    background: ${colors.blueStrong};
    height: 50px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .container h3 {
    margin: 0;
  }

  h3 a {
    text-decoration: none;
    color: #ffffff;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .menu ul {
    display: grid;
    grid-template-columns: repeat(5, 110px);
    justify-items: center;
    list-style: none;
    padding: 0;
  }
  .menu li {
    cursor: pointer;
  }
`
