import React, { useEffect } from 'react';

export function Aimagenescarrusel({ imagenes }) {
    useEffect(() => {
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

