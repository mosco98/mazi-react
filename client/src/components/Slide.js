import React from 'react'
import { Link } from 'react-router-dom'

const Slide = ({ slide }) => {
  const { background, header, text } = slide
  return (
    <div
      className="slide"
      style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="slide-col slide-col-text">
        <div className="text-ctn">
          <h1>{text.heading}</h1>
          <span>{text.subHeading}</span>
          <Link to={text.link}>
            <button className="btn btn-block btn-lg btn-dark rounded-0 text-uppercase">{text.buttonText}</button>
          </Link>
        </div>
      </div>
      <div className="slide-col slide-col-img">
        <img src={header} alt="Slide-img" />
      </div>
    </div>
  )
}

export default Slide
