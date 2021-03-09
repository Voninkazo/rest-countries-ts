import React, { useContext } from 'react';
import GlobalContext from './GlobalState';
import {Link} from 'react-router-dom';

function CoutriesList() {

    const {countries} = useContext(GlobalContext);

    return (
        <div>
            {
                countries.map((country: any, index: number) => {
                    return (
                        <Link to={`/${country.name}`} key={index}>
                             <div>
                            <img src={country.flag} alt={country.flag}/>
                            <h2>{country.name}</h2>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CoutriesList
