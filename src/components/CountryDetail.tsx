import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import GlobalContext from './GlobalState';

function CountryDetail() {
    const {countries} = useContext(GlobalContext);

    const {name} = useParams();
    console.log(name);

   const countryWithDetail = countries.find((country: any) => country.name === name)
    console.log(countryWithDetail);

    return (
        <div>
            <Link to="/">
                <p>Go back</p>
            </Link>
           <div>
               <img src={countryWithDetail.flag} alt="flag"/>
               <h3>{countryWithDetail.name}</h3>
               <p>Native Name: {countryWithDetail.nativeName}</p>
               <p>Population: {countryWithDetail.population}</p>
               <p>Region: {countryWithDetail.region}</p>
               <p>Sub Region: {countryWithDetail.subregion}</p>
               <p>Capital: {countryWithDetail.capital}</p>
               <p>Top Level Domain: {countryWithDetail.topLevelDomain[0]}</p>
               <p>Currency: {countryWithDetail.currencies.map((currency: any) => currency.name)}</p>
               <div>
                   Languages: 
                   {
                       countryWithDetail.languages.map((lang: any, index: number) => {
                           return (
                               <p key={index}>{lang.name}</p>
                           )
                       })
                   }
               </div>
               <div>
                   <p>Border Countries: </p>
                   { countryWithDetail.borders.map((border: any, index: number) => {
                       return (
                           <p key={index}>
                               { countries.filter((country: any) => country.alpha3Code === border).map((country: any, index:number) => {
                                   return (
                                       <span key={index}>{country.name}</span>
                                   )
                               })}
                           </p>
                       )
                   })
                //    :
                //    <span>No borders found</span>
                 }
               </div>
           </div>
        </div>
    )
}

export default CountryDetail
