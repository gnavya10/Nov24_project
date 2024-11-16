class ResetPasswordPage {
  enterNewPassword(password) {
    cy.get('#input-password').type('nav123');
  }

  confirmNewPassword(password) {
   // cy.get('#input-confirm').type('nav123');
  }

  clickContinue() {
    cy.get('[type="submit"]').click();
  }
}

export default ResetPasswordPage;
