import friends from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AsideFriends = () => {
  let results = useSelector((state) => state.friends.friendsState);
  let resultsSlice = results.slice(5, 10);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(friends());
  }, [dispatch]);
  // const dispatch = useDispatch()
  return resultsSlice.map((user) => (
    <>
      <Row className="mb-2 border-bottom">
        <Col xs={3}>
          <img src={user.image} className="icon asideImg rounded-circle" alt="immagine profilo utente" />
        </Col>
        <Col xs={8} className="mb-3">
          <Row className="mt-0">
            <Link
              to={`/profile/${user._id}`}
              className="ps-1 mb-1 h6 cursor text-decoration-none"
            >{`${user.name} ${user.surname}`}</Link>
            <p className=" ps-1 asideJob mb-1 ">{`${user.title} presso Comany Name`}</p>
          </Row>

          <Row>
            <Col xs={8} className="ps-0">
              <button className="btn btn-outline-secondary rounded-pill border-2 p-1 px-3 fw-bold">
                <i class="bi bi-plus fw-bold"></i> Segui
              </button>
            </Col>
          </Row>
        </Col>

        {/* <div className="d-flex">
          <img src={user.image} className="icon" alt="immagine profilo utente" />
          <p>{user.title}</p>
        </div> */}
      </Row>
    </>
  ));
};

export default AsideFriends;
