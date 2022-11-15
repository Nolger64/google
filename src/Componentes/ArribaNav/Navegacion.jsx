import * as React from 'react';
import Button from '@mui/material/Button';
import style from './Navegacion.module.css';
import imgMenu from './menu.png'

function Navegacion(){
    return(
        <>
        
        <div className={style.barraArriba}>
            <div className={style.barraArribaResposivo}>
                <img src={imgMenu} className={style.imgMenu}></img>
                <span className={style.direccionURLResponsivo1}>TODOS</span>
                <span className={style.direccionURLResponsivo}>IMAGENES</span>
            </div>
            <div className={style.barraArribaEscritorio}>
                <span className={style.direccionURL}>Gmail</span>
                <span className={style.direccionURL}>Imagenes</span>
                <svg className={style.svgCuadros} viewBox='0 0 24 24'>
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
                <button className={style.botonAccederResposivo}>Acceder</button>
                <button className={style.botonAcceder}>Iniciar Seccion</button>
            </div>
        </div>
        
        </>
    )
}
export default Navegacion;