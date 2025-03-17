const server = require("../../src/server");
const session = require("supertest");
const agent = session(server);

describe("Testeando rutas", () => {
  describe("Testeando que GET /rickandmorty/character/:id funciona", () => {
    it("Responde con status 200 para el character con id 1", async () => {
      try {
        const result = await agent.get("/rickandmorty/character/1");
        expect(result.statusCode).toBe(200);
      } catch (err) {
        throw new Error(err);
      }
    });
    it("Responde con un objeto con propiedades id, name, status, species, image, gender, origin, location, type", async () => {
      try {
        const { body } = await agent.get("/rickandmorty/character/1");
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("name");
        expect(body).toHaveProperty("status");
        expect(body).toHaveProperty("species");
        expect(body).toHaveProperty("image");
        expect(body).toHaveProperty("gender");
        expect(body).toHaveProperty("origin");
        expect(body).toHaveProperty("location");
        expect(body).toHaveProperty("type");
      } catch (error) {
        throw new Error(err);
      }
    });
  });
});
