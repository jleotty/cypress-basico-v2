/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('faz upload do arquivo utilizando fixture,', function() {

        cy.fixture('example.json').as('sampleFile') // Carrega o arquivo 'example.json' da pasta 'fixtures' e o alias como 'sampleFile'
        cy.get('input[type=file]') // Verifica se o nome do primeiro arquivo anexado é 'example.json'
        .selectFile('@sampleFile') // Verifica se o arquivo foi anexado corretamente
        .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json') // Verifica se o nome do primeiro arquivo anexado é 'example.json'

        });
    });
});
