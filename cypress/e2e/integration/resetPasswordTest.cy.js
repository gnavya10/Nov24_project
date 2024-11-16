//Import files

import LoginPage from '../../support/pom/loginpage.cy';
import ForgotPasswordPage from '../../support/pom/forgotpasswordpage.cy';
import ResetPasswordPage from '../../support/pom/resetpasswordpage.cy';


//describe block

describe('Password Reset Test', () => {
  const loginPage = new LoginPage();
  const forgotPasswordPage = new ForgotPasswordPage();
  const resetPasswordPage = new ResetPasswordPage();

//Before block
  before(() => {
    cy.fixture('user').then((user) => {
      cy.wrap(user).as('user');
    });
  });

//It block
  it('should reset the password', function() {
    loginPage.visit();
    loginPage.clickForgotPassword();

    forgotPasswordPage.enterEmail(this.user.email);
    forgotPasswordPage.clickContinue();

    // Assuming you have a way to check the email and get the reset link
    cy.task('getResetLink', this.user.email).then((resetLink) => {
     cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    });

    resetPasswordPage.enterNewPassword(this.user.newPassword);
    resetPasswordPage.confirmNewPassword(this.user.newPassword);
    resetPasswordPage.clickContinue();

    loginPage.enterEmail(this.user.email);
    loginPage.enterPassword(this.user.newPassword);
    loginPage.clickLogin();

    // Add assertions to validate successful login
    cy.url().should('include', 'account');
  });
});