import React from 'react'

const Slide = ({ slide }) => {
  const { background, header } = slide
  return (
    <div
      className="slide"
      style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="slide-col slide-col-text">
        {/* <div className="text-ctn">
          <h1>50% off discount</h1>
        </div> */}
      </div>
      <div className="slide-col slide-col-img">
        <img src={header} alt="Slide-img" />
      </div>
    </div>
  )
}

export default Slide
