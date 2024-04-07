import { Col, Container, Row } from "react-bootstrap";
import JobElement from "./JobElement";
import { useSelector } from "react-redux";
import JobElementDetails from "./JobElementDetails";
import { useEffect, useRef, useState } from "react";
import JobsSideDetails from "./JobsSideDetails";
import { useParams } from "react-router";
import MiniFooter from "./MiniFooter";

const JobsDetails = () => {
  // ---------JOB ID
  const { jobid } = useParams();

  const [jobId, setJobId] = useState("");

  const jobs = useSelector((state) => state.jobs.jobs.data);
  const jobsSlice = jobs.slice(0, 20);

  const [jobSlicePrimary, setJobsSlicePrimary] = useState(jobsSlice);

  const firstJobElementRef = useRef();

  useEffect(() => {
    setJobId(jobid);
  }, []);

  useEffect(() => {
    if (jobSlicePrimary.length > 0 && firstJobElementRef.current) {
      setTimeout(() => {
        firstJobElementRef.current.focus();
      }, 0);
    }
  }, [jobSlicePrimary]);

  return (
    <>
      <div className="mt-0 JobsDetailsContainer ">
        <Row className="">
          <Col xs={1}></Col>
          <Col xs={5} className="border JobsDetailsTopLeftRound  bg-white">
            <Row className="bg-Link JobsDetailsTopLeftRound text-white  ">
              <h6 className="mt-4 mb-0 ">Le principali offerte di lavoro per te</h6>
              <p className="mt-1 subText text-white">{`${jobSlicePrimary.length} risultati`}</p>
            </Row>

            <div className="JobDetails">
              {jobSlicePrimary.map((job, index) => (
                <JobElementDetails
                  job={job}
                  controlloId={jobId}
                  id={job._id}
                  key={`job-key-${job._id}`}
                  setJobId={setJobId}
                  ref={index === 0 ? firstJobElementRef : null}
                />
              ))}
              <Row className=" rounded-bottom-3 border border-bottom-1">
                <Col className="d-flex justify-content-center align-items-center p-2 text-secondary">
                  <i class="bi bi-caret-left-fill fontBold cursor me-2"></i>
                  <button
                    className="btn btn-outline-secondary  me-2 py-1  rounded-circle"
                    onClick={() => setJobsSlicePrimary(jobs.slice(0, 20))}
                  >
                    1
                  </button>
                  <button
                    className="btn btn-outline-secondary  me-2 py-1  rounded-circle"
                    onClick={() => setJobsSlicePrimary(jobs.slice(21, 41))}
                  >
                    {" "}
                    2{" "}
                  </button>
                  <button
                    className="btn btn-outline-secondary  me-2 py-1  rounded-circle"
                    onClick={() => setJobsSlicePrimary(jobs.slice(42, 62))}
                  >
                    {" "}
                    3{" "}
                  </button>
                  <button
                    className="btn btn-outline-secondary  me-2 py-1  rounded-circle"
                    onClick={() => setJobsSlicePrimary(jobs.slice(63, 83))}
                  >
                    {" "}
                    4{" "}
                  </button>
                  <i className="bi bi-caret-right-fill fontBold cursor"></i>
                </Col>
              </Row>
              <MiniFooter />
            </div>
          </Col>
          <Col xs={5} className="bg-white borderJobsDetails jobDetailsContainer">
            {jobId == "" ? <></> : <JobsSideDetails id={jobId} jobs={jobs} />}
          </Col>
          <Col xs={1}></Col>
        </Row>
      </div>
    </>
  );
};

export default JobsDetails;
