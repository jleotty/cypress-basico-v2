/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('marcando opção telefone com a função check', function() {

    
    cy.get('input[type="checkbox"][value="phone"]').check();

    cy.ativarcomando();


    });
});
