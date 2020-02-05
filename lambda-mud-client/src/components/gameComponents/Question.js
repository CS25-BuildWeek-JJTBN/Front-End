import React, { useEffect, useState, useRef } from 'react';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel } from '../../styled-components/styledComponents';

export default function Question() {
	const {
		data: { title },
	} = useDataContext();
	// const [text, setText] = useState("");
	const text = useRef({wordIndex: 0, text: '', letterIndex: 0});


	const txt = [title];	
	const speed = 80;
	let i = 0;

	console.log(txt.length)
	useEffect(() => {
		console.log('hi')
		if (i >= txt.length) {
			document.getElementsByClassName('text-box').innerHTML += txt.charAt(i);
			i++;
			setTimeout(txt, speed);
			}
		}, [txt]);




	return (
		<DashboardPanel>
			<h3>Interview Question:</h3>
			<div className='text-box'>{txt}</div>
		</DashboardPanel>
	);
}
