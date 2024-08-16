import React from 'react';
import chooseImg from "../../assets/choose.jpg";
import coffeMug from "../../assets/coffee-mug.svg";
import coffeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeBeans3 from "../../assets/coffee-beans-3.svg";
import './choose.css';

const Choose = () => {
  return (
    <section className="choose section">
        <div className="choose__grid container grid">
            <div className="choose__content">
                <h2 className="section__title title-left" data-title = 'Why Choose Us'>
                   Coffero Most Out Of Your Favorite & Tasty  Coffee House
                </h2>

                <p className="p choose__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non 
                    inventore voluptatibus nihil aspernatur ab. Deleniti quia ipsa nobis velit corrupti at praesentium, placeat explicabo voluptatem soluta animi, voluptates repellendus. Nisi?
                </p>
                <div className="choose__details grid">
                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeMug} alt="" className="choose__details-img" />
                        </div>

                        <div>
                            <h3 className=" choose__details-title"> Healty Coffe</h3>
                            <p className=" choose__details-description">
                            Café YOU is an Australian style cafe that serves simple, natural food –
                             including Vegan and Gluten Free options – accompanied
                              </p>
                        </div>
                    </div>

                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeBeans2} alt="" className="choose__details-img" />
                        </div>

                        <div>
                            <h3 className=" choose__details-title"> Healty Coffe</h3>
                            <p className=" choose__details-description">
                            Café YOU is an Australian style cafe that serves simple, natural food –
                             including Vegan and Gluten Free options – accompanied
                              </p>
                        </div>
                    </div>

                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeBeans3} alt="" className="choose__details-img" />
                        </div>

                        <div>
                            <h3 className=" choose__details-title">Awesome Aroma</h3>
                            <p className=" choose__details-description">
                            Café YOU is an Australian style cafe that serves simple, natural food –
                             including Vegan and Gluten Free options – accompanied
                             </p>
                        </div>
                    </div>

               
                </div>
            </div>
            <img src={chooseImg} alt="" className="choose__img" />
        </div>

    </section>
  )
}

export default Choose
