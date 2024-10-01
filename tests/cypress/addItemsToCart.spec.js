describe('Shopping Cart', () => {
  it('Should add items to the cart', () => {
    cy.visit('http://localhost:3000');  // Replace with your actual app URL
    cy.get('.add-to-cart-button').click();  // Assuming a button with this class
    cy.get('.cart-item').should('have.length', 1);
  });
});
