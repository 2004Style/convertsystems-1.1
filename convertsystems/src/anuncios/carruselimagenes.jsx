/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export function Aimagenescarrusel({ imagenes }) {
    useEffect(() => {
        // eslint-disable-next-line no-unused-vars, no-undef
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1000,
        });
    }, []);

    return (
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                {imagenes && imagenes.map((imagen, index) => ( // Verifica que imagenes no sea undefined
                    <img className="swiper-slide" key={index} src={imagen} alt={`Imagen ${index}`} />
                ))}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}

