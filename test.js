var XooaClient = require("./");

var xooaClient = new XooaClient();
xooaClient.setApiToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiJaOVBUS0JQLUtNQk1BR1otS1ZaWDVKNi1LRTVaRzRHIiwiQXBpU2VjcmV0IjoiU09pSGlTZkZ2Q0tjN244IiwiUGFzc3BocmFzZSI6IjJlY2VjMThkM2MzYzhjODRhZGFkZmU5ZWYyZjlkNTcwIiwiaWF0IjoxNTk3NzU1ODc1fQ.kYo_mjFDbiRAqHKVkK_Pq_Sh2d1-mBw0Otg28ASIcfc"
);

async function test() {
  let [error, pendingResponse, data] = await xooaClient.query(
    "get",
    {},
    { args: ["a"] }
  );
  console.log(error && error.response.body);
  console.log("pendingResponse", pendingResponse);
  console.log("data", data);
}

test().then(console.log).catch(console.error);
