import React, { useEffect } from 'react';
import '../inicio.css';

const logotipo = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/logosinfondo.png?alt=media&token=e127b3e2-df97-4417-8197-19256590a9c6";

export function Inicio() {
    window.requestAnimFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    function init(elemid) {
        const canvas = document.getElementById(elemid);
        const c = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        c.fillStyle = "rgba(30,30,30,1)";
        c.fillRect(0, 0, canvas.width, canvas.height);
        return { c, canvas };
    }

    function dist(p1x, p1y, p2x, p2y) {
        return Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
    }

    class Segment {
        constructor(parent, l, a, first) {
            this.first = first;
            this.pos = first ? { x: parent.x, y: parent.y } : { x: parent.nextPos.x, y: parent.nextPos.y };
            this.l = l;
            this.ang = a;
            this.nextPos = {
                x: this.pos.x + this.l * Math.cos(this.ang),
                y: this.pos.y + this.l * Math.sin(this.ang),
            };
        }

        update(t) {
            this.ang = Math.atan2(t.y - this.pos.y, t.x - this.pos.x);
            this.pos.x = t.x + this.l * Math.cos(this.ang - Math.PI);
            this.pos.y = t.y + this.l * Math.sin(this.ang - Math.PI);
            this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
            this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
        }

        fallback(t) {
            this.pos.x = t.x;
            this.pos.y = t.y;
            this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
            this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
        }

        show(c) {
            c.lineTo(this.nextPos.x, this.nextPos.y);
        }
    }

    class Tentacle {
        constructor(x, y, l, n, a) {
            this.x = x;
            this.y = y;
            this.l = l;
            this.n = n;
            this.t = {};
            this.rand = Math.random();
            this.segments = [new Segment(this, this.l / this.n, 0, true)];
            for (let i = 1; i < this.n; i++) {
                this.segments.push(new Segment(this.segments[i - 1], this.l / this.n, 0, false));
            }
        }

        move(last_target, target) {
            this.angle = Math.atan2(target.y - this.y, target.x - this.x);
            this.dt = dist(last_target.x, last_target.y, target.x, target.y) + 5;
            this.t = {
                x: target.x - 0.8 * this.dt * Math.cos(this.angle),
                y: target.y - 0.8 * this.dt * Math.sin(this.angle),
            };
            this.segments[this.n - 1].update(this.t);
            for (let i = this.n - 2; i >= 0; i--) {
                this.segments[i].update(this.segments[i + 1].pos);
            }
            if (dist(this.x, this.y, target.x, target.y) <= this.l + dist(last_target.x, last_target.y, target.x, target.y)) {
                this.segments[0].fallback({ x: this.x, y: this.y });
                for (let i = 1; i < this.n; i++) {
                    this.segments[i].fallback(this.segments[i - 1].nextPos);
                }
            }
        }

        show(c, target) {
            if (dist(this.x, this.y, target.x, target.y) <= this.l) {
                c.globalCompositeOperation = "lighter";
                c.beginPath();
                c.lineTo(this.x, this.y);
                for (let i = 0; i < this.n; i++) {
                    this.segments[i].show(c);
                }
                c.strokeStyle = `hsl(${this.rand * 60 + 180}, 100%, ${this.rand * 60 + 25}%)`;
                c.lineWidth = this.rand * 2;
                c.lineCap = "round";
                c.lineJoin = "round";
                c.stroke();
                c.globalCompositeOperation = "source-over";
            }
        }

        show2(c, target) {
            c.beginPath();
            if (dist(this.x, this.y, target.x, target.y) <= this.l) {
                c.arc(this.x, this.y, 2 * this.rand + 1, 0, 2 * Math.PI);
                c.fillStyle = "rgb(7, 223, 0)";
            } else {
                c.arc(this.x, this.y, this.rand * 2, 0, 2 * Math.PI);
                c.fillStyle = "rgb(0, 139, 139)";
            }
            c.fill();
        }
    }

    useEffect(() => {
        let { c, canvas } = init("canvas");
        const w = canvas.width;
        const h = canvas.height;
        const maxl = 300, minl = 50, n = 30, numt = 500;
        const tent = [];
        let mouse = { x: false, y: false };
        let last_mouse = {};
        let target = { x: 0, y: 0 };
        let last_target = { x: 0, y: 0 };
        let t = 0, q = 10;

        for (let i = 0; i < numt; i++) {
            tent.push(new Tentacle(Math.random() * w, Math.random() * h, Math.random() * (maxl - minl) + minl, n, Math.random() * 2 * Math.PI));
        }

        function draw() {
            if (mouse.x) {
                target.errx = mouse.x - target.x;
                target.erry = mouse.y - target.y;
            } else {
                target.errx = w / 2 + ((h / 2 - q) * Math.sqrt(2) * Math.cos(t)) / (Math.pow(Math.sin(t), 2) + 1) - target.x;
                target.erry = h / 2 + ((h / 2 - q) * Math.sqrt(2) * Math.cos(t) * Math.sin(t)) / (Math.pow(Math.sin(t), 2) + 1) - target.y;
            }

            target.x += target.errx / 10;
            target.y += target.erry / 10;
            t += 0.01;

            c.beginPath();
            c.arc(target.x, target.y, dist(last_target.x, last_target.y, target.x, target.y) + 5, 0, 2 * Math.PI);
            c.fillStyle = "hsl(210, 100%, 80%)";
            c.fill();

            for (let i = 0; i < numt; i++) {
                tent[i].move(last_target, target);
                tent[i].show2(c, target);
            }
            for (let i = 0; i < numt; i++) {
                tent[i].show(c, target);
            }
            last_target.x = target.x;
            last_target.y = target.y;
        }

        canvas.addEventListener("mousemove", (e) => {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;
            mouse.x = e.pageX - canvas.offsetLeft;
            mouse.y = e.pageY - canvas.offsetTop;
        });

        canvas.addEventListener("mouseleave", () => {
            mouse.x = false;
            mouse.y = false;
        });

        function loop() {
            window.requestAnimFrame(loop);
            c.clearRect(0, 0, w, h);
            draw();
        }

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            loop();
        });

        loop();

        return () => {
            window.removeEventListener("resize", () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                loop();
            });
        };
    }, []);

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
