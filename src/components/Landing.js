import React, {useState, useEffect} from 'react';

//API
import { getCoin } from '../services/api';

//Components
import Loader from './Loader';
import Coin from './Coin';
const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data);
        }

        fetchAPI();

    },[])

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>

            <input type="text" placeholder='Enter Name for Search' value={search} onChange={searchHandler}/>
            {
                coins.length ? 
                    
                        searchedCoins.map(coin => <Coin 
                            key={coin.id}
                            image={coin.image}
                            name={coin.name}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            marketCap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                        />)
                    
                :
                    <Loader />
            }
        </>
    );
};

export default Landing;