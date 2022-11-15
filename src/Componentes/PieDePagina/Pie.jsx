import style from './Pie.module.css'
function Pie(){
    return(
        <div className={style.Pie}>
            <div className={style.contenedorPie}>
                <span className={style.PieArriba}>Colombia</span>
                <br />
                <span className={style.PieAbajo}>Sobre Google - Publicidad - Negocios Como funciona La busqueda - privacidad - condiciones - Preferencias</span>
            </div>
        </div>
    )
}
export default Pie;