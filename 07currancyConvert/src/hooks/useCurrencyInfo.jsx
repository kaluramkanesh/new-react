import { useState, useEffect } from 'react'
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        // Fetch currency data whenever `currency` changes
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((response) => {
                setData(response[currency]);
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);
console.log(data)
    return data;
}

export default useCurrencyInfo