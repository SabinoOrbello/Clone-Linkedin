import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import Eyes from "../images/icon_Main/Eyes";

const Analisi = () => {
  return (
    <>
      <Row className="profileContainer d-flex mt-2 ">
        <Col xs={12} className="">
          <Row className="ms-1">
            <Col>
              <h5 className="mt-4" style={{ lineHeight: 0.8 }}>
                Analisi
              </h5>
              <Eyes />
              <span className="colorGray">Solo per te</span>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col xs={5}>
                <Container className="d-flex">
                  <Col xs={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#666666"
                      width="22"
                      height="22"
                      focusable="false"
                    >
                      <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
                    </svg>
                  </Col>
                  <Col xs={10}>
                    <span className="ps-0">
                      <h6>3 visualizzazioni del profilo</h6>
                    </span>
                    <p>Scopri chi ha visitato il tuo profilo</p>
                  </Col>
                </Container>
              </Col>
              <Col xs={5}>
                <Container className="d-flex">
                  <Col xs={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#666666"
                      width="22"
                      height="22"
                      focusable="false"
                    >
                      <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                    </svg>
                  </Col>
                  <Col xs={10}>
                    <span className="ps-0">
                      <h6>29 impressioni del tuo profilo</h6>
                    </span>
                    <p>Scopri chi sta interagendo con i tuoi post</p>
                  </Col>
                </Container>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col
              xs={12}
              className=" d-flex justify-content-center barGray py-2"
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

export default Analisi;
