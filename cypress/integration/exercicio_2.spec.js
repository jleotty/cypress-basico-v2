/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });
    
    it('preenche os campos obrigatórios e envia o formulário e valida mensagem de sucesso', function() {
      
      const LongTest  = 'utilizado para criar textos longos para adicionar nos testes'  
      cy.get('#firstName').type('Julian', {delay: 0});
      cy.get('#lastName').type(' Dose Leotty', {delay: 0});
      cy.get('#email').type('julian@teste.com',{delay: 0});
      cy.get('#phone').type('51995419525', {delay: 0});
      cy.get('#open-text-area').type(LongTest, {delay: 0});
      cy.get('button[type="submit"]',{delay: 0}).click();
      cy.get('.success').should('be.visible', {delay: 0}); // estamos procurando pela a classe "sucess"
     
    });
    
  
    it('Preenche o campo de e-mail incorretamente e valida mensagem de erro', function() {
      
      const LongTest  = 'utilizado para criar textos longos para adicionar nos testes'  
      cy.get('#firstName').type('Julian', {delay: 0});
      cy.get('#lastName').type(' Dose Leotty', {delay: 0});
      cy.get('#email').type('julian',{delay: 0});
      cy.get('#phone').type('51995419525', {delay: 0});
      cy.get('#open-text-area').type(LongTest, {delay: 0});
      cy.get('button[type="submit"]',{delay: 0}).click();
      cy.get('.error').should('be.visible', {delay: 0}); // estamos procurando pela a classe "error"
     
    });
  });
  