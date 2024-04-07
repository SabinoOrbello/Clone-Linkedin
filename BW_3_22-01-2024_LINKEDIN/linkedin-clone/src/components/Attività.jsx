import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Eyes from "../images/icon_Main/Eyes";

const Attività = () => {
  return (
    <>
      <Row className="profileContainer d-flex mt-2">
        <Col xs={12} className="">
          <Row className="ms-1">
            <Col>
              <h5 className="mt-4" style={{ lineHeight: 0.8 }}>
                Attività
              </h5>
              <Eyes />
              <span className="colorGray">Solo per te</span>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col xs={8}>
                <Container className="d-flex ps-3 pt-2">
                  <Col xs={10}>
                    <span className="ps-0">
                      <h6>Non hai ancora pubblicato nulla</h6>
                    </span>
                    <p>Scopri chi ha visitato il tuo profilo</p>
                  </Col>
                </Container>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col
              xs={12}
              className=" d-flex justify-content-center barGray py-2 "
              style={{ borderTop: "1px solid rgb(206, 199, 199)" }}
            >
              <span className="me-2">Mostra tutte le analisi </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#666666"
                class="bi bi-arrow-right "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Attività;
