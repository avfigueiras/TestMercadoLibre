import React from 'react';
import './styles/Details.css';
import Box from './Box';

const InfoDetail = (props) => {
	const handleClick = _ => (alert('La acción no esta disponible...'))
	return (
		<div className="App">
			<Box />
			<div className="detailContent">
				<div className="detailProduct">
					<img src={props.imagen} className='Imag'/>
					<div className="condition">
						<p>{props.condition} - {props.sold_quantity} vendidos</p>
						<p>{props.title}</p>
						<p className="price">$ {props.price}</p>
						<button onClick={handleClick}>Comprar</button>
					</div>
				</div>
				<div className="descriptionProduct">
					 <p>Descripción del producto</p>
					 <p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default InfoDetail;