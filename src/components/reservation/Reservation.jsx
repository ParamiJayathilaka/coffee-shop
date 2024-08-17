import React from 'react'

const Reservation = () => {
  return (
    <section className="reservation container" id='reservation'>
                <h2 className="section__title" data-title='Reservation'> Book A Table</h2>

<div className="reservation__from grid">
    <div className="form__input-div">
        <input type="text" placeholder='Your Name' className="form__input" />
    </div>

    <div className="form__input-div">
        <input type="email" placeholder='Your Email Address' className="form__input" />
    </div>

    <div className="form__input-div">
        <input type="text" placeholder='Your Phone' className="form__input" />
    </div>

    <div className="form__input-div">
        <input type="text" placeholder='Date Ex: DD/MM/YY' className="form__input" />
    </div>
</div>
    </section>
  )
}

export default Reservation
