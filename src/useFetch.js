import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error, setError] =useState(null); 

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(()=> {
            fetch(url, { signal : abortCont.signal})
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Could not fetch the data for that resource.');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                //No need of Cleanup Function.
                if(err.name === 'AbortName') 
                {
                    console.log('Fetch Aborted.');
                }
                else 
                {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },1000);

        return() => abortCont.abort();

    }, [url]);

    return { data, ispending, error }
}

export default useFetch;