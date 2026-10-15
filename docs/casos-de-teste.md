# Casos de Teste

| ID | Descrição | Método e endpoint | Resultado esperado |
|----|-----------|-------------------|--------------------|
| API01 | Gerar token com credenciais válidas | POST /auth | Status 200 e token retornado |
| API02 | Listar reservas | GET /booking | Status 200 e lista com bookingid |
| API03 | Consultar reserva por id | GET /booking/{id} | Status 200 com dados da reserva |
| API04 | Criar reserva | POST /booking | Status 200, bookingid e dados enviados retornados |
| API05 | Alterar reserva com token válido | PUT /booking/{id} | Status 200 e dados atualizados |
| API06 | Apagar reserva com token válido | DELETE /booking/{id} | Status 201 e consulta posterior retorna 404 |
| API07 | Login com senha inválida | POST /auth | Token não gerado e mensagem "Bad credentials" |
| API08 | Apagar reserva sem token | DELETE /booking/{id} | Status 403 |
| API09 | Consultar reserva inexistente | GET /booking/99999999 | Status 404 |