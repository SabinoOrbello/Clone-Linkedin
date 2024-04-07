import Carousel from "react-bootstrap/Carousel";

import { Card, Container } from "react-bootstrap";

function Carosello() {
  return (
    <Carousel className="py-3 ">
      <Carousel.Item>
        <Container className="d-flex ">
          <Card.Body className=" mx-2 px-2 rounded-2" style={{ backgroundColor: "#e1e6f0" }}>
            <h6>Disponibile a lavorare</h6>
            <Card.Text>
              Descrizione della Card. Puoi inserire qui tutte le informazioni che desideri mostrare.
            </Card.Text>
          </Card.Body>
          <Card.Body className=" mx-2 px-2 rounded-2" style={{ border: "solid 1px #e1e6f0" }}>
            <h6>Esperienze in Scienze della Comunicazione</h6>
            <Card.Text>
              Descrizione della Card. Puoi inserire qui tutte le informazioni che desideri mostrare.
            </Card.Text>
          </Card.Body>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="d-flex">
          <Card.Body className=" mx-2 px-2 rounded-2" style={{ backgroundColor: "#e1e6f0" }}>
            <h6>Titoli</h6>
            <Card.Text>
              <p>Descrizione della Card. Puoi inserire qui tutte le informazioni che desideri mostrare.</p>
            </Card.Text>
          </Card.Body>
          <Card.Body className=" mx-2 px-2 rounded-2" style={{ border: "solid 1px #e1e6f0" }}>
            <h6>Obiettivi raggiunti</h6>
            <Card.Text>
              <p>Descrizione della Card. Puoi inserire qui tutte le informazioni che desideri mostrare.</p>
            </Card.Text>
          </Card.Body>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="d-flex">
          <Card.Body className=" mx-2 px-2 rounded-2" style={{ backgroundColor: "#e1e6f0" }}>
            <h6>Premi</h6>
            <Card.Text>
              <p>Descrizione della Card. Puoi inserire qui tutte le informazioni che desideri mostrare.</p>
            </Card.Text>
          </Card.Body>
          <Card.Body className=" mx-2 px-2 rounded-2" style={{ border: "solid 1px #e1e6f0" }}>
            <h6>Disponibile a lavorare</h6>
            <Card.Text>
              <p>Descrizione della Card. Puoi inserire qui tutte le informazioni che desideri mostrare.</p>
            </Card.Text>
          </Card.Body>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosello;
