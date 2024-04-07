import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Eyes from "../images/icon_Main/Eyes";

const Info = () => {
  return (
    <>
      <Row className="profileContainer d-flex mt-2">
        <Col xs={12} className="">
          <Row className="ms-1">
            <Col>
              <h5 className="mt-4" style={{ lineHeight: 0.8 }}>
                Informazioni
              </h5>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col xs={12}>
                <Container className="d-flex ps-3 pt-2">
                  <Col xs={12}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed assumenda nesciunt quis beatae,
                      excepturi ullam officia similique fugit qui maiores eum earum doloremque possimus corporis
                      quisquam culpa rem ex.
                    </p>
                  </Col>
                </Container>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Info;
