import React, { Component } from 'react';

class Ubication extends Component {
    render() {
        return (
            <section className="ubicacion" id="ubicacion">
                <div className="contenedor">
                    <h3 className="titulo">Ubicacion</h3>

                    <div className="direccion">
                        <p className="calle">2915 Primrose Lane <br /> Anehim 1827</p>
                        <p className="telefono">(626)3298</p>
                        <p className="correo">correo [arroba] correo.com</p>
                        <br />
                    </div>
                    <div className="horarios">
                        <h4>Horarios</h4>
                        <p className="entre-semana">Lunes a Viernes <br /> 8:00AM - 9:00PM </p>
                        <p className="fin-semana">Sabado y domingo <br /> 10:00AM - 8:00PM</p>
                    </div>
                </div>
            </section>

            
                );
    }
}

export default Ubication;