import css from 'styled-jsx/css'

export default css.global`
  .variable-width .slick-slide p {
    background: blue;
    height: 100px;
    color: #fff;
    margin: 5px;
    line-height: 100px;
    text-align: center;
  }
  .center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1.08);
  }
  .center h3 {
    opacity: 0.8;
    transition: all 300ms ease;
  }
  .content {
    padding: 20px;
    margin: auto;
    width: 90%;
  }
  .slick-slide .image {
    padding: 10px;
  }
  .slick-slide img {
    /* border: 5px solid #fff; */
    display: block;
    margin: auto;
  }
  .slick-slide img.slick-loading {
    border: 0;
  }
  .slick-slider {
    margin: 0 auto;
  }
  .slick-dots {
    margin-left: 0;
  }
  .slick-thumb {
    bottom: -45px;
  }
  .slick-thumb li {
    width: 60px;
    height: 45px;
  }
  .slick-thumb li img {
    filter: grayscale(100%);
  }
  .slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }
    /* .center {
      margin-left: -40px;
      margin-right: -40px;
    } */
    .center .slick-center h3 {
      color: #e67e22;
      opacity: 1;
      transform: scale(1);
    }
    .center h3 {
      opacity: 0.8;
      transform: scale(0.95);
      transition: all 300ms ease;
    }
  }
  .slick-vertical .slick-slide {
    height: 180px;
  }
  .slick-arrow {
    background-color: #b1b1b1;
    /* color: black; */
  }
  .slick-arrow:hover {
    background-color: #b1b1b1;
  }
  /* .slick-prev {
    z-index: 100;
    left: 20px !important;
  }
  .slick-next {
    z-index: 100;
    right: 20px !important;
  } */

  /* Slider */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
    width: 100%;
    height: 482px;
    object-fit: cover;
    width: 100%;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

`
