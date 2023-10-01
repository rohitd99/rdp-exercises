import {useState,useEffect} from 'react';

function useFetchData(api)
{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        getUserDetails(api).catch((error) => {
            setError(error);
            setLoading(false);
        });
    },[]);

    async function getUserDetails(api)
    {
        const response = await fetch(api,{
                            method: 'GET',
                            headers: {'content-type':'application/json'},
                        });
        if(response.status !== 200)
        {
            throw new Error("We ran into some error!!");
        }
        const data = await response.json();
        setUser(data[Math.floor(Math.random() * 10)]);
        setLoading(false);
    }

    return [loading,error,user];
}

export default useFetchData;