import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoinGraph from './coinChart';

function LiCoins({ coins }) {
  console.log("Coins data:", coins); // Debugging: Log coins data to console
  return (
    <div className="coin-cards">
      <Row>
        {coins.map((coin, index) => (
          <Col key={index} xs={12} md={6} lg={4} xl={3}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>
                  {coin.iconUrl && <img src={coin.iconUrl} alt="Coin Icon" style={{ marginRight: '8px', height: '1.5em' }} />}
                  {coin.name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{coin.symbol}</Card.Subtitle>
                <Card.Text>
                  Price: ${parseFloat(coin.price).toFixed(3)}
                </Card.Text>
                <Card.Text>
                  Rank: #{coin.rank}
                </Card.Text>
                <Card.Text>
                  MarketCap: ${parseFloat(coin.marketCap).toFixed(3)}
                </Card.Text>
                <CoinGraph changeValue={coin.change} /> {/* Pass coin.change data to CoinGraph */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LiCoins;
