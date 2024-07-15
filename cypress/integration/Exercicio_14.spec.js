/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it(' marcando checkbox, verificando ambos estão marcadas, depois desmarcando o ultimo e verificando se está desmarcado' , function() {
        
    cy.get('input[type="checkbox"]') // marcando ckeck com a função check   
        .check() // marca todos com o tyoe "checkbox"
        .should('be.checked') // verifica se todos estão marcados
        .last() // selecionado o ultimo checkbox
        .uncheck() // desmarca o ultimo checkbox
        .should('not.be.checked') // verificar se o checkbox está desmarcado

      });
    });


