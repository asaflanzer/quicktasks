describe('/settings', () => {
  beforeEach(() => {
    cy.login();

    cy.visit('/#/settings');
  });

  it('greets with your settings', () => {
    cy.contains('h1', 'Your setting');
  });
});
