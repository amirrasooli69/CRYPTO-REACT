import React, {useState, useEffect} from 'react';

//API
import { getCoin } from '../services/api';

//Components
import Loader from './Loader';
const Landing = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data);
        }

        fetchAPI();

    },[])

    return (
        <>

            <input type="text" placeholder='Enter Name for Search' />
            {
                coins.length ? 
                    
                        coins.map(coin => <p key={coin.id}>{coin.name}</p>)
                    
                :
                    <Loader />
            }
        </>
    );
};

export default Landing;