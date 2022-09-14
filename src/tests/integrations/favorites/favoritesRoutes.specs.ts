import { DataSource } from "typeorm";
import AppDataSource  from "../../../data-source";
import Request from "supertest"
import app from "../../../app";
import { mockedAuthor, mockedCategory, mockedEbook, mockedFavorites, mockedOrder, mockedUser, mockedUserLoginAdm } from "../../mocks";

describe("Testing the favorites routes", () => {
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

    test("Should Be able to create a favorites",async () => {
        const createUser = await Request(app).post("/users").send(mockedUser)
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        
        const author = await Request(app).post("/authors").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedAuthor)
        const category = await Request(app).post("/categories").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedCategory)
        
        mockedEbook.author = author.body.id
        mockedEbook.category = category.body.id
        
        const createEbook = await Request(app).post("/ebooks").send(mockedEbook).set("Authorization",`Bearer ${login.body.token}`)
        
        mockedFavorites.bookId = createEbook.body.id
        mockedFavorites.userId = createUser.body.id
        
        const Response = await Request(app).post("/favorites").send(mockedFavorites).set("Authorization",`Bearer ${login.body.token}`)

        
        expect(Response.status).toBe(201)
        expect(Response.body).toHaveProperty("message")
        expect(Response.body.favorites).toHaveProperty("id")

    })
})