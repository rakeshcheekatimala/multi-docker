import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FruitList = () => {
	let [fruits, setFruits] = useState([]);

	function getFruits() {
		const response = axios.get('/api/fruits');
		response.then(res => {

			setFruits(res.data);
		});
	}

	useEffect(() => {
		getFruits();
	}, []);
	return (
		<div>
			<h1>FruitList</h1>
			<div
			>
				{
					fruits && fruits.map(v => {
						return (<p key={v}>{v}</p>)
					})
				}
			</div>
		</div>
	)
}
export default FruitList;