import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { profileFetch, experiencesFetch, updateProfile } from "../redux/action/profile";
import { Plus, Square } from "react-bootstrap-icons";

const ProfileHome = () => {
  const profile = useSelector((state) => state.profile);
  const id = "6551e7bbc55e7e0018f83bfb";
  const dispatch = useDispatch();

  const [localProfile, setLocalProfile] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: "", // SERVER GENERATED, modificabile
    createdAt: "", // SERVER GENERATED
    updatedAt: "", // SERVER GENERATED
    __v: "", // SERVER GENERATED
    _id: "", // SERVER GENERATED
  });

  const handleUpdateProfile = () => {
    dispatch(updateProfile(localProfile));
    console.log(localProfile);
  };

  // ---------------------------------

  // -------IMAGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];
  };

  useEffect(() => {
    dispatch(profileFetch(id));
    dispatch(experiencesFetch(id));
    setLocalProfile(profile);
  }, [dispatch]);

  return (
    <>
      <Row className="profileContainer">
        <Col>
          <Row className="">
            <div className="position-relative p-0 cursor">
              <input type="file" id="bgImage" hidden />
              <label htmlFor="bgImage" className="bgProfile cursor ">
                <img
                  className="bgProfile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0lWaaWP-WmtxAAWkwJGAZFMyER0nyOUdsjF2d0aCap0mS1rO"
                  alt="profileBg"
                />
              </label>
              <div className="">
                <input type="file" id="profileImage" hidden />
                <label htmlFor="profileImage">
                  <img
                    className="fotoProfiloHome cursor "
                    src="https://media.gqitalia.it/photos/642e9d8bfc2b9ece8567af56/1:1/w_1079,h_1079,c_limit/therock.jpg"
                    alt="profilePicture"
                  />
                </label>
              </div>
            </div>
          </Row>

          <Container>
            <Row>
              <Col>
                <Row className="mt-4 ">
                  <h4 className="my-3">{`${profile.name} ${profile.surname}`}</h4>
                </Row>
                <Row className="gx-0">
                  <Col>
                    <p className="mb-2">{profile.title}</p>
                  </Col>
                </Row>
                <Row className="  text-secondary mt-0 ">
                  <Col className="d-flex">
                    <div>
                      <p className="mb-2">{profile.area}</p>
                      <Link className=" link-primary links mail-home-profile">{profile.email}</Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <div className="espandi-rete">
                  <p className="text-secondary mb-0 ">Collegamenti</p>
                  <p className="fw-bold ">Espandi la tua rete</p>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <div className="espandi-rete">
                  <p className="text-secondary mb-1">Accedi a strumenti e informazioni in esclusiva</p>
                  <div className="d-flex">
                    <Square className="text-warning bg-warning me-2" />
                    <p className="fw-bold competenze">Acquisisci nuove comptenze. Prova Premium gratuitamente</p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <p className="text-primary fw-bold">Gruppi</p>
                <div className="d-flex justify-content-between ">
                  <p className="text-primary fw-bold">Eventi</p>
                  <Plus className="fs-3" />
                </div>
                <p className="text-primary fw-bold">Hastag seguiti</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <p className="text-secondary text-center fw-bold espandi-rete">Scopri di più</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default ProfileHome;
