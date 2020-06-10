import { useState, useEffect } from 'react'
const axios  = require('axios');

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue)
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setResult(result))
    }, [])
    return result;
}

export const useFetchLogin = (url, loginBody) =>{
    const[result, setResult] = useState('')
    useEffect(()=>{
        // fetch(url, {
        //     method: 'POST',
        //     body: loginBody
        // })
        // .then(response => response.json())
        // .then(result => setResult(result))
        axios.post(url,loginBody)
        .then(function(response){
            console.log(response);
        })

    }, [])
    return result;
}


// export default useFetch;