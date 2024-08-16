import React from 'react';
import { gallery } from '../../Data';
import { BsPlusLg } from "react-icons/bs";
import './gallery.css';

const Gallery = () => {
  return (
   <section className="gallery section" id='gallery'>
    <h2 className="section__title" data-title = 'Gallery'>
        Our Photo Gallery
    </h2>

    <div className="gallery__grid container grid">
        {gallery.map(({img, title} , index) =>{
            return(
                <div className="gallery__item" key={index}>
                    <img src={img} alt="" className="gallery__img" />
                    <a href='/' className="gallery__icon">
                    <BsPlusLg/></a>

                    <h3 className="gallery__title">{title}</h3>
                </div>
            );
        })}
    </div>
   </section>
  )
}

export default Gallery
