//Forgot password page

class ForgotPasswordPage {
    enterEmail(email) {
      cy.get('#input-email').type('sarojagarikina15@gmail.com'); //Enter email
    }
  
    clickContinue() {
      cy.get('[type="submit"]').click(); //click submit button
    }
  }
  
  export default ForgotPasswordPage;
  