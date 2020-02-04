import React from "react";
import styled from 'styled-components';


export default function TeamCard({member}){
    const image = `url('/photos/` + member.img_path + `')`;


return (
    <StyledCard>
        <h2>{member.role.toUpperCase()}</h2>
        <div>
            <p>{member.bio.toUpperCase()}</p>
            <h3>{member.name.toUpperCase()}</h3>
        </div>
        <div image={image} />
        <div href={member.link_url} target='_blank'>
            {member.link_title.toUpperCase()}
        </div>
    </StyledCard>

)

};

const StyledCard = styled.div`
    border: solid black 4px;
    width: 30rem;
`