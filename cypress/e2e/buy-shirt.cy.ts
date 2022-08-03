describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get(
        "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    ).click();
    cy.get("[style*='display: block;'] .button-container > a").click();
    cy.get(".cart_navigation span").click();

    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");

    // Login
    cy.get("#SubmitLogin").click();
    // Proceder con el checkout
    cy.get("[name='processAddress']").click();
    // Aceptar los terminos y condiciones
    cy.get("#cgv").click();
    // Proceed to purchase
    cy.get("[name='processCarrier']").click();
    // Pay by bank
    cy.get(".bankwire").click();
    // Confirm order
    cy.get("#cart_navigation > [type='submit']").click();
    // Verify purchase
    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
