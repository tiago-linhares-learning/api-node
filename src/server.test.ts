import request from "supertest";
import app from "./server";

describe("Testando a API", () => {
  it("Deve retornar a mensagem de API funcionando", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "API funcionando!" });
  });
});
