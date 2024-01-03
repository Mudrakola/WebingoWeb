import WebingoCarousal from '../WebingoCarousal'
import CompanyLogoCarousal from '../CompanyLogoCarousal'

import './index.css'

const WebingoDetails = () => (
  <>
    <div className="webingo-details-container">
      <div>
        <h1 className="webingo-details-heading">
          WEBSITE GRAPHICS MARKETING APPLICATION
        </h1>
        <p className="webingo-details-paragraph">
          Digital IT Solutions for transforming and innovating Businesses.
        </p>
        <button type="button" className="view-portfolio-btn">
          View Portfolio
        </button>
      </div>
      <div className="webingo-carousal-container">
        <WebingoCarousal />
      </div>
    </div>
    <div className="company-logo-container">
      <CompanyLogoCarousal />
    </div>
  </>
)

export default WebingoDetails
