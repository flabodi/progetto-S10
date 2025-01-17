import { Card, CardGroup, Row, Col, Container } from "react-bootstrap";

const MeteoCard = ({ weatherData }) => {
  if (!weatherData) return null;
  const getWeatherClass = (description) => {
    if (description.includes("clear")) return "clear-sky";
    if (description.includes("rain")) return "rain";
    if (description.includes("cloud")) return "clouds";
    if (description.includes("snow")) return "snow";
    if (description.includes("clear") && description.includes("night"))
      return "clear-night";
    if (description.includes("clear")) return "sunny";
    if (description.includes("rain")) return "rain";
    if (description.includes("cloud") && description.includes("night"))
      return "cloudy-night";
    if (description.includes("cloud")) return "clouds";
    if (description.includes("thunderstorm")) return "thunderstorm";
    if (description.includes("drizzle")) return "drizzle";
    if (description.includes("fog") || description.includes("mist"))
      return "fog";
    if (description.includes("few clouds")) return "few-clouds";
    if (description.includes("scattered clouds")) return "scattered-clouds";
    if (description.includes("overcast clouds")) return "overcast-clouds";
    if (description.includes("wind")) return "windy";
    if (description.includes("snow")) return "snow";
    return "default-weather"; 
  };

  return (
    <>
      <Container>
        <CardGroup>
          <Row className="justify-content-center ${getWeatherClass(data.weather[0].description)}">
            {weatherData.map((data, index) => (
              <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                {" "}
                <Card
                  className={`card rounded-4 border-0 shadow ${getWeatherClass(
                    data.weather[0].description
                  )}`}
                >
                  <span className="text-center text-white me-4 fw-bold">
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
                    <Card.Text className="pt-5 text-start ps-3">
                      <strong>Condition:</strong> {data.weather[0].description}
                      <Card.Text />
                      <Card.Text>
                        <strong>Humidity:</strong>
                        {data.humidity}%
                      </Card.Text>
                      <Card.Text>
                        <strong>Wind Speed:</strong> {data.wind_speed} m/s
                      </Card.Text>
                      <Card.Text>
                        <strong>Pressure:</strong> {data.pressure} hPa
                      </Card.Text>
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
      </Container>
    </>
  );
};

export default MeteoCard;
