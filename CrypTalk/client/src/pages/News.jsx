import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const apiKey = "pub_40297bd6b06608e4a11a311d7b0c57de45b86";
  const query = "cryptocurrency";
  const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}&language=en`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Logging the fetched data
        setNews(data.results || []);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Runs once on component mount

  const handleTitleClick = (index) => {
    setSelectedArticle(index === selectedArticle ? null : index);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <Container className="news-container" fluid>
      <Row>
        <Col>
          <h1>Crypto News</h1>
          <ul className="news-list">
            {news.map((article, index) => (
              <li key={index} className="news-item">
                <h2
                  className="news-title"
                  onClick={() => handleTitleClick(index)}
                >
                  {article.title}
                </h2>
                {selectedArticle === index && (
                  <Row>
                    <Col></Col>
                    <Col>
                      {article.image_url && (
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="news-image-link"
                        >
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="news-image"
                          />
                        </a>
                      )}
                      <p className="news-description">{article.description}</p>
                    </Col>
                    <Col></Col>
                  </Row>
                )}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
