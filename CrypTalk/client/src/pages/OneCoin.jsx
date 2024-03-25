import { useState, useEffect } from 'react'
import CoinGraph from '../components/coinChart'

export default function OneCoin() {

    const [coin, setCoin] = useState({});

    useEffect(() => {
        const id = window.location.pathname.split('/')[2];
        fetch(`https://api.coinranking.com/v2/coin/${id}`)
            .then(response => response.json())
            .then(data => setCoin(data.data.coin))
    }, []);

    return (
        <div>
            <h1>{coin.name}</h1>
            <p>Rank: #{coin.rank}</p>
            <p>Price: ${coin.price}</p>
            <p>MarketCap: ${coin.marketCap}</p>
            <CoinGraph changeValue={coin.change} />
        </div>
    )
}
