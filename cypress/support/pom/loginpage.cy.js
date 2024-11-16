class LoginPage {
    visit() {
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login'); //Website Url
    }
  
    enterEmail(email) {
      cy.get('#input-email').type('sarojagarikina15@gmail.com'); //Enter email 
    }
  
    enterPassword(password) {
      cy.get('#input-password').type('nav123'); //Enter password
    }
  
    clickLogin() {
      cy.get('[type="submit"]').click(); //click on submit
    }
  
   clickForgotPassword() {
     cy.contains('Forgotten Password').click(); 
   }
  }
  
  export default LoginPage;
  