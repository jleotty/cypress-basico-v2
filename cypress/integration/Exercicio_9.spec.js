/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('seleciona um produto (YouTube) por seu texto', function(){

    cy.get('#product').select('YouTube').should('have.value','youtube') //adicionei a classe do botão de seleção, apontei o tipo ".select" e procurei pelo o nome da opção, logo após validei se o nome youtube está mesmo.

    });

});
    