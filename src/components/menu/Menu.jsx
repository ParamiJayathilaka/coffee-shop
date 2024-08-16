import React from 'react';
import { menu } from '../../Data';
import "./menu.css";

const Menu = () => {
  return (
   <section className="menu section" id="menu">
      <h2 className="section__title" data-title='Our Menu'>
            Let's Cheack Our Menu
            </h2>

             <div className="menu__grid container grid">
                {menu.map(({img, title, description, price }, index) => {
                    return(
                        <div className="menu__item grid" key={index}>
                            <div className="menu__img-wrapper">
                                <img src={img} alt="" className="menu__img" />
                            </div>

                            <div className="menu__data">
                                 <div>
                                    <h3 className="menu__title">{title}</h3>
                                    <p className="menu__description">{description}</p>
                                 </div>
                                 <span className="menu__price">${price}</span>

                            </div>
                        </div>

                    );
                  })}

             </div>

   </section>
  )
}

export default Menu
