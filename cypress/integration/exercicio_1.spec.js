/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });
  
    it.only('preenche os campos obrigatórios e envia o formulário', function() {
      cy.get('#firstName').type('Julian', {delay: 0});
      cy.get('#lastName').type(' Dose Leotty', {delay: 0});
      cy.get('#email').type('julian@teste.com',{delay: 0});
      cy.get('#phone').type('51995419525', {delay: 0});
      cy.get('#open-text-area').type('realizando teste automatizado', {delay: 0});
      cy.get('button[type="submit"]').click();
      cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.', {delay: 0});
    });
  });
  