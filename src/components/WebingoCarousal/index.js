import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

export default class WebingoCarousal extends Component {
  render() {
    const settings = {
      dots: false,
      speed: 800,
      autoplay: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        <div>
          <div className="carousal-item-img violet">
            <img
              src="https://webingo.in/images/thumb/website.png"
              className="carousal-image"
              alt="Domain"
            />
            <h1 className="domain-name">
              Website <br /> Development
            </h1>
          </div>
        </div>
        <div>
          <div className="carousal-item-img pink">
            <img
              src="https://webingo.in/images/thumb/app.png"
              className="carousal-image"
              alt="Domain"
            />
            <h1 className="domain-name">
              App <br /> Development
            </h1>
          </div>
        </div>
        <div>
          <div className="carousal-item-img blue">
            <img
              src="https://webingo.in/images/thumb/software.png"
              className="carousal-image"
              alt="Domain"
            />
            <h1 className="domain-name">
              Software <br /> Development
            </h1>
          </div>
        </div>
        <div>
          <div className="carousal-item-img yellow">
            <img
              src="https://webingo.in/images/thumb/dm.png"
              className="carousal-image"
              alt="Domain"
            />
            <h1 className="domain-name">
              Digital <br /> Marketing
            </h1>
          </div>
        </div>
        <div>
          <div className="carousal-item-img light-green">
            <img
              src="https://webingo.in/images/thumb/seo.png"
              className="carousal-image"
              alt="Domain"
            />
            <h1 className="domain-name">
              SEO <br /> Services
            </h1>
          </div>
        </div>
        <div>
          <div className="carousal-item-img">
            <img
              src="https://webingo.in/images/thumb/web.png"
              className="carousal-image"
              alt="Domain"
            />
            <h1 className="domain-name">
              Graphic <br /> Designing
            </h1>
          </div>
        </div>
      </Slider>
    )
  }
}
