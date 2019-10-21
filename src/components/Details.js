import React, { useState, useEffect } from 'react';
import InfoDetail from './InfoDetail';
import axios from 'axios';

const Details = (props) => {
	const [data, setData] = useState({});
	const [description, setDescription] = useState({});

	async function fetchDataFromAPI() {
		try {
			const result = await axios(
				'https://api.mercadolibre.com' + props.history.location.pathname,
			);
			return setData(result.data);
		}
		catch (error){
			console.error('Failed the api: ', error);
		}
	}

	async function fetchDescriptionDataFromAPI() {
		try {
			const resultDescription = await axios(
				`https://api.mercadolibre.com${props.history.location.pathname}/description`,
			);
			return setDescription(resultDescription.data);
		}
		catch (error){
			console.error('Failed the api: ', error);
		}
	}

	useEffect(() => {
		fetchDataFromAPI();
	}, []);

	useEffect(() => {
		fetchDescriptionDataFromAPI();
	}, []);

	return (
		<InfoDetail
			imagen = {data.thumbnail}
			condition={data.condition}
			sold_quantity={data.sold_quantity}
			price={data.price}
			title = {data.title}
			description = {description.plain_text}
		/>
  );
};

export default Details;