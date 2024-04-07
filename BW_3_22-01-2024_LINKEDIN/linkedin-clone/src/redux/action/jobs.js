export const SET_JOBS = "SET_JOBS";
export const SET_QUERY = "SET_QUERY";

export const fetchJobs = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDYwOTE1MDUsImV4cCI6MTcwNzMwMTEwNX0.wH2VfmxlAU88LH_llTaiiDJwpbdcCfSgscNbK5cy1CY ",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let result = await response.json();

        dispatch({ type: SET_JOBS, payload: result });
        console.log("jobs", result);
      } else {
        throw new Error("Fetch Profilo Fallita");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const setSearchQuery = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

export const searchJobs = () => {
  return async (dispatch, getState) => {
    try {
      const category = getState().jobs.category;
      let response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=10`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDYwOTE1MDUsImV4cCI6MTcwNzMwMTEwNX0.wH2VfmxlAU88LH_llTaiiDJwpbdcCfSgscNbK5cy1CY ",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let result = await response.json();

        dispatch({ type: SET_JOBS, payload: result });
        console.log("jobs", result);
      } else {
        throw new Error("Fetch Profilo Fallita");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
