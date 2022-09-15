import { DataSource } from "typeorm";
import AppDataSource  from "../../../data-source";
import Request from "supertest"
import app from "../../../app";
import { mockedUser, mockedUserLoginAdm, mockedUserLoginNotAdm, mockedUserNoAdm, mockedUserNotExists, mockedUserUpdate, mockedUserUpdateAddress } from "../../mocks";

describe("Testing the user and login routes", () => {
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
  
    test("Should be able to create a new user Adm", async () => {
          const response = await Request(app).post("/users").send(mockedUser)
          expect(response.status).toBe(201)
          expect(response.body).toHaveProperty("id")
          expect(response.body).toHaveProperty("address")
          expect(response.body.address).toHaveProperty("id")
          expect(response.body).toHaveProperty("email")
          expect(response.body).not.toHaveProperty("password")
          expect(response.body).toHaveProperty("isAdm")
    });

    test("Should be able to create a new user not Adm", async () => {
        const response = await Request(app).post("/users").send(mockedUserNoAdm)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("address")
        expect(response.body.address).toHaveProperty("id")
        expect(response.body).toHaveProperty("email")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body).toHaveProperty("isAdm")
  });

  test("Should not be able to create a user already exists", async () => {
    const response = await Request(app).post("/users").send(mockedUserNoAdm)
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("message")
});

    test("Should be able to make a login", async () => {
        const response = await Request(app).post("/login").send(mockedUserLoginAdm)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("token");
    })

    test("Should not be able to make a login", async () => {
        const response = await Request(app).post("/login").send(mockedUserNotExists)
        expect(response.status).toBe(403)
        expect(response.body).toHaveProperty("message");
    })
    
    test("Should be able to return a list of all registered users", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginAdm);
        const response = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);

        expect(response.status).toBe(200)

        expect(response.body).toHaveProperty("map")
      });

      test("Should be able to return a user of all registered users list", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginAdm);
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
        const response = await Request(app).get(`/users/profile/${User.body[0].id}`).set("Authorization",`Bearer ${login.body.token}`);
        
        expect(response.status).toBe(200)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("isAdm")
      });

      test("Should not be able to return a user of all registered users list", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm);
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
        const response = await Request(app).get(`/users/profile/${User.body.id}`).set("Authorization",`Bearer ${login.body.token}`);
        
        expect(response.status).toBe(404)

        expect(response.body).toHaveProperty("message")
      });

      test("Should not be able to return a list of all registered users without permission", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm);
        const response = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);

        expect(response.status).toBe(401)

        expect(response.body).toHaveProperty("message")
      });
    
      
      
      test("Should not be able to update a address user created", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm);
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
        const response = await Request(app).patch(`/users/${User.body.id}/address`).set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedUserUpdateAddress);
        
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
        
    });
    
    test("Should not be able to update a user created without permission", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm);
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
        const response = await Request(app).patch(`/users/${User.body.id}`).set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedUserUpdate);
        
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")

    });
    
    test("Should not be able to update a user created without Authentication", async () => {
        const User = await Request(app).get("/users");
        const response = await Request(app).patch(`/users/${User.body.id}`)
        .send(mockedUserUpdate);
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
        
    });
    
    test("Should be able to update a address user created", async () => {
      const login = await Request(app).post("/login").send(mockedUserLoginAdm);
      const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
      const response = await Request(app).patch(`/users/${User.body[0].id}/address`).set("Authorization",`Bearer ${login.body.token}`)
      .send(mockedUserUpdateAddress);
     
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("message")
      
    });
    
    test("Should be able to update a user created", async () => {
      const login = await Request(app).post("/login").send(mockedUserLoginAdm);
      const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
      const response = await Request(app).patch(`/users/${User.body[1].id}`).set("Authorization",`Bearer ${login.body.token}`)
      .send(mockedUserUpdate);
      
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("message")

    });
    
    test("Should not be able to delete a user created without permission", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm);
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
        const response = await Request(app).delete(`/users/${User.body.id}`).set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedUserUpdate);
        
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
        
    });
    
    test("Should not be able to delete a user created without Authentication", async () => {
        const User = await Request(app).get("/users");
        const response = await Request(app).delete(`/users/${User.body.id}`)
        .send(mockedUserUpdate);
        
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
        
      });
      
      test("Should be able to delete a user created", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginAdm);
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`);
        const response = await Request(app).delete(`/users/${User.body.id}`).set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedUserUpdate);
        
        expect(response.body).toHaveProperty("message")
  
      });

  });
