import {NavLink} from 'react-router-dom';
import styles from './Card.module.css';
import Cards from '../Cards/Cards'

export default function Card({name , status, especies, image}){
    return (
        <div className={styles.card}>
            <div className={styles.divImage}>
                <img src={image} className={styles.image}/>
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{`Estatus: ${status}`}</p>
                <p>{`Especie: ${especies}`}</p>
               
            </div>
        </div>
    )
}