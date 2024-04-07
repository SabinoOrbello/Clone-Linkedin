import React, { useState } from "react";
import { ReactComponent as LinkedIn_icon } from "../images/LinkedIn_icon.svg";
import { HouseDoorFill } from "react-bootstrap-icons";
import LogoNet from "../images/Icon_Nav/LogoNet";
import LogoJob from "../images/Icon_Nav/LogoJob";
import LogoMsn from "../images/Icon_Nav/LogoMsn";
import LogoHome from "../images/Icon_Nav/LogoHome";
import UserNavbar from "../images/UserNavbar";
import LogoNews from "../images/Icon_Nav/LogoNews";
import LogoEmpl from "../images/Icon_Nav/LogoEmpl";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { searchJobs, setSearchQuery } from "../redux/action/jobs";

function LinkNav() {
  const navigate = useNavigate();
  const [searchCategory, setSearchCategory] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setSearchQuery(searchCategory));
    dispatch(searchJobs());
  };

  return (
    <Navbar className="bg-white sticky-top py-0 pt-1  mb-3 ">
      <Container className="">
        <div className="d-flex">
          <LinkedIn_icon className="icon me-3  cursor " />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Cerca"
              className="inputNav py-0"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            />
          </form>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <LogoHome />
          <LogoNet />
          <LogoJob />
          <LogoMsn />
          <LogoNews />
          <UserNavbar />
          <LogoEmpl />
        </div>

        <a href="#login">Prova Premium per 0 EUR</a>
      </Container>
    </Navbar>
  );
}

export default LinkNav;
