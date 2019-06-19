import React, { Component } from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';

class Galery extends Component {
    render() {
        return (
            <section className="galery">
                <div className="photo">
                    <img src={img1} alt="" />
                </div>
                <div className="photo">
                    <img src={img2} alt="" />
                </div>
                <div className="photo">
                    <img src={img3} alt="" />
                </div>
                <div className="photo">
                    <img src={img4} alt="" />
                </div>
                <div className="photo">
                    <img src={img5} alt="" />
                </div>
                <div className="photo">
                    <img src={img6} alt="" />
                </div>
                <div className="photo">
                    <img src={img7} alt="" />
                </div>
                <div className="photo">
                    <img src={img8} alt="" />
                </div>
            </section>

        );
    }
}

export default Galery;