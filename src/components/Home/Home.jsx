import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';

function Home() {
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState([]);
	const [status, setStatus] = useState(['Alive', 'Dead', 'unknown']);
	const [species, setSpecies] = useState(['Alien', 'Human']);

	useEffect(() => {
		let characters = getCharacters();

		characters.then((r) => {
			setCharacters(r);
			setSearch(r);
		});
	}, []);

	async function getCharacters() {
		const api = await axios.get('https://rickandmortyapi.com/api/character');
		return api.data.results;
	}

	function handleInputChange(event) {
		const eventoValue = event.target.value;
		let filtered = characters.filter((element) => {
			return element.name.toLowerCase().includes(eventoValue.toLowerCase());
		});
		setSearch(filtered);
	}

	function HandleFilterSpecies(event) {
		const eventoValue = event.target.value;
		let filtered = characters.filter((element) => {
			return element.species === eventoValue;
		});
		setSearch(filtered);
	}

	function HandleFilterStatus(event) {
		const eventoValue = event.target.value;
		let filtered = characters.filter((element) => {
			return element.status === eventoValue;
		});
		setSearch(filtered);
	}

	function HandleClearFilter(e) {
		e.preventDefault();
		setSearch(characters);
	}

	function handleSort(e) {
		let sortCharacters;

		if (e.target.value === 'alf-asc') {
			sortCharacters = search.sort(function (a, b) {
				if (a.name > b.name) {
					return 1;
				}
				if (a.name < b.name) {
					return -1;
				}
				return 0;
			});
		}
		if (e.target.value === 'alf-des') {
			sortCharacters = search.sort(function (a, b) {
				if (a.name > b.name) {
					return -1;
				}
				if (a.name < b.name) {
					return 1;
				}
				return 0;
			});
		}
		if (e.target.value === 'default') {
			sortCharacters = characters;
		}

		setSearch([...sortCharacters]);
	}

	return (
		<div className={styles.home}>
			<nav className={styles.nav}>
				<NavLink to='/'>
					<img className={styles.toLanding}></img>
				</NavLink>
				<input
					type='text'
					className={styles.searchBar}
					placeholder='Ingrese su busqueda'
					onChange={handleInputChange}
				></input>
				<select onChange={HandleFilterStatus}>
					<option disabled selected>
						Filter Types
					</option>
					{status.map((s) => (
						<option key={s} value={s}>
							{s}
						</option>
					))}
				</select>
				<select onChange={HandleFilterSpecies}>
					<option disabled selected>
						Filter Species
					</option>
					{species.map((specie) => (
						<option key={specie} value={specie}>
							{specie}
						</option>
					))}
				</select>
				<select onChange={(e) => handleSort(e)}>
					<option disabled selected>
						Order By Name
					</option>
					<option value='default'>Default</option>
					<option value='alf-asc'>A - Z</option>
					<option value='alf-des'>Z - A</option>
				</select>
				<button onClick={HandleClearFilter}>Clear Filter</button>
			</nav>
			<Cards char={search} />
		</div>
	);
}

export default Home;
