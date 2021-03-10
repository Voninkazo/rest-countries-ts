import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
    align-items: baseline;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0) inset;
    h1 {
        font-size: 24px;
        line-height: 28px;
        font-weight: 800;
    }

    p {
        font-size: 18px;
        line-height: 24px;
        font-weight: 600;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <h1>Where in the world?</h1>
            <p>Dark mode</p>
        </HeaderContainer>  
    )
}

export default Header;
