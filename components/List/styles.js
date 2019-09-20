import css from 'styled-jsx/css'

export default css`
  #List {
    position: relative;
    top: -3px;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  img {
    object-fit: cover;
    height: 270px;
    width: 100%;
  }
`
