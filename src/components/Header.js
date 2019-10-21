import React, { useState, useEffect } from 'react';
import Imagen from './Imagen';
import logo from './Images/1.png';
import useForm from "./useForm";
import './styles/Header.css';
import { useHistory } from "react-router-dom";

const Header = _ => {
	const { values, handleChange, handleSubmit } = useForm(reload);
	let history = useHistory();
	const reload = () => {
		history.push("/items/search?q="+values.param);
		window.location.reload(true);
	}
     return(
		<div className="Header">
			<div className="contenedor">
				<Imagen name={logo} />
					<form role="search" className="search" onSubmit={handleSubmit}>
						<input id="texto" type="text" placeholder="Nunca dejes de buscar"
							   name="param"
							   onChange={handleChange}
							   value={values.param} required />
						<button className="button-search" onClick={reload}></button>
					</form>
			</div>
		</div>
	);
}

export default Header;