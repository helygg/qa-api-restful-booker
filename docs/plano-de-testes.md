# Plano de Testes - API Restful-Booker

## Objetivo
Validar os endpoints da API Restful-Booker (https://restful-booker.herokuapp.com), cobrindo autenticação, consulta, criação, alteração e exclusão de reservas, além de cenários de erro.

## Escopo
- Autenticação (POST /auth)
- Listagem e consulta de reservas (GET /booking, GET /booking/{id})
- Criação, alteração e exclusão de reservas (POST, PUT, DELETE /booking)
- Cenários negativos: credenciais inválidas, ausência de token e reserva inexistente

## Fora do escopo
- Testes de performance e carga
- Testes de segurança aprofundados
- Endpoints de PATCH e health check

## Ferramentas
- Playwright (request API)
- JavaScript / Node.js
- GitHub Actions
- Documentação oficial: https://restful-booker.herokuapp.com/apidoc/index.html

## Tipos de teste
- Funcional de API
- Testes negativos
- Regressão automatizada

## Abordagem
Os endpoints foram explorados a partir da documentação oficial e os cenários principais foram automatizados. Cada teste valida o status HTTP e o conteúdo da resposta.

## Critério de sucesso
Todos os casos automatizados passando e desvios em relação ao comportamento esperado registrados no relatório de bugs.