/// <reference types="Cypress" />


        it('Testando diretamente a página privacy', function () {

        
        cy.visit('./src/privacy.html');
       
        cy.contains('Talking About Testing').should('be.visible', '#white-background');
      
          
    });
