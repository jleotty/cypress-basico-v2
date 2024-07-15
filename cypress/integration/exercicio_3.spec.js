/// <reference types="Cypress" />

describe('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    beforeEach(function(){ //beforeeach é a mesma coisa que: antes de realizar o teste, executar seguinte comando
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });
  
    it('preenche os campos obrigatórios e envia o formulário', function() {
      
      const textolongo  = 'utilizado para criar textos longos para adicionar nos testes'  
      cy.get('#firstName').type('Julian', {delay: 0});
      cy.get('#lastName').type(' Dose Leotty', {delay: 0});
      cy.get('#email').type('julian',{delay: 0});
      cy.get('#phone').type('51995419525', {delay: 0});
      cy.get('#open-text-area').type(textolongo, {delay: 0});
      cy.get('button[type="submit"]').click();
      cy.get('.error').should('be.visible');
    });
 
  
  it.only('Testar se o campo telefônico aceita comente valores numericos', function() { //adicione "it.only" para ignorar os demais testes acima
    cy.get('#phone') // classe do campo telefônico
    .type('asvasdassad') // adicionando texto que teoricamente esse campo não deveria aceitar pois ele é apenas campo numerico
    .should('have.value','') // procurar se tem valor vazio no campo telefonico, nesse caso como é um campo númerico, o campo deve permanecer vazio para passar no teste
  });

});