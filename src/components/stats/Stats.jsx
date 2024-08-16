import React from 'react';
import coffeeShop from '../../assets/coffee-shop.svg';
import experience from '../../assets/experience.svg';
import cofeeCup from '../../assets/coffee-cup.svg';
import chef from '../../assets/chef.svg';
import './stats.css';


const Stats = () => {
  return (
    <section className="stats section">
        <div className="stats__grid container grid">


            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={coffeeShop} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">1500</p>
                    <h3 className="stats__title">+ Total Product</h3>
                </div>
            </div>


            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={cofeeCup} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">250</p>
                    <h3 className="stats__title">+ Happy Customers</h3>
                </div>
            </div>


            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={chef} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">120</p>
                    <h3 className="stats__title">+ Profssional Chefs</h3>
                </div>
            </div>


            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={experience} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">50</p>
                    <h3 className="stats__title"> + Years Of Experiences</h3>
                </div>
            </div>
        </div>
    </section>

    
  )
}

export default Stats
