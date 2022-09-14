import { DataSource } from "typeorm";
import AppDataSource  from "../../../data-source";
import Request from "supertest"
import app from "../../../app";
import { mockedAuthor, mockedCategory, mockedEbook, mockedUser, mockedUserLoginAdm, mockedUserLoginNotAdm, mockedUserNoAdm } from "../../mocks";

describe("Testing the ebook,author and category routes", () => {
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
    
    test("Should be able to create a new Author", async () => {
        const createUser = await Request(app).post("/users").send(mockedUser)
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const response = await Request(app).post("/authors").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedAuthor)
        
        mockedEbook.author = response.body.id
        
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
    })
    test("Should not be able to create a new Author already created", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const response = await Request(app).post("/authors").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedAuthor)
        
        
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })

    test("Should not be able to create a new Author without Authorization", async () => {
        const createUser = await Request(app).post("/users").send(mockedUserNoAdm)
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm)
        const response = await Request(app).post("/authors").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedAuthor)
        
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
    })

    test("Should not be able to create a new Author without Authentication", async () => {
        const response = await Request(app).post("/authors").send(mockedAuthor)
        
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
    })

    

    test("Should be able to create a new Category", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const response = await Request(app).post("/categories").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedCategory)
        
        mockedEbook.category = response.body.id
        

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
    })

    test("Should not be able to create a new Category already created", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const response = await Request(app).post("/categories").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedCategory)
        

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
    })

    test("Should not be able to create a new Category without Authorization", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginNotAdm)
        const response = await Request(app).post("/categories").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedCategory)

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
    })

    test("Should not be able to create a new Category without Authentication", async () => {
        const response = await Request(app).post("/categories").send(mockedCategory)

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
    })

    test("Should be able to create a new ebook", async () => {
        const login = await Request(app).post("/login").send(mockedUserLoginAdm)
        const response = await Request(app).post("/ebooks").set("Authorization",`Bearer ${login.body.token}`)
        .send(mockedEbook)
    
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("dateRelease")
        expect(response.body).toHaveProperty("bookCover")
        expect(response.body).toHaveProperty("value")
        expect(response.body).toHaveProperty("description")
        expect(response.body).toHaveProperty("language")
        expect(response.body).toHaveProperty("editionNumber")
        expect(response.body).toHaveProperty("numberPages")
        expect(response.body).toHaveProperty("country")
        expect(response.body).toHaveProperty("isbn")
        expect(response.body).toHaveProperty("author")
        expect(response.body).toHaveProperty("categories")
        expect(response.body).toHaveProperty("publishingCompany")

  });

  test("Should not be able to create a new ebook already created", async () => {
    const login = await Request(app).post("/login").send(mockedUserLoginAdm)
    const response = await Request(app).post("/ebooks").set("Authorization",`Bearer ${login.body.token}`)
    .send(mockedEbook)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("message")

});

test("Should not be able to create a new ebook without Authorization", async () => {
    const login = await Request(app).post("/login").send(mockedUserLoginNotAdm)
    const response = await Request(app).post("/ebooks").set("Authorization",`Bearer ${login.body.token}`)
    .send(mockedEbook)
    

    expect(response.status).toBe(401)
    expect(response.body).toHaveProperty("message")

});

test("Should not be able to create a new ebook without Authentication", async () => {
    const response = await Request(app).post("/ebooks").send(mockedEbook)

    expect(response.status).toBe(401)
    expect(response.body).toHaveProperty("message")

});



})