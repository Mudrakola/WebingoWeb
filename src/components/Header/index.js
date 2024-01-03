import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://webingo.in/images/logo-client/A2-1.png"
      className="webingo-logo"
      alt="webingo-logo"
    />
    <ul className="header-list-container">
      <li className="header-list-item">IT SOLUTIONS+</li>
      <li className="header-list-item">STARTUP BOX+</li>
      <li className="header-list-item">COMPANY+</li>
      <li className="header-list-item">PURCHASE+</li>
      <li className="header-list-item">PORTFOLIO</li>
      <li className="header-list-item">CAREER+</li>
      <li className="header-list-item">REACH US+</li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9169/9169633.png"
          className="call-img"
          alt="call-img"
        />
      </li>
    </ul>
  </div>
)

export default Header
