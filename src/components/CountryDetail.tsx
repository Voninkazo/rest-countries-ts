import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import styled from 'styled-components';

import GlobalContext from './GlobalState';

const DetailContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    pading-bottom: 200px;

    .previous_link {
        padding: 10px 20px;
        font-size: 18px;
        line-height: 22px;
        border-radius: 5px;
        display:inline-block;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0) inset;
    }

    .img_container {
        padding-top: 40px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .text_detail__wrapper {
        display: flex;
        flex-direction: column;
        gap: 40px;
        
    }

    .languages_container{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .borders_container  {
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
        li {
            border-radius: 5px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0) inset;
            padding: 10px 50px;
            white-space: nowrap;
        }
    }

    @media(min-width: 1114px) {
        max-width: 1114px;
        margin:auto;
        padding-left: 0;
        padding-right: 0;
        .wrapper {
        display: flex;
        flex-direction: row;
        gap: 100px;
        padding-bottom: 300px;
       
        }

        .img_container {
            max-width: 566px;
        }
        .flex {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 100px;
        }
        .borders_container  {
            flex-wrap: nowrap;
        }
    }
`;

function CountryDetail() {
    const {countries} = useContext(GlobalContext);

    const {name} = useParams();
    console.log(name);

   const countryWithDetail = countries.find((country: any) => country.name === name)
    console.log(countryWithDetail);
    const arr = countryWithDetail.borders.length;

    return (
        <DetailContainer>
            <Link to="/">
                <p className="previous_link"> ← Go back</p>
            </Link>
           <div className="wrapper">
               <div className="img_container">
                    <img src={countryWithDetail.flag} alt="flag"/>
               </div>
               <div className="text_detail__wrapper">
                    <div className="flex">
                    <div className="text_detail__container">
                        <h3>{countryWithDetail.name}</h3>
                        <p>Native Name: {countryWithDetail.nativeName}</p>
                        <p>Population: {countryWithDetail.population}</p>
                        <p>Region: {countryWithDetail.region}</p>
                        <p>Sub Region: {countryWithDetail.subregion}</p>
                        <p>Capital: {countryWithDetail.capital}</p>
                    </div>
                   <div  className="text_detail__container">
                        <p>Top Level Domain: {countryWithDetail.topLevelDomain[0]}</p>
                            <p>Currencies: {countryWithDetail.currencies.map((currency: any) => currency.name)}</p>
                               <p className="languages_container"> Languages:
                                {
                                    countryWithDetail.languages.map((lang: any, index: number) => {
                                        return (
                                            <span key={index}>{lang.name}</span>
                                        )
                                    })
                                }
                            </p>
                    </div>
                    </div>
                <div>
                   <p>Border Countries: </p>
                    <ul className="borders_container">
                   { arr >= 0 ? countryWithDetail.borders.map((border: {}, index: number) => {
                       return (
                           
                                <li key={index}>
                                    { countries.filter((country: any) => country.alpha3Code === border).map((country: any, index:number) => {
                                        return (
                                            <Link to={`/${country.name}`} key={index}>
                                                <span>{country.name}</span>
                                            </Link>
                                        )
                                    })}
                                </li>
                       )
                   })
                   :
                   <span>No borders found</span>
                 }
                 </ul>
               </div>
               </div>
               
           </div>
        </DetailContainer>
    )
}

export default CountryDetail
