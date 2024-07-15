Cypress.Commands.add('ativarcomando', function() {


    const textolongo  = 'utilizado para criar textos longos para adicionar nos testes'  
      cy.get('#firstName').type('Julian', {delay: 0});
      cy.get('#lastName').type(' Dose Leotty', {delay: 0});
      cy.get('#email').type('julian@gmail.com',{delay: 0});
      cy.get('#phone').type('51995419525', {delay: 0});
      cy.get('#open-text-area').type(textolongo, {delay: 0});
      cy.contains('.button', 'Enviar').click(); // cliquei no botão enviar apontando a classe mais o nome do botão
      cy.get('.success').should('be.visible')


})