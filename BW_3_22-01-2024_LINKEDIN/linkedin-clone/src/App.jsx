import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkNav from "./components/LinkNav";
import Main from "./components/Main";
import OtherProfile from "./components/OtherProfile";
import Jobs from "./components/Jobs";
import Home from "./components/Home";
import JobsDetails from "./components/JobsDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LinkNav />
        <Routes>
          <Route path="/profile" element={<Main />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile/:userId" element={<OtherProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/jobsdetails/:jobid" element={<JobsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
