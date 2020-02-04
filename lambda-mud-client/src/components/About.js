import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';
import { team_info } from "./TeamInfo";


export default function About() {
	return <div>
		About
			<div>
			{team_info.map(member => (
				<TeamCard key={member.name} member={member} />
			))}
		</div>
	</div>;
}



