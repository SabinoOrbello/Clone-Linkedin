export const SET_POST = "SET_POST";

const post = () => {
  return async (dispatch) => {
    console.log("Ciao Sono POSTFETCH");
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        let result = await resp.json();
        console.log(result);
        dispatch({
          type: SET_POST,
          payload: result,
        });
      } else {
        throw new Error("FALLIMENTO ASSOLUTO");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export default post;
