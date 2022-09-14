import { DataSource } from "typeorm";
import AppDataSource  from "../../../data-source";
import Request from "supertest"
import app from "../../../app";
import { mockedPayment, mockedUser, mockedUserLoginAdm } from "../../mocks";
import { response } from "express";

describe("Testing payments routes", () => {
    let connection: DataSource;
    beforeAll(async () => {
      await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err) => {
          console.error("Error during Data Source initialization", err);
        });
    });
  
    afterAll(async () => {
      await connection.destroy();
    });

    test("Should be able to create a payment method", async () => {
        const user = await Request(app).post("/users").send(mockedUser) 
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)

        const response = await Request(app).post("/payment").send(mockedPayment).set("Authorization",`Bearer ${login.body.token}`)

        expect(response.status).toBe(201)
        expect(response.body.payment).toHaveProperty("id")
        expect(response.body.payment).toHaveProperty("cardName")
        expect(response.body.payment).toHaveProperty("numberCard")
        expect(response.body.payment).toHaveProperty("expireDate")
        expect(response.body.payment).toHaveProperty("user")


    })
})