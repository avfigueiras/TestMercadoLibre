import React from 'react';
import car from './Images/carrito.png';
import './styles/StyleResults.css';
import { useHistory } from "react-router-dom";

const Info = (props) => {
	let history = useHistory();
	function handleClick() {
		history.push("/items/"+props.id);
	}

	return (
		<div className="resultList"
			 onClick={handleClick}>
			<img src={props.imagen} className='ImagenInfo'/>
			<div className="data">
				<div className="ResultPrice">
					<h3>$ {props.price}</h3>
					<img src={car} className='ImagenCar'/>
				</div>
				<p>{props.title}</p>
			</div>
			<label>{props.address}</label>
		</div>
	);
}

export default Info;
