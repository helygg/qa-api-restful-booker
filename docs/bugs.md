# Relatório de Bugs

Ambiente: https://restful-booker.herokuapp.com

---

### BUG-001: Login com credenciais inválidas retorna status 200
- **Endpoint:** POST /auth
- **Severidade:** Média
- **Passos para reproduzir:**
  1. Enviar POST /auth com username `admin` e password `senha_errada`
  2. Observar o status HTTP da resposta
- **Resultado esperado:** Status 401 (Unauthorized)
- **Resultado obtido:** Status 200, com o corpo `{"reason": "Bad credentials"}`
- **Impacto:** Clientes que verificam apenas o status HTTP podem interpretar o login como bem-sucedido

---

### BUG-002: Exclusão de reserva retorna status 201 (Created)
- **Endpoint:** DELETE /booking/{id}
- **Severidade:** Baixa
- **Passos para reproduzir:**
  1. Criar uma reserva com POST /booking
  2. Gerar um token com POST /auth
  3. Enviar DELETE /booking/{id} com o cookie `token`
  4. Observar o status HTTP da resposta
- **Resultado esperado:** Status 204 (No Content) ou 200
- **Resultado obtido:** Status 201 (Created), que indica criação de recurso e não exclusão