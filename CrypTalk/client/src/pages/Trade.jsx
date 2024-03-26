import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function CryptoPricesPage() {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const apiKey = 'E3DEA31F-7570-413D-8936-E543F0F96506'; 
      const response = await fetch(
        "https://rest.coinapi.io/v1/assets",
        {
          headers: {
            "X-CoinAPI-Key": apiKey
          }
        }
      );
      const data = await response.json();
      // Filter out coins without USD price
      const filteredData = data.filter((crypto) => crypto.price_usd !== null);
      setCryptoData(filteredData);
      setSearchResults(filteredData.slice(0, 25)); // Display only the first 30 coins initially
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults.slice(0, 25)); // Limit search results to 30 coins
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2 className="mb-4">Cryptocurrency Prices</h2>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search for a cryptocurrency"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {cryptoData.length > 25 && searchTerm === "" && (
              <p className="text-muted">Use the search bar to find more cryptocurrencies</p>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="list-unstyled">
            {searchResults.map((crypto, index) => (
              <li key={index} className="mb-3 p-3 border rounded">
                <strong>{crypto.name} ({crypto.asset_id}):</strong> ${crypto.price_usd}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default CryptoPricesPage;
