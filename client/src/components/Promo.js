import React from 'react'

const Promo = () => {
  return (
    <section className="mt-5 w-100 bg-primary p-3 promo-section mb-5">
      <div className="slide-col slide-col-text">
        <div className="text-ctn">
          <h1>50% off discount</h1>
        </div>
      </div>
      <div className="slide-col slide-col-img">{/* <img src={slideImg} alt="Slide-img" /> */}</div>
    </section>
  )
}

export default Promo
