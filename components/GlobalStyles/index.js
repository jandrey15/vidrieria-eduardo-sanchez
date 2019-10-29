import css from 'styled-jsx/css'

export default css.global`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  
  body {
    /* font-family: 'Oswald', system-ui, sans-serif; */
    font-family: 'Roboto', system-ui, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #1c1c1c;
    margin: 0;
  }
  .container {
    margin: 0 auto;
    max-width: 1000px;
    flex: 1;
    width: 100%;
  }
  #Layout {
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 100vh;
  }
  .text img,
  .text figure img,
  .text .instagram-media,
  .text iframe,
  .text figure {
    max-width: 900px;
    margin: 0;
    object-fit: contain;
  }

  
  #Header .menu li a:hover {
    text-decoration: underline;
  }
  
  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: #ef1424;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #ef1424, 0 0 5px #ef1424;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }
  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #ef1424;
    border-left-color: #ef1424;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

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
  /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
  button,
  hr,
  input {
    overflow: visible;
  }
  progress,
  sub,
  sup {
    vertical-align: baseline;
  }
  [type='checkbox'],
  [type='radio'],
  legend {
    box-sizing: border-box;
    padding: 0;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  select {
    text-transform: none;
  }
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    -webkit-appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: ButtonText dotted 1px;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  [hidden],
  template {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .container {
      width: 96%;
    }
  }
`
