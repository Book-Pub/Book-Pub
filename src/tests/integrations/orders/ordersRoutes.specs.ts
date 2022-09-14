import { DataSource } from "typeorm";
import AppDataSource  from "../../../data-source";
import Request from "supertest"
import app from "../../../app";
import { mockedAuthor, mockedCategory, mockedEbook, mockedOrder, mockedUser, mockedUserLoginAdm, mockedUserLoginNotAdm, mockedUserNoAdm } from "../../mocks";

describe("Testing the orders routes", () => {
    let connection: DataSource;
    beforeAll(async () => {
      await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err) => {
          
        });
    });
  
    afterAll(async () => {
      await connection.destroy();
    });

    test("Should be able to Create a new order",async ()=>{
        const createUser = await Request(app).post("/users").send(mockedUser)
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const author = await Request(app).post("/authors").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedAuthor)
        const category = await Request(app).post("/categories").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedCategory)
        mockedEbook.author = author.body.id
        mockedEbook.category = category.body.id
        
        const createEbook = await Request(app).post("/ebooks").send(mockedEbook).set("Authorization",`Bearer ${login.body.token}`)
        
        mockedOrder.ebooksId = createEbook.body.id

        const response = await Request(app).post("/orders").set("Authorization",`Bearer ${login.body.token}`).send(mockedOrder)
        
        
        expect(response.status).toBe(201)
        expect(response.body.order).toHaveProperty("id")
        expect(response.body.order).toHaveProperty("user")
        expect(response.body.order).toHaveProperty("status")
    })

    test("Should not be able to Create a new order already created",async ()=>{
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`)        
        
        const createEbook = await Request(app).post("/ebooks").send(mockedEbook).set("Authorization",`Bearer ${login.body.token}`)
        
        mockedOrder.ebooksId = createEbook.body.id
        
        const response = await Request(app).post("/orders").set("Authorization",`Bearer ${login.body.token}`).send(mockedOrder)
        
        
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })

    test("Should not be able to Create a new order without Authorization",async ()=>{
        const createUser = await Request(app).post("/users").send(mockedUserNoAdm)
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm)
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`)        
        
        const createEbook = await Request(app).post("/ebooks").send(mockedEbook).set("Authorization",`Bearer ${login.body.token}`)
        
        mockedOrder.ebooksId = createEbook.body.id
        
        const response = await Request(app).post("/orders").set("Authorization",`Bearer ${login.body.token}`).send(mockedOrder)
        
        
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })

    test("Should not be able to Create a new order without Authentication",async ()=>{
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const User = await Request(app).get("/users").set("Authorization",`Bearer ${login.body.token}`)    
        
        const createEbook = await Request(app).post("/ebooks").send(mockedEbook)
        
        
        mockedOrder.ebooksId = createEbook.body.id
        
        const response = await Request(app).post("/orders").send(mockedOrder)
        
        
        
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })


})