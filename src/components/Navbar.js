import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  const handleColor=(color)=>{
    props.toggleMode(color)
  }
  return (
    <div className="blank">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
              {/* <div class="form-check form-switch">
                <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode} mode</label>
            </div> */}
              <div class="form-check form-check-inline">
                <input class="form-check-input" onClick={() => handleColor("dark")} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">Dark Mode</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" onClick={() => handleColor("light")} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Light Mode</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" onClick={() => handleColor("success")} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                <label class="form-check-label" for="inlineRadio3">Green Mode</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" onClick={() => handleColor("warning")} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                <label class="form-check-label" for="inlineRadio3">Yellow Mode</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" onClick={() => handleColor("danger")} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                <label class="form-check-label" for="inlineRadio3">Red Mode</label>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

Navbar.propTypes= {title : PropTypes.string}

Navbar.defaultProps = {title : "Set title here"}