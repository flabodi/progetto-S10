import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useState } from "react";
import MeteoCard from "./MeteoCard"; 

const MyNavbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [weatherData, setWeatherData] = useState(null); 
 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

 
  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      try {
        const apiKey = "bd5ccbbaf42fc42ff53138c589365b3b"; 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
          const formattedData = data.list.slice(0, 9).map((item) => ({
            city: searchQuery,
            temp: item.main.temp,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            weather: item.weather,
          }));
          setWeatherData(formattedData);
        } else {
          alert("Città non trovata.");
          setWeatherData(null); 
        }
      } catch (error) {
        console.error("Errore durante la chiamata API:", error);
        alert("Errore durante la chiamata API.");
      }
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Weather App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Search city"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange} 
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      {weatherData && <MeteoCard weatherData={weatherData} />}
    </>
  );
};

export default MyNavbar;
