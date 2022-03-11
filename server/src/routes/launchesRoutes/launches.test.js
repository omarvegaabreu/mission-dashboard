const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("it should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", () => {
  test("It should be 400 response.Missing launch information.", async () => {
    const response = await request(app).post("/launches").expect(400);
  });
  test("it should be 400 response, invalid date.", async () => {
    const response = await await request(app)
      .post("/launches")
      .send({
        mission: "gg aby",
        rocket: "Explorer IS1",
        target: "Kepler-186 f",
        launchDate: "wrong date",
      })
      .expect(400);
  });
  test("it should respond with 201 created", async () => {
    const response = await request(app).get("/launches").send({
      mission: "gg aby",
      rocket: "Explorer IS1",
      target: "Kepler-186 f",
      launchDate: "December 31,2011",
    });
    expect(201);
  });
});
