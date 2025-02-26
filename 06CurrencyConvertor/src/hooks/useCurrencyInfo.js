import {useEffect , useState} from 'react';

// just create a function that return two values
// 1) a value
// 2) a function
// creating custom hook
function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(() => {
        // making api call
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // converting string to json
        // now the response is in JSON format.
        .then((res) => setData(res[currency]))
        console.log(data);
    } , [currency])

    console.log(data);
    return data
}

// returning entire method
export default useCurrencyInfo