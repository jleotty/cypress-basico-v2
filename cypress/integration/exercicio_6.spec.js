/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
      
        const textolongo  = 'Marcando checkbox do telefone para gerar erro, nessa caso não foi preenchido o campo telefônico'  
        cy.get('#open-text-area').type(textolongo, {delay: 0});
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
      });

});