import { useEffect, useState } from "react";

function useCurrencyinfo(currency){
    const [data, set_data] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => set_data(res[currency]))
    }, [currency])
    
    return data
}

export default useCurrencyinfo;