/// <reference types="cypress" />

describe('Adicionar produto ao carrinho e validar preços', () => {
    const produto = 'Huggies Fralda Premium Natural Care M 32 Un';

    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve adicionar 1 unidade ao carrinho e atualizar para 2, validando o preço no carrinho', () => {
        cy.buscarProduto(produto);
        cy.selecionarProduto(produto);
        cy.adicionarAoCarrinho();
        cy.acessarCarrinho();

        cy.capturarPreco().then((precoUnitario) => {
            cy.log('Preço unitário: ', precoUnitario);

            cy.aumentarQuantidade();


            cy.wait(2000);

            cy.capturarPreco().then((precoTotalAtualizado) => {
                cy.log('Preço total atualizado: ', precoTotalAtualizado);
                expect(precoTotalAtualizado).to.equal(precoUnitario * 2);
            });
        });
    });
});
