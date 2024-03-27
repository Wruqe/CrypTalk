import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../components/utils/queries";
import { useParams } from "react-router-dom"; // Assuming you use react-router-dom for routing
import Auth from "../components/utils/auth";

import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const RecentBlogPosts = () => {
  const recentBlogPosts = [
    {
      _id: 1,
      thoughtText: "This is a sample blog post.",
      createdAt: "2022-02-01",
    },
    {
      _id: 1,
      thoughtText: "This is a sample.",
      createdAt: "2022-01-01",
    },
    {
      _id: 1,
      thoughtText: "This is a sample  post.",
      createdAt: "2022-04-01",
    },
    {
      _id: 1,
      thoughtText: "This is a  blog post.",
      createdAt: "2022-07-01",
    },
  ];
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h3>Recent Activity</h3>
      <Container>
        <Row>
          {recentBlogPosts.map((post) => (
            <Col key={post._id} xs={12} sm={6} md={4} className="mb-4">
              <Link to={`/blogs/${post._id}`}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h4 style={{ fontSize: "20px" }}>{post.thoughtText}</h4>
                  <p>{post.createdAt}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div
      style={{
        backgroundColor: "coral",
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={6} md={4}>
            <Card
              style={{
                backgroundColor: "#f8f9fa",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="d-flex justify-content-center align-items-center mb-3">
                <Image
                  src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-steve-urkel-19a21607-6240-4447-b18a-ef6ed63ccca1.jpg?w=910&h=511&crop=1"
                  roundedCircle
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <div className="text-center">
                <h2>Steven Q Urkel</h2>
              </div>
              <div className="text-center">
                <p className="mb-1">Email: urkman@gmail.com</p>
                <p className="mb-1">Social Media: @urkins89</p>
                <p className="mb-1">Location: Chicago, US</p>
              </div>
              <div className="text-center mt-3">
                <Button variant="primary" style={{ marginRight: "10px" }}>
                  Follow
                </Button>
                <Button variant="success">Message</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <RecentBlogPosts />
      <div className="text-center" style={{ marginTop: "50px" }}>
        <img
          src="https://i.pinimg.com/originals/b4/76/65/b476657ec2307af75643bc74532b9f42.gif"
          alt="GIF"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
