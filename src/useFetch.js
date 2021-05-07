import {useState, useEffect} from 'react';

const useFetch = (url) => {

        // useState
        const [data, setData] = useState(null)
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);
    
        // useEffect
        useEffect(() => {

            const abortCont = new AbortController();

            setTimeout(() => {
                // console.log("2")
                fetch(url, {signal: abortCont.signal})
                .then(res => {
                    // be careful ... will get error message - already used json()
                    // console.log("3" , res.json()) 
                    if (!res.ok) {
                        throw Error('Not able to fetch data from server');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log("4", data)
                    setData(data.body);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name ==='AbortError'){
                        console.log('fetch aborted');
                    } else{
                        setIsPending(false);
                        setError(err.message);
                        }
                });    
            },500);

            return () => abortCont.abort();
        },[url]);

        return {data, isPending, error}
    
}

export default useFetch;
