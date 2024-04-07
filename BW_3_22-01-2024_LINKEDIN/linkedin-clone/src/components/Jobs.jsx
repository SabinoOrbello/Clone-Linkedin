import { Col, Container, Row } from "react-bootstrap";
import JobElement from "./JobElement";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "../redux/action/jobs";
import JobsLeftAside from "./JobsLeftAside";
import Spinner from "./Spinner";

const Jobs = () => {
  const jobs = useSelector((state) => state.jobs.jobs.data);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  console.log(jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            {" "}
            <JobsLeftAside />
          </Col>

          <Col xs={6} className="border rounded-3 rounded bg-white">
            <h5 className="mt-4 mb-0">Le principali offerte di lavoro per te</h5>
            <p className="text-muted mt-1 subText">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
            {isLoading ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                <div className="noBorder">
                  {jobs.slice(0, 10).map((job) => (
                    <JobElement job={job} key={job.id} />
                  ))}
                </div>
                <Row className="JobsEndButton rounded-bottom-3">
                  <Col className="d-flex justify-content-center justify-content-center  p-2 text-secondary">
                    <h5 className="me-2">Mostra tutto</h5>
                    <i className="bi bi-arrow-right fontBold"></i>
                  </Col>
                </Row>
              </>
            )}
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
