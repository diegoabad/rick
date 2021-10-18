import {NavLink} from 'react-router-dom';
import styles from './Cards.module.css';
import Card from '../Card/Card'

export default function Cards ({char}){

    return (
        <div className={styles.cards}>
         
            {char.map((character)=>{
            return (<Card name={character.name}
             status={character.status} 
             especies={character.species} 
             image={character.image}/>)
            })}
        
    </div>
    )
}