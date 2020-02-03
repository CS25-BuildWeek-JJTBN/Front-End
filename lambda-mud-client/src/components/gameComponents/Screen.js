import React from 'react';

import Map from './Map';
import Chat from './Chat';
import Controls from './Controls';

export default function Screen() {
	return (
		<div>
			<Map />
			<Chat />
			<Controls />
		</div>
	);
}
