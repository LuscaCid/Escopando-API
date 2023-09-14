Exercício/Aula ministrada pela Cubos Academy ensinando como escopar uma mini API de rede social

## Endpoints

- Login - POST (Sempre que enviar dados para API que sejam informações sigilosas devera ser utilizado o POST)

Dados enviados: Login - Senha

Dados retornados: Sucesso / Erro - Token

Objetivos gerais: Validar username e senha - Buscar o usuário no banco de dados - Verificar se a senha informada está correta - Gerar token de acesso/autenticação - Retornar os dados do usuário e o token

---

- Cadastro - POST: Username - Senha

Dados enviados: username - senha

Dados retornados:  Sucesso / Erro

Objetivos gerais: Validar username e senha - Verificar se username já existe no banco de dados - Criptografar a senha  - Cadastrar o usuário no banco de dados

---

- Perfil - GET

Dados enviados: token (terá id ou username)

Dados retornados: URL da foto - Nome - Username - Site - Bio - Email - Telefone - Gênero

Objetivos gerais: Validar o token do usuário  - Buscar o cadastro do usuário com a informação do token como o ID e/ou username - Retornar os dados do usuário 

---

- POST - PERFIL: Token (id ou username) -  URL  da foto - Nome - Username - Site - Bio - Email - Telefone - Genero

Objetivos gerais: Validar o token - Buscar cadastro do usuário com a informação do token - Exigir, ao menos, um campo para atualizar - Criptografar a senha se for informada - Verificar se o email e username já existe no banco de dados se for informado - Atualizar o registro do usuário do banco de dados - Retornar sucesso ou erro

---

- Postagens - GET

Dados enviados: Token - Offset 

Dados retornados: ID - Foi curtido por mim - Postagens [ ]: Usuario (URL da foto, username, perfil oficial) - Fotos [ ] - quantidade de curtidas - Comentários [ ] (username, texto) - Data

Objetivos gerais: Validar o token do usuario - Buscar o cadastro do usuário com a informação do token - Retornar postagens de outras pessoas

---

- Postagens - POST

Dados enviados: Token - texto - array de fotos

Dados retornados: sucesso ou erro

Objetivos gerais: Validar o token do usuario - Buscar o cadastro do usuário com a informação do token - Exigir ao menos uma foto no array - Cadastrar postagem para o usuario logado - Cadastro das fotos da postagem - Retornar sucesso ou erro

---

- CURTIR - POST

Dados enviados: Token - Id da postagem

Objetivos gerais: Validar token do usuário - Buscar o cadastro do usuário com a informação do token - Buscar o cadastro da postagem com o id informado - Verificar se o usuário já curtiu a postagem - Cadastrar curtida da postagem no banco de dados

---

- Comentar - POST

Dados enviados: Token -  ID da postagem - Texto 

Objetivos gerais: Validar o token do usuário - Validar o cadastro do usuario com a informação do token - Validar texto - Buscar a postagem pelo id informado - Cadastrar comentário - Retornar sucesso ou erro
