# QA API - Testes Automatizados da Restful-Booker

Projeto de QA que valida os endpoints da API [Restful-Booker](https://restful-booker.herokuapp.com): autenticação, consulta, criação, alteração e exclusão de reservas, além de cenários de erro.

## O que foi feito

- Plano de testes e casos de teste documentados
- 9 testes automatizados de API com Playwright (GET, POST, PUT, DELETE)
- Validação de status HTTP e do conteúdo das respostas
- Autenticação por token nos endpoints protegidos
- Cenários negativos (senha inválida, ausência de token, reserva inexistente)
- Relatório de bugs encontrados
- Execução automática dos testes via GitHub Actions

## Tecnologias

- JavaScript
- Node.js
- Playwright
- GitHub Actions

## Estrutura do projeto

- `docs/` - plano de testes, casos de teste e relatório de bugs
- `tests/` - testes automatizados (`auth-e-consulta`, `reservas` e `erros`)
- `playwright.config.js` - configuração do Playwright

## Documentação

- [Plano de testes](docs/plano-de-testes.md)
- [Casos de teste](docs/casos-de-teste.md)
- [Relatório de bugs](docs/bugs.md)

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/helygg/qa-api-restful-booker.git
cd qa-api-restful-booker
```

2. Instale as dependências:

```bash
npm install
npx playwright install
```

3. Execute os testes:

```bash
npx playwright test
```

4. Abra o relatório:

```bash
npx playwright show-report
```

## Autora

**Helen Cristina**
GitHub: [helygg](https://github.com/helygg)