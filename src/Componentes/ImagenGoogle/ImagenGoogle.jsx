import styles from './ImagenGoogle.module.css';
import img from './google.png'
function ImagenGoogle(){
    return(
        <div className={styles.ImagenGoogle}>
            <img className={styles.Img} src={img} alt="" />
        </div>
    )
}
export default ImagenGoogle;