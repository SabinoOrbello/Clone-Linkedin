async function sendPost(postData) {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDYwOTE1MDUsImV4cCI6MTcwNzMwMTEwNX0.wH2VfmxlAU88LH_llTaiiDJwpbdcCfSgscNbK5cy1CY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (response.ok) {
      console.log("POST AVVENUTO" + postData);
      return response;
    }
  } catch (error) {
    console.error("Error", error);
  }
}

export default sendPost;
