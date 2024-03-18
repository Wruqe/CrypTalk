import React, { useState, useEffect } from 'react'
import CoinGraph from '../components/coinChart'

export default function OneCoin(props) {

    const [coin, setCoin] = useState({})

    useEffect(() => {
        const baseUrl = "https://api-for-coin" // or something like that
        const apiKey = process.env.API_KEY

        fetch(baseUrl + props.match.params.id, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'x-access-token': apiKey,
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.coin) {  // or something like that
                    setCoin(data.data.coin)
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [props.match.params.id])

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
