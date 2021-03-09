import React, { useContext } from 'react';
import GlobalContext from './GlobalState';


function InputFields() {

    const {countries} = useContext(GlobalContext);
    console.log(countries)

    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default InputFields
