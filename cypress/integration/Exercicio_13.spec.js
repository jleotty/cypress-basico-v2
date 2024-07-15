/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it(' marca cada tipo de atendimento utulizando "wrap" e "each"' , function() {
        
    cy.get('input[type="radio"]') // marcando elemento com a função check   
        .should('have.length', 3) // Aqui ele está validando se possui 3 botão para marcar
        .each(function($radio) {  // usando "each" para encadear cada um dos elementos, each recebe uma função
          cy.wrap($radio).check() // aqui ele está empactoando os elementos para logo abaixo ele realizar a validação
          cy.wrap($radio).should('be.checked')   
      });
    });
});

