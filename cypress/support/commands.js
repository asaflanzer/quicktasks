import { Cypress } from 'cypress';

// Login
Cypress.Command.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/users/login',
    body: {
      user: {
        email: 'joe@example.com',
        password: 'joe',
      },
    },
  }).then((res) => {
    window.localStorage.setItem('jwt', resp.body.user.token);
  });
});

// it('greets with Sign in', () => {
//   cy.contains('h1', 'Sign In');
// });

// it('links to #/register', () => {
//   cy.contains('Need an account?').should('have.attr', 'href', '#/register');
// });

// // Email
// it('requires email', () => {
//   cy.get('form').contains('Sign in').click();
//   cy.get('.error-messages').should('contain', "email can't be blank");
// });

// // Password
// it('requires password', () => {
//   cy.get('[data-test-email]').type('joe@example.com{enter}');
//   cy.get('.error-messages').should('contain', "password can't be blank");
// });

// // Email correct with wrong password
// it('requires valid username and password', () => {
//   cy.get('[data-test=email').type('joe@example.com');
//   cy.get('[data-test=password').type('invalid{enter}');
//   cy.get('.error-messages').should('contain', 'email or password is invalid');
// });

// it('Navigate to #/ on successful login', () => {
//   cy.get('[data-test=email').type('joe@example.com');
//   cy.get('[data-test=password').type('joe#{enter}');
//   cy.hash().should('eq', '#/');
// });

// Cypress.Command.add('loginAsNewUser', () => {
//   return cy.createNewUser().then((user) => {
//     window.localStorage.setItem('token', user.token);
//     return user;
//   });
// });

// Cypress.Command.add('assertRoute', (route) => {
//   cy.url().should('equal', `${window.location.origin}${route}`);
// });
