/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('acessa a página da política de privacidade removendo o target e então clicando no link,', function() {
      
        cy.get('#privacy > a').should('have.attr', 'target', '_blank') // verificando se o link de privacidade que abriria uma nova aba se encontra, "have.attr" serve para validar atributo
       

        
        
    });
});
