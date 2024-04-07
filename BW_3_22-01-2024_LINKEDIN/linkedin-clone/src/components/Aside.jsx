import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as LinkedIn_icon } from "../images/LinkedIn_icon.svg";
import AsideFriends from "./AsideFriends";

const Aside = () => {
  return (
    <Row>
      <Col>
        <div>
          <Row>
            <Col>
              <div className="bg-white mb-2 rounded border border-seondary-light">
                <div>
                  <div className="d-flex justify-content-between mx-2 mt-2">
                    <h5>Lingua del profilo</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </div>
                  <p className="mx-2">Italiano</p>
                </div>

                <hr />

                <div>
                  <div className="d-flex justify-content-between mx-2 mt-2">
                    <h5>Public profile &amp; URL</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </div>
                  <p className="mx-2">www.linkedin.com/in/utente-epicode-743b6b178</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="gx-0 px-0">
            <img
              src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              alt="immagine linkedin"
              className=" rounded border border-seondary-light"
            />
          </Row>
          <Row>
            <Col>
              <div className="bg-white mt-2 rounded border border-seondary-light p-4">
                <h6 className="mb-4">Profili consultati</h6>
                <AsideFriends />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="bg-white mt-2 rounded border border-seondary-light">
                <div className="d-flex align-items-center ms-2 mt-2 ">
                  <LinkedIn_icon style={{ width: "20px", height: "20px" }} />
                  <h6 className="ms-2">LEARNING</h6>
                </div>
                <p className="mx-2">Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
                <div className="d-flex">
                  <a href="#">
                    <img
                      src="https://media.licdn.com/dms/image/C560DAQHW0jBDP9jf_w/learning-public-crop_60_100/0/1636401127307?e=1706536800&amp;v=beta&amp;t=kNO_m59SqZsiDeENIpJ3Qydpjqk9lq-vLyDF17ZZ1E4"
                      loading="lazy"
                      alt=""
                      id="ember1271"
                      className="mx-2"
                    ></img>
                  </a>
                  <span className="fw-bold">Elementi essenziali per riunoni virtuali e ibride</span>
                </div>
                <div className="d-flex">
                  <a href="#">
                    <img
                      src="https://media.licdn.com/dms/image/C560DAQGy15jUxtIRsw/learning-public-crop_60_100/0/1636399971907?e=1706536800&amp;v=beta&amp;t=gk2xU_1BHPj3R3hBWfiqofUuhtPuRNieyx6ZDuuUlzY"
                      loading="lazy"
                      alt=""
                      className="mx-2 my-2"
                    ></img>
                  </a>
                  <span className="fw-bold">Essere un dipendente ibrido o virtuale efficace</span>
                </div>
                <div className="d-flex">
                  <a href="#">
                    <img
                      src="https://media.licdn.com/dms/image/C4E0DAQE7fOlRlDJuvA/learning-public-crop_60_100/0/1568057823406?e=1706536800&amp;v=beta&amp;t=cEl0fstPv0_IsAmml3VfLsrl5i00QXzlyP4WLgPtBe8"
                      loading="lazy"
                      alt=""
                      className="mx-2 mb-2"
                    />
                  </a>
                  <span className="fw-bold">Creare conversazioni positive con clienti...</span>
                </div>
                <p className="text-center text-secondary my-2">Visualizza i miei suggermenti</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Aside;
