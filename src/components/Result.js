import React, { useState, useEffect } from 'react';
import Info from './Info';
import Box from './Box';

import axios from 'axios';
import Breadcrumb from './Breadcrumb';

const Result = (props) => {
	const [data, setData] = useState({ results: [] });

	async function fetchDataFromAPI() {
		try {
			const result = await axios(
				'https://api.mercadolibre.com/sites/MLA/search'+props.history.location.search,
			);
			return setData(result.data);
		}
		catch (error){
			console.error('Failed the api: ', error);
		}
	}

	useEffect(() => {
		fetchDataFromAPI();
	}, []);
	const style = {
		textAlign: "center",
		fontWeight: "bold",
		marginTop: "50px"
	};
	return (
	<div className="App">
		<Box />
		<Breadcrumb />
		<div className="Result">
			<ul>
				{data.results.length
					?
						data.results.map((item, index) => {
							if(index < 4)
								return (
									<li key={item.id}>
										<Info id = {item.id}
											  imagen={item.thumbnail}
											  price={item.price}
											  title = {item.title}
											  address = {item.address.state_name}
										/>
									</li>
								)
						})
					:
						<h3 style={style}>Loading...</h3>}
			</ul>
		</div>
	</div>

  );
}

export default Result;
