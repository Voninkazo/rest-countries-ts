import React, { useContext } from 'react';
import GlobalContext from './GlobalState';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CountryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media(min-width: 1114px) {
        max-width: 1114px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`;

const CountryList = styled.div`
    background-color: white;
    border-radius: 5px;
    max-width: 340px;
    margin: auto; 
    padding-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0) inset;
    img {
        border-radius: 5px 5px 0px 0px;
    }
    .text_container {
        padding: 20px;
    }

    h2 {
        color: hsl(200, 15%, 8%);
        font-weight: 800;
    }

    p {
        color: hsl(200, 15%, 8%);
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
    }

    span {
        font-weight: 300;
    }

    .img_container {
        height: 157px;
    }
`;

function CoutriesList() {

    const {countries} = useContext(GlobalContext);

    return (
        <CountryContainer>
            {
                countries.map((country: any, index: number) => {
                    return (
                        <Link to={`/${country.name}`} key={index}>
                        <CountryList>
                            <div className="img_container">
                                <img src={country.flag} alt={country.flag}/>
                            </div>
                           <div className="text_container">
                                <h2>{country.name}</h2>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                           </div>
                        </CountryList>
                        </Link>
                    )
                })
            }
        </CountryContainer>
    )
}

export default CoutriesList
