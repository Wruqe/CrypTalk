import { useState, useEffect } from 'react';
import '../App.css';
import BasicExample from '../components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import LiCoins from '../components/coins'; // Assuming LiCoins.js is the correct file name
import ThoughtList from '../components/thoughtList';

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const baseUrl = "https://api.coinranking.com/v2/coins";
    const apiKey = "coinranking6e57956122c8e1d1fe9533a5688e8570c3a6c474e4177578";

    fetch(baseUrl, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'x-access-token': apiKey,
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      if (data && data.data && data.data.coins) {
        setCoins(data.data.coins.slice(0, 4));
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }, []);

  return (
    <div className="App">
      <BasicExample />
      <h2 className='text-center mb-5 mt-5' >Crypto Tokens</h2>
      <LiCoins coins={coins} />
      <ThoughtList />
    </div>
  );
}

