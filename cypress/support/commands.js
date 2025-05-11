Cypress.Commands.add('buscarProduto', (nomeProduto) => {
    cy.get('#twotabsearchtextbox').should('be.visible').type(nomeProduto);
    cy.get('#nav-search-submit-button').should('be.visible').click();
});

Cypress.Commands.add('selecionarProduto', (nomeProduto) => {
    cy.contains(nomeProduto).should('be.visible').click();
});

Cypress.Commands.add('adicionarAoCarrinho', () => {
    cy.get('#a-autoid-2-announce').should('be.visible').click();
});

Cypress.Commands.add('acessarCarrinho', () => {
    cy.get('#nav-cart-count').should('be.visible').click();
});

Cypress.Commands.add('capturarPreco', () => {
    cy.get('#sc-subtotal-amount-activecart > .a-size-medium', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then((texto) => parseFloat(texto.replace('R$', '').replace('.', '').replace(',', '.')));
});

Cypress.Commands.add('aumentarQuantidade', () => {
    cy.get('[aria-label="Aumentar a quantidade em um"] > .a-icon')
        .should('be.visible')
        .click();
});
