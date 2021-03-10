import React, { useContext } from 'react';
import GlobalContext from './GlobalState';
import styled from 'styled-components';

const FormContainer = styled.form`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;

    @media(min-width: 1114px) {
        max-width: 1114px;
        margin: auto;
        padding-left: 0;
        padding-left: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        gap: 200px;
    }

    input, select {
        padding: 20px;
        bckground-color: white;
        border-radius: 5px;
        border: none;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0) inset;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        outline:none;
    }
    input {
        margin-bottom: 30px;
        color: lightgray;
    }

    select {
        width: 50%;
        color:  hsl(200, 15%, 8%;
    }

    @media(min-width: 1114px) {
        select {
            width: auto;
        }
    }

`;


function InputFields() {

    const {countries} = useContext(GlobalContext);
    console.log(countries)

    return (
        <FormContainer>
            <input type="text" placeholder="Search for a country..." />
            <select name="region" id="region">
                <option value="select">Select</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </FormContainer>
    )
}

export default InputFields
