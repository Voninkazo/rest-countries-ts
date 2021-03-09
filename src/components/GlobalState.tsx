import { createContext, useReducer, useEffect } from "react"

export const initialValues: State = {
    countries: [],
}

const GlobalContext = createContext(initialValues);

type State = {
    countries: any;
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

type Action = {
    type: "FETCH_DATA",
    value: Props[];
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "FETCH_DATA":
            console.log(action.value)
        return { ...state, countries: action.value};
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

    return (
        <GlobalContext.Provider value={{countries: state.countries}}>
            {children}
        </GlobalContext.Provider>
    )
}