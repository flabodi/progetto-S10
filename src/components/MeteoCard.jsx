import { Card, CardGroup, Row, Col } from "react-bootstrap";

const MeteoCard = ({ weatherData }) => {
  if (!weatherData) return null; 

  return (
    <>
      <CardGroup>
        <Row>
          {weatherData.map((data, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              {" "}
       
              <Card className="card rounded-4 shadow ">
                <span className="text-end text-white me-4 fw-bold">
                  <Card.Img
                    variant="top"
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                    style={{ width: "70px", height: "70px" }}
                    className="card-img"
                  />
                  {data.temp}°C
                </span>
                <Card.Body>
                  <Card.Title>{data.city}</Card.Title>
                  <Card.Text>
                    <strong>Condition:</strong> {data.weather[0].description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="cfooter">
                  <small className="text-muted">
                    Min: {data.temp_min}°C | Max: {data.temp_max}°C
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </CardGroup>
    </>
  );
};

export default MeteoCard;
