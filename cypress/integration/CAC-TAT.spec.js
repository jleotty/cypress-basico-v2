/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() { // titulo do conjunto de testes
    it('verifica o título da aplicação', function() { 

        cy.visit('./src/index.html') // cy,visita vai acessar a página 
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT') // cy.title vai validar se o titulo está correto
  
    })
  })
  