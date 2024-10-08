describe("Check if server is live", () => {
  it("server is live", () => {
    cy.visit("http://localhost:3000");
  });
});
