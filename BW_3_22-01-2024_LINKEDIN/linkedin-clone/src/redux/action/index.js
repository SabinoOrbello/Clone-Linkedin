export const SET_FRIENDS = "SET_FRIENDS";

const friends = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        let result = await resp.json();

        dispatch({
          type: SET_FRIENDS,
          payload: result,
        });
      } else {
        throw new Error("SEI UN FALLITO");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export default friends;
