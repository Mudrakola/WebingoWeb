import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

export default class CompanyLogoCarousal extends Component {
  render() {
    const settings = {
      dots: false,
      speed: 800,
      autoplay: true,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        <div>
          <img
            src="https://webingo.in/images/surya.png"
            className="companies-logos"
            alt="company logo"
          />
        </div>
        <div>
          <img
            src="https://webingo.in/images/HALDIRAMS-LOGO.png"
            className="companies-logos"
            alt="company logo"
          />
        </div>
        <div>
          <img
            src="https://webingo.in/images/flipkart.png"
            className="companies-logos"
            alt="company logo"
          />
        </div>
        <div>
          <img
            src="https://webingo.in/images/asme.png"
            className="companies-logos"
            alt="company logo"
          />
        </div>
        <div>
          <img
            src="https://webingo.in/images/tig.png"
            className="companies-logos"
            alt="company logo"
          />
        </div>
        <div>
          <img
            src="https://webingo.in/images/AIESEC.png"
            className="companies-logos"
            alt="company logo"
          />
        </div>
      </Slider>
    )
  }
}
