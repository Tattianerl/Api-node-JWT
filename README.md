# API Node.js com Autenticação JWT

Este projeto implementa uma API RESTful em Node.js com autenticação baseada em **JWT (JSON Web Token)**, utilizando **Prisma ORM** para manipulação de banco de dados. A estrutura modular foi projetada para escalabilidade e manutenção.

## Funcionalidades

- Cadastro de usuários.
- Login com autenticação JWT.
- Middleware para proteção de rotas autenticadas.
- Gerenciamento seguro de sessões.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução.
- **Express**: Framework para criação de rotas e middlewares.
- **JWT**: Implementação de autenticação baseada em tokens.
- **Prisma**: ORM para manipulação do banco de dados.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **bcryptjs**: Hashing de senhas.

## Pré-requisitos

- **Node.js** (versão 8 ou superior).
- **NPM** ou **Yarn**.
- Banco de dados compatível com Prisma (exemplo: PostgreSQL, MySQL ou SQLite).

## Instalação

1. Clone o repositório e acesse o diretório do projeto:
   ```bash
   git clone https://github.com/Tattianerl/Api-node-JWT.git
   cd Api-node-JWT

2. Instale as dependências:
   ```bash
   npm install
   
3. Configure as variáveis de ambiente:  
- Renomeie o arquivo .env.example para .env.
- Insira as credenciais do banco de dados e a chave JWT.

4. Execute as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```

5. Inicie a aplicação:
    ```bash
    npm start
    ```
## Endpoints
**Autenticação**  
- POST /signup: Registra um novo usuário.
  - Body:
      json
      ```bash
          {
            "email": "example@mail.com",
            "password": "senha123"
          }
      ```
- POST /login: Autentica o usuário e retorna um token JWT.
  - Body:
      json
      ```bash
      {
        "email": "example@mail.com",
        "password": "senha123"
      }
      ```
## Rotas Protegidas
  Qualquer rota protegida requer o cabeçalho Authorization com o token JWT:
      json
      ```bash
      {
        "Authorization": "Bearer <seu_token>"
      }
      ```
## Scripts Disponíveis  
- npm start: Inicia o servidor.
- npm run dev: Inicia o servidor em modo de desenvolvimento.
- npx prisma studio: Abre a interface visual para manipulação do banco de dados.
  
## Contribuição
 Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch com a feature ou correção.
3. Abra um pull request.

## Licença
Este projeto está licenciado sob a licença MIT.


