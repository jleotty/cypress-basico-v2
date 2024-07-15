/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });
    
    it('preenche os campos obrigatórios e envia o formulário e valida mensagem de sucesso', function() {
      
      const LongTest  = 'preenche e limpa os campos nome, sobrenome, email e telefone'  
      //preenchendo dados
      cy.get('#firstName').type('Julian').clear().should('have.value','');
      cy.get('#lastName').type(' Dose Leotty').clear().should('have.value','');
      cy.get('#email').type('julian@teste.com').clear().should('have.value','');
      cy.get('#phone').type('51995419525').clear().should('have.value','');
      cy.get('#open-text-area').type(LongTest).clear().should('have.value','');

      
    });

  

  });
  