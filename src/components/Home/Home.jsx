import {NavLink} from 'react-router-dom';
import axios from 'axios'
import styles from './Home.module.css';
import {useState,useEffect} from 'react'; //useState guarda info, necesita una variable y una funcion que setea la variable 
import Cards from '../Cards/Cards'


function Home(){
    const [character,setCharacters] = useState([]); //en la primera parte usamos destructuring, donde ponemos el nombre dek dato
    //y una funcion que sera la que modificara el dato (solo le ponemos el nombre, donde vamos a pasar la info donde guardaremmos
    //o pisaremos la info en useState), useState solo recibira informacion a partir de su funcion setCharacter.
    //useEffect es otro hook que interviene en ciertos momentos, se puede llegar a ejecuar en 3 momentos claves
    //uno es cuando se renderiza el componente, (generalmente se usa aca) el useEffect viene a replazar a component didMount,willUnmount
    //otro en el momento que llame a una funcion (crear un nuevo pokemon en el pi de diego por ejemplo), para que cada vez que se dispare
    //la funcion el useEffect vuelva a renderizar
    //otro seria cuando se desmonta un componente
    const[search,setSearch] = useState([]); //ahora ponemos estados para el buscador

    useEffect(()=>{
        let characters = getCharacters();
        //setCharacter(characters); //guardamos en character, lo que returna la llamada a la funcion
        characters.then(r=>{
          setCharacters(r)
          setSearch(r)
        })
     },[]) //el array monitorea los cambios de lo que este dentro del array, si el array esta vacia solo se aplica cuando se monta el componente


    async function getCharacters (){
        const api = await axios.get('https://rickandmortyapi.com/api/character');
        return (api.data.results) //devuelve una promesa asincrona
    }

    function handleInputChange(event){
      const eventoValue = event.target.value;
      let filtered = character.filter((element)=>{
        return element.name.toLowerCase().includes(eventoValue.toLowerCase())
      })
      setSearch(filtered)
    }
    
   
    return (
      <div className={styles.home}>
        <nav className={styles.nav}>
           <NavLink to='/'>
            <img className={styles.toLanding}></img>
          </NavLink>
          <input type='text' className={styles.searchBar} placeholder='Ingrese su busqueda' onChange={handleInputChange}></input>
           <button className={styles.searchButton}><img></img></button>
        </nav>
       <Cards char={search}/>
      </div>
     
    )
  }



  export default Home;