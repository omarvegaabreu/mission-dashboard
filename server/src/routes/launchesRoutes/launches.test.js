const request = require("supertest");

const app = require("../../app");
const testLaunchData = {
  mission: "gg aby",
  rocket: "Explorer IS1",
  target: "Kepler-186 f",
  launchDate: "December 31,2011",
};

const testLaunchDataMissingInformation = {
  mission: undefined,
  rocket: "Explorer IS1",
  target: "Kepler-186 f",
  launchDate: "December 31,2011",
};

const testLaunchDataWithoutDate = {
  mission: "gg aby",
  rocket: "Explorer IS1",
  target: "Kepler-186 f",
};

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
  test("it should be 400 response, invalid date format or missing date.", async () => {
    const response = await await request(app)
      .post("/launches")
      .send(testLaunchDataWithoutDate)
      .expect("Content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "invalid date",
    });
  });

  test("it should be 400 response, Missing launch information.", async () => {
    const response = await await request(app)
      .post("/launches")
      .send(testLaunchDataMissingInformation)
      .expect("Content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing launch information.",
    });
  });

  test("it should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(testLaunchData)
      .expect("Content-type", /json/)
      .expect(201);

    const requestDate = new Date(testLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(requestDate).toBe(responseDate);
    expect(response.body).toMatchObject(testLaunchDataWithoutDate);
  });
});
