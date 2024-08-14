import React from 'react';
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="about__grid container grid">
            <div className="about__img-wrapper">
                <img src={aboutImg} alt="" className="about__img" />
            </div>

            <div className="about__content">
                <h2 className="section__title" 
                data-title='About Us'>
                    Fresh Quality And Organic Tasty Coffe House For You
                </h2>

                <p className="about__description">
                Café YOU is an Australian style cafe that 
                serves simple, natural food – including Vegan
                 and Gluten Free options – accompanied by authentic 
                a strong coffee culture and a robust food culture under one roof
                   in a welcoming, cozy and comfortable neighborhood café.
                </p>

                <div className="about__details grid">

                    <p className="about__details-description">
                        <FiCheck/>
                        a strong coffee culture and a robust 
                    </p>

                    <p className="about__details-description">
                        <FiCheck/>
                       ssssssssssssssssssssssss
                    </p>

                    <p className="about__details-description">
                        <FiCheck/>
                       fghjkkhgjfhdgsfasdsdfghjkhgfds
                    </p>
                </div>

                <a href="#team" className="btn">Our Experts</a>
            </div>
        </div>
    </section>
  )
}

export default About
