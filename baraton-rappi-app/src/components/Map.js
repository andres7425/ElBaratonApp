import React, { Component } from 'react';
import Iframe from 'react-iframe'
class Map extends Component {
    render() {
        return (
            <section className="mapa">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.2613747797802!2d-74.0565115421486!3d4.678808172423373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aece23027af%3A0x52fc656027473596!2sCl.+93+%2319-58%2C+Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1560894638290!5m2!1ses-419!2sco"
                    width="1600"
                    height="550"
                    frameborder="0"
                    allowfullscreen />
            </section>
        );
    }
}

export default Map;