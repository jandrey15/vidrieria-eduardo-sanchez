import css from 'styled-jsx/css'
import { colors } from '../GlobalStyles/colores'

export default css`
  #Footer {
    background: ${colors.blueStrong};
    height: 150px;
    display: flex;
    align-items: center;
    margin-top: 50px;
  }
  .container h3 {
    margin: 0;
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
