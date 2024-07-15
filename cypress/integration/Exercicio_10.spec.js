/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){

    cy.get('#product').select('Mentoria').should('have.value','mentoria') //adicionei a classe do botão de seleção, apontei o tipo ".select" e procurei pelo o nome da opção, logo após validei se o nome youtube está mesmo.

    });

});
    