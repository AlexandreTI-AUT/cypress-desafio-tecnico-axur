# 🧪 Automação de Testes com Cypress – Adicionar Produto ao Carrinho na Amazon Brasil

Este projeto automatiza o fluxo de adicionar um produto ao carrinho na Amazon Brasil, atualizar a quantidade e validar se o preço total reflete a multiplicação do valor unitário.

## 🚀 Instruções de Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/AlexandreTI-AUT/cypress-desafio-tecnico-axur
   cd nome-do-repo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute os testes no modo interativo (GUI)**
   ```bash
   npx cypress open
   ```

4. **Ou execute no modo headless (terminal)**
   ```bash
   npx cypress run
   ```

## 🧰 Framework Utilizado

**[Cypress](https://www.cypress.io/)** foi escolhido por ser um framework moderno, rápido e confiável para testes end-to-end. Ele permite:

- Escrita e leitura simples dos testes (JavaScript/TypeScript).
- Depuração eficaz com recarregamento automático e logs detalhados.
- Execução diretamente no navegador real.
- Ótimo suporte à comunidade e fácil integração em pipelines CI/CD.

## 📌 Estratégia de Automação

A automação foi estruturada com base nos seguintes pontos:

- **Comandos customizados:** criados para reutilizar ações comuns como busca de produto, adição ao carrinho e captura de preço.
- **Boa prática de visibilidade:** validações com `.should('be.visible')` antes de interações com elementos.
- **Separação de responsabilidades:** lógica central no arquivo `.spec.js` e ações repetitivas nos comandos em `cypress/support/commands.js`.
- **Validações numéricas:** comparação do valor total com o dobro do preço unitário, garantindo precisão da operação.

---

💡 **Observação:** o teste depende da disponibilidade do produto pesquisado na Amazon. Caso o produto não esteja mais disponível ou o layout da página mude, os testes poderão falhar.
