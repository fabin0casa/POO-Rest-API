# CRUD de Criaturas Pokémon <img src="https://github.com/user-attachments/assets/d3166429-7685-4e0d-8dd1-7165f4ea574d" alt="Pokedex" width="60" height="50">


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

## Estrutura do Banco de Dados - `Pokémon` (MongoDB)
Para este projeto usamos um Banco de Dados chamado `banco_poo_prj2` e uma coleção de nome `pokemon`.

Abaixo está a estrutura do banco de dados para armazenar informações sobre os Pokémon, utilizando MongoDB. 

| **Coluna**       | **Tipo de Dados**           | **Descrição**                                                                 |
|-------------------|-----------------------------|-------------------------------------------------------------------------------|
| `_id`             | `ObjectId` (PK)             | Identificador único do Pokémon (gerado automaticamente pelo MongoDB).         |
| `nome`           | `String`                    | Nome do Pokémon (exemplo: "Pikachu", "Charizard").                           |
| `numero_dex`     | `Number`                    | Número do Pokémon na Pokédex.                                                |
| `especie`        | `String`                    | Espécie ou categoria do Pokémon (exemplo: "Mouse Pokémon").                  |
| `tipo_primario`  | `String`                    | Tipo principal do Pokémon (exemplo: "Elétrico", "Fogo").                     |
| `tipo_secundario`| `String` (ou `null`)        | Tipo secundário, se houver (exemplo: "Voador"). Pode ser nulo para Pokémon com um único tipo. |
| `descricao`      | `String`                    | Breve descrição do Pokémon.                                                  |
| `altura`         | `Number` (float)            | Altura do Pokémon em metros (exemplo: 0.40).                                 |
| `peso`           | `Number` (float)            | Peso do Pokémon em quilogramas (exemplo: 6.00).                              |
| `url_imagem`     | `String`                    | URL para uma imagem representativa do Pokémon.                               | 

### Exemplo de Documento no MongoDB

```json
{
  "_id": { "$oid": "507f1f77bcf86cd799439011" },
  "nome": "Pikachu",
  "numero_dex": 25,
  "especie": "Mouse Pokémon",
  "tipo_primario": "Elétrico",
  "tipo_secundario": null,
  "descricao": "Pikachu é um Pokémon de tipo Elétrico. É um dos Pokémon mais conhecidos e é a mascote da franquia.",
  "altura": 0.40,
  "peso": 6.00,
  "url_imagem": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
}
```

## Apresentação

Haverá um vídeo de apresentação do projeto preparado para o professor, onde explicaremos o funcionamento do sistema e os conceitos aplicados, os arquivos da edição do vídeo poderão ser encontrados neste repositório também.

## Requisitos de Execução

- Java 21.
- Spring Boot configurado.
- MongoDB configurado e em execução.
- Browser para acessar o frontend.

