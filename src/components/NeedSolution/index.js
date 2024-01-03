import {TypeAnimation} from 'react-type-animation'

import './index.css'

const NeedSolution = () => (
  <div className="type-animation-web">
    <div>
      <span className="need-content">Need </span>
      <TypeAnimation
        className="content-type-anime"
        sequence={[`solution to all your business complications.`, 800, '']}
        speed={50}
        style={{whiteSpace: 'pre-line', fontSize: '2.5em'}}
        repeat={Infinity}
      />
    </div>
    <button type="button" className="get-in-touch">
      Get In Touch
    </button>
  </div>
)

export default NeedSolution
