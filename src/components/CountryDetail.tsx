import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import GlobalContext from './GlobalState';
import {Props} from './GlobalState';

// type Name = {
//     name?: string;
// }

function CountryDetail() {
    const {countries} = useContext(GlobalContext);

    const {name} = useParams();
    console.log(name);

  async function fetchDetail() {
        const resp = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
        const data = await resp.json();
        console.log(data);
    }

   const countryWithDetail = countries.find((country: any) => country.name === name)
    console.log(countryWithDetail);

    return (
        <div>
            <Link to="/">
                <p>Go back</p>
            </Link>
           <div>
               <img src={countryWithDetail.flag} alt="flag"/>
               <p>{countryWithDetail.name}</p>
           </div>
        </div>
    )
}

export default CountryDetail
