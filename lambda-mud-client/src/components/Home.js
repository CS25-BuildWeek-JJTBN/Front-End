import React from 'react';
import Logo from './Logo';

import styled from 'styled-components';

export default function Home() {
	return <HomePage><Logo></Logo></HomePage>;
}

const HomePage = styled.div`
	height: 40rem;

`;
