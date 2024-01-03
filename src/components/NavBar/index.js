import './index.css'

const NavBar = () => (
  <nav className="nav-container">
    <div className="google-logo-rating-container">
      <img
        src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/272/Google_2015_logo-512.png"
        alt="google-logo"
        className="google-img"
      />
      <img
        src="https://www.pngmart.com/files/7/Rating-Star-PNG-Clipart.png"
        className="star-img"
        alt="star-img"
      />
      <p className="rating-paragraph">Excellent 4.8 out of 5</p>
    </div>
    <div className="request-call-container">
      <p className="rating-paragraph">
        Talk to our Executive (+91) 8001-81-1234 or{' '}
      </p>
      <div className="call-back-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219966.png"
          className="profile-img"
          alt="profile-img"
        />
        <p className="request-call-para">Request a Call Back</p>
      </div>
    </div>
  </nav>
)

export default NavBar
