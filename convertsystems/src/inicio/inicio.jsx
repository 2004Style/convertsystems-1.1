// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import '../inicio.css';

const logotipo = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/logosinfondo.png?alt=media&token=e127b3e2-df97-4417-8197-19256590a9c6";

export function Inicio() {
    

    return (
        <>
            <div className="bg">
                <canvas id="canvas"></canvas>
            </div>
            <div className="container">
                <img className="containerlogo" src={logotipo} alt="logotipo" />
                <div id="pyramid-small">
                    <div className="pyram-small one s1"></div>
                    <div className="pyram-small two s2"></div>
                    <div className="pyram-small three s3"></div>
                    <div className="pyram-small four s4"></div>
                </div>
                <div id="pyramid-small-shadow">
                    <div className="pyram-small shadow"></div>
                </div>
                <div id="piramideinvertida">
                    <div className="piramide base"></div>
                    <div className="piramide one s1"></div>
                    <div className="piramide two s2"></div>
                    <div className="piramide three s3"></div>
                    <div className="piramide four s4"></div>
                </div>
                <div className="circulo">
                    <span className="dot big one"></span>
                    <span className="dot small two"></span>
                    <span className="dot small three"></span>
                    <span className="dot big four"></span>
                    <span className="dot small five"></span>
                    <span className="dot small six"></span>
                    <span className="dot big seven"></span>
                    <span className="dot small eight"></span>
                    <span className="dot small nine"></span>
                    <span className="dot big ten"></span>
                    <span className="dot small eleven"></span>
                    <span className="dot small twelve"></span>
                </div>
            </div>
        </>
    );
}
