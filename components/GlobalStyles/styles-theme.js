import css from 'styled-jsx/css'

export default css.global`
  
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 105%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: 45%;
    z-index: 10;
  }
  .slick-prev:before {
    content: "<";
    color: gray;
  }

  .slick-next {
    right: 45%;
    z-index: 10;
  }

  .slick-next:before {
    content: ">";
    color: gray;
  }
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: 50px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    display: inline-block;
    line-height: 1;
    margin: 0 8px;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    display: block;
    position: relative;
    width: 16px;
    height: 16px;  
    border: none;
    border-radius: 50%;
    background: hsla(0,0%,100%,.7);
    font-size: 0;
    transition: all .3s ease;
    color: inherit;
    outline: none;
    cursor: pointer;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    background: #ffffff;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: .5;
    transform: scale(1.9);
  }
  .slick-dots li button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: all .3s ease;
  }

  .slick-dots li.slick-active button {
    background: #ffffff;
  }

  .slick-dots li.slick-active button:before  {
    opacity: .5;
    transform: scale(1.9);
  }

  @media screen and (max-width: 768px) {
    
    .slick-prev {
      left: 50%;
    }
    .slick-next {
      right: 30%;
    }
  }
`
