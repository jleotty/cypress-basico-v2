/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique,', function() {
      
        cy.get('#privacy > a').invoke('removeAttr', 'target').click();
         //dessa forma a politica de privacidade abre na mesma aba pois cypress não sabe lidar com aba secundária

        cy.contains('Talking About Testing').should('be.visible')
        // validando se a informação de texte está contida na página
        
    });
});
