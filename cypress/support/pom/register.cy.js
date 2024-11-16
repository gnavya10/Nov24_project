describe('Register functionality', () => {
    it('Registration test', () => {

    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/register') //Website Url

    cy.get('#input-firstname').type('Navya') //Enter firstname
    cy.get('#input-lastname').type('garikina') //Enter lastname
    cy.get('#input-email').type('garikinanavya10@gmail.com') //Enter email
    cy.get('#input-telephone').type('7674811125') //Enter mobile number
    cy.get('#input-password').type('nav123') //Enter password
    cy.get('#input-confirm').type('nav123') //Re-enter password
    cy.get('[name="agree"]').click() //tick on agree
    cy.get('btn btn-primary').click() //click on submit


        
    });
});