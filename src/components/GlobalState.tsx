import { createContext, useReducer, useEffect, ButtonHTMLAttributes } from "react"

export const initialValues: State = {
    countries: [],
    onchange: () => {},
    search: '',
}

const GlobalContext = createContext(initialValues);

type State = {
    countries: any;
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
}

export type Props = {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: [string, string]
    area: number
    borders: [string, string, string, string, string, string]
    callingCodes: [string]
    capital: string
    cioc: string
    currencies: {code: string, name: string, symbol: string}[]
    demonym: string
    flag: string
    gini: number
    languages: {iso639_1: string, iso639_2: string, name: string, nativeName: string}[]
    latlng: [number, number]
    name: string
    nativeName: string
    numericCode: string
    population: number
    region: string
    regionalBlocs: {acronym: string, name: string}[]
    subregion: string
    timezones: [string]
    topLevelDomain: [string]
    translations: {
        br: string,
        de: string,
        es: string,
        fa: string,
        fr: string,
        hr: string,
        it: string,
        ja: string,
        nl: string,
        pt: string,
    }
}

type Action = |{
    type: "FETCH_DATA"
    value: Props[];
}| {type: "FILTER_BY_SEARCH", value: string}

// type Filters = {
//     value: string,
//     region: string,
//     onChange: (param: {name: string, value:string}) => void
// }


function reducer(state: State, action: Action) {
    switch (action.type) {
        case "FETCH_DATA":
            console.log(action.value)
        return { ...state, countries: action.value};

        case "FILTER_BY_SEARCH": 
        return {...state, search: action.value}

        default:
            return state;
    }
}


export default GlobalContext;

export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    async function fetchData() {
        const resp = await fetch(`https://restcountries.eu/rest/v2/all`);
        const res = await resp.json();
        const data = res;
        console.log(data)
        dispatch({type: "FETCH_DATA", value: data })
    }

    useEffect(() => {
      fetchData();
    }, [])

    function filterByName(e: HTMLInputElement) {
    //     const filteredArr = state.countries.filter((country: any) => country.name === e.target.value)
    //    dispatch({type: "FILTER_SEARCH", value: filteredArr})
    }

    return (
        <GlobalContext.Provider value={{countries: state.countries, search: state.search, onchange : (e) => dispatch({type: "FILTER_BY_SEARCH", value: e.target.value})}}>
            {children}
        </GlobalContext.Provider>
    )
}