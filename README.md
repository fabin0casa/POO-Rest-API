# CRUD de Criaturas Pokémon

Este é um projeto desenvolvido para a matéria de **Programação Orientada a Objetos (POO)**, com o objetivo de criar um sistema CRUD (Create, Read, Update, Delete) para criaturas do universo Pokémon. 

Este projeto foi desenvolvido por:

- **Fábio Casagrande**
- **Nattan Silva de Souza**

O projeto utiliza as seguintes tecnologias:

- **Backend**: Java com Spring Boot e REST API
- **Frontend**: HTML, CSS, e JavaScript
- **Banco de Dados**: MongoDB

## Objetivo do Projeto

Criar um sistema funcional que permita:

- Cadastrar novas criaturas Pokémon
- Listar todas as criaturas cadastradas
- Editar informações de criaturas existentes
- Excluir criaturas do banco de dados

## Estrutura do Projeto

1. **Backend (Spring Boot com REST API)**:
   - Implementação da lógica de negócios e endpoints REST.
   - Comunicação com o MongoDB para persistência de dados.

2. **Frontend (HTML, CSS, JS)**:
   - Interface simples e interativa para o usuário realizar operações CRUD.
   - Comunicação com o backend via requisições HTTP.

3. **Banco de Dados (MongoDB)**:
   - Armazenamento das informações das criaturas Pokémon.
  
# Estrutura da Tabela: `pokemon`

| **Coluna**       | **Tipo de Dados**       | **Descrição**                                                                 |
|-------------------|-------------------------|-------------------------------------------------------------------------------|
| `id`             | INT (PK, Auto-increment)| Identificador único do Pokémon.                                              |
| `nome`           | VARCHAR(100)           | Nome do Pokémon (exemplo: "Pikachu", "Charizard").                           |
| `numero_dex`     | INT                    | Número do Pokémon na Pokédex.                                                |
| `especie`        | VARCHAR(100)           | Espécie ou categoria do Pokémon (exemplo: "Mouse Pokémon").                  |
| `tipo_primario`  | VARCHAR(50)            | Tipo principal do Pokémon (exemplo: "Elétrico", "Fogo").                     |
| `tipo_secundario`| VARCHAR(50) (NULL)     | Tipo secundário, se houver (exemplo: "Voador"). Pode ser nulo para Pokémon com um único tipo. |
| `descricao`      | TEXT                   | Breve descrição do Pokémon.                                                  |
| `altura`         | DECIMAL(5,2)           | Altura do Pokémon em metros (exemplo: 0.40).                                 |
| `peso`           | DECIMAL(6,2)           | Peso do Pokémon em quilogramas (exemplo: 6.00).                              |
| `url_imagem`     | VARCHAR(255)           | URL para uma imagem representativa do Pokémon.                               |


## Apresentação

Haverá um vídeo de apresentação do projeto preparado para o professor, onde explicaremos o funcionamento do sistema e os conceitos aplicados, os arquivos da edição do vídeo poderão ser encontrados neste repositório também.

## Requisitos de Execução

- Java 21.
- Spring Boot configurado.
- MongoDB configurado e em execução.
- Browser para acessar o frontend.

