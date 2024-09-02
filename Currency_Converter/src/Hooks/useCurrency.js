import { useState, useEffect } from "react";
function useCurrency(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]))
      .catch((error) => {
        console.log(`Error in fetching api ${error}`);
      });
    console.log(data);
  }, [currency]);
  return data;
}

export default useCurrency;
