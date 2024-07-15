/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('Fazendo upload de arquivo', function() {

        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json')

        });
    });
});