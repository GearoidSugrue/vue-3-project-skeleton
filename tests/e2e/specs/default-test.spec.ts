describe('Default test', () => {
  it('should load app', () => {
    cy.visit('/');
    cy.dataCy('app-container').should('exist');
  });
});
