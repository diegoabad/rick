import {NavLink} from 'react-router-dom';
import styles from './Landing.module.css';

export default function Landing(){
    return (
         <div className={styles.background}>
            <NavLink to='/home' className={styles.btn}>
                <p className={styles.p}>TO HOME</p>
            </NavLink>
        </div>
    )
}
