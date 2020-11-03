import React, { Component } from 'react';
import iconofb from "../images/icon-fb.png";


class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Mapa del sitio</h3>
                                <ul>
                                    <li><a href="#">Departamento de control escolar</a></li>
                                    <li><a href="#">Departamento de psicología</a></li>
                                    <li><a href="#">Departamento de recursos financieros</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Alumnos</h3>
                                <ul>
                                    <li><a href="#">Muro de notificaciones</a></li>
                                    <li><a href="#">Buzón</a></li>
                                    <li><a href="#">Mi perfil</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>Colegio de Bachilleres del Estado de Jalisco, Plantel 7.</h3>
                                <p>Calle J. Ma. Pino Suárez #311, C.P. 48291 Las Juntas. | Puerto Valarta, Jalisco, México | Tel 322 290 10 66
                                | Colegio de Bachilleres del Estado de Jalisco, Plantel 7.</p>
                            </div>
                            <div className="col item social">
                                <a href="https://www.facebook.com/cobaej7">
                                    <img src={iconofb}

                                        alt="fb-logo"

                                        width="80"
                                        height="60"
                                    ></img></a></div>
                        </div>
                        <p class="copyright">Desarrollado por Carlos Garcia y Valery Fierro © 2020</p>
                    </div>
                </footer>
            </div >

        );
    }
}
export default Footer;