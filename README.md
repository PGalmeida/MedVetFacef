# 🐾 MedVet - Sistema de Gestão Veterinária

Sistema completo de gestão para clínicas veterinárias, desenvolvido com tecnologias modernas e integração de Inteligência Artificial para assistência virtual.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Autores](#autores)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Funcionalidades](#funcionalidades)
- [Inteligência Artificial](#inteligência-artificial)
- [Bancos de Dados](#bancos-de-dados)
- [Modelos de Dados](#modelos-de-dados)
- [Instalação e Configuração](#instalação-e-configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas do Frontend](#rotas-do-frontend)
- [API Endpoints](#api-endpoints)
- [Exemplos de Requisições](#exemplos-de-requisições)
- [Autenticação e Autorização](#autenticação-e-autorização)
- [Middlewares](#middlewares)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Docker](#docker)
- [Troubleshooting](#troubleshooting)
- [Contribuindo](#contribuindo)

---

## 🎯 Sobre o Projeto

O **MedVet** é uma aplicação web completa para gestão de clínicas veterinárias, oferecendo:

- **Gestão de Agendamentos e Consultas** - Sistema completo de agendamento com ordenação por data
- **Cadastro de Clínicas e Veterinários** - Gerenciamento de profissionais e estabelecimentos
- **Gestão de Tutores e Animais** - Controle completo de clientes e seus pets
- **Chatbot com IA** - Assistente virtual inteligente para atendimento 24/7
- **Sistema de Autenticação** - Login seguro com JWT e controle de permissões
- **Interface Responsiva** - Design moderno e adaptável para todos os dispositivos

---

## 👥 Autores

Este projeto foi desenvolvido por:

- **Pedro Gomes de Almeida**
- **Matheus de Castro Evangelista**

---

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **Express.js 5.1.0** - Framework web para Node.js
- **JavaScript (ES6+)** - Linguagem de programação
- **Prisma 6.19.0** - ORM para PostgreSQL
- **Mongoose 8.19.3** - ODM para MongoDB
- **JWT (jsonwebtoken 9.0.2)** - Autenticação e autorização
- **bcryptjs 3.0.3** - Criptografia de senhas
- **Axios 1.13.2** - Cliente HTTP
- **CORS 2.8.5** - Controle de acesso cross-origin
- **dotenv 17.2.3** - Gerenciamento de variáveis de ambiente

### Frontend

- **React 18.2.0** - Biblioteca JavaScript para interfaces
- **React Router DOM 6.30.2** - Roteamento de páginas
- **Axios 1.13.2** - Cliente HTTP para API
- **React Helmet 6.1.0** - Gerenciamento de meta tags
- **Bootstrap 5.3.2** - Framework CSS
- **CSS Modules** - Estilização modular

### Inteligência Artificial

- **OpenAI GPT-3.5-turbo** - Modelo de linguagem para o chatbot
- **Sistema de Fallback Inteligente** - IA baseada em regras quando a API não está disponível

### Bancos de Dados

- **MongoDB** - Banco NoSQL para dados de agendamentos e consultas
- **PostgreSQL** - Banco relacional para clínicas e veterinários (via Prisma)

### DevOps e Ferramentas

- **Docker** - Containerização da aplicação
- **Nodemon 3.1.10** - Desenvolvimento com hot-reload
- **Prisma Migrate** - Migrações de banco de dados

---

## 🏗️ Arquitetura

### Backend

O backend segue uma arquitetura **MVC (Model-View-Controller)** organizada:

```
backend/
├── controllers/     # Lógica de negócio
├── models/         # Modelos de dados (MongoDB)
├── routes/         # Definição de rotas
├── services/       # Serviços e integrações
├── middleware/     # Middlewares (auth, errors, etc)
├── utils/          # Utilitários e helpers
├── config/         # Configurações e conexões
└── prisma/         # Schema e migrações (PostgreSQL)
```

### Frontend

O frontend utiliza **componentes React** organizados por funcionalidade:

```
frontend/
├── src/
│   ├── pages/      # Páginas principais
│   ├── components/  # Componentes reutilizáveis
│   ├── api/         # Configuração da API
│   └── utils/       # Utilitários
```

---

## ✨ Funcionalidades

### 🔐 Autenticação e Autorização

- Registro de usuários
- Login com JWT
- Controle de permissões (Admin/Usuário)
- Middleware de autenticação
- Proteção de rotas

### 📅 Agendamentos e Consultas

- Criação de agendamentos
- Listagem ordenada por data (mais próxima primeiro)
- Edição e exclusão de agendamentos
- Visualização de detalhes
- Busca por nome do tutor
- Status de agendamento (Agendada, Cancelada, Realizada)

### 🏥 Gestão de Clínicas

- Cadastro de clínicas veterinárias
- Listagem e visualização
- Edição e exclusão
- Relacionamento com veterinários

### 👨‍⚕️ Gestão de Veterinários

- Cadastro de veterinários
- Vinculação com clínicas
- Gerenciamento de CRMV
- Listagem e busca

### 🐕 Gestão de Animais e Tutores

- Cadastro de tutores
- Cadastro de animais
- Relacionamento tutor-animal
- Histórico e informações completas

### 🤖 Chatbot com IA

- Assistente virtual veterinário
- Integração com OpenAI GPT-3.5-turbo
- Sistema de fallback inteligente
- Perguntas frequentes pré-definidas
- Interface conversacional moderna

---

## 🤖 Inteligência Artificial

### Sistema de IA do Chatbot

O chatbot utiliza uma arquitetura em camadas:

1. **OpenAI GPT-3.5-turbo** (Principal)
   - Respostas contextuais e naturais
   - Entendimento de linguagem natural
   - Conversas fluidas

2. **IA Baseada em Regras** (Fallback)
   - Sistema inteligente de detecção de intenções
   - Respostas pré-definidas para perguntas comuns
   - Funciona mesmo sem conexão com APIs externas

### Funcionalidades do Chatbot

- **Modo com Quota**: Usuário pode digitar livremente, IA responde com GPT
- **Modo sem Quota**: Lista de perguntas frequentes clicáveis
- **Perguntas Disponíveis**:
  - Vômito em pets
  - Diarreia
  - Febre
  - Vacinação
  - Alimentação
  - Cuidados com filhotes
  - Castração
  - Banho e higiene
  - Pulgas e parasitas
  - Obesidade
  - Saúde dental
  - Emergências

### Configuração da IA

A IA é configurada através de variáveis de ambiente:

```env
OPENAI_API_KEY=sua-chave-aqui
```

Quando a quota da OpenAI está disponível, o sistema usa GPT-3.5-turbo. Caso contrário, utiliza o sistema de regras inteligente.

---

## 💾 Bancos de Dados

### MongoDB

Utilizado para dados de agendamentos, consultas e informações relacionadas:

- **Modelos**: Agendamentos, Consultas, Tutores, Animais
- **ODM**: Mongoose
- **Conexão**: MongoDB Atlas (Cloud) ou local

**Modelos principais:**
- `Vet` - Agendamentos e consultas
- `User` - Usuários do sistema

### PostgreSQL

Utilizado para dados relacionais de clínicas e veterinários:

- **ORM**: Prisma
- **Modelos**:
  - `Clinic` - Clínicas veterinárias
  - `Veterinario` - Veterinários vinculados a clínicas

**Schema Prisma:**
```prisma
model Clinic {
  id         Int            @id @default(autoincrement())
  name       String
  address    String?
  email      String
  phone      String?
  vets       Veterinario[]
}

model Veterinario {
  id        Int     @id @default(autoincrement())
  name      String
  email     String
  crmv      String
  clinicId  Int
  clinic    Clinic  @relation(fields: [clinicId], references: [id])
}
```

### Configuração

```env
# MongoDB
DB_URI=mongodb+srv://user:password@cluster.mongodb.net/database

# PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5433/database
```

---

## 📊 Modelos de Dados

### MongoDB - Modelo Vet (Agendamentos/Consultas)

```javascript
{
  tutorName: String (obrigatório, max 100 caracteres),
  tutorEmail: String (obrigatório),
  tutorPhone: String (obrigatório, max 15 caracteres),
  animalName: String (obrigatório, max 100 caracteres),
  species: String (obrigatório, max 50 caracteres),
  race: String (opcional, max 50 caracteres),
  age: Number (obrigatório, 0-50),
  sex: String (obrigatório, "Macho" ou "Fêmea"),
  dateConsult: Date (obrigatório),
  hourConsult: String (obrigatório),
  reasonConsult: String (obrigatório, max 500 caracteres),
  symptoms: String (obrigatório, max 500 caracteres),
  status: String (obrigatório, "Agendada" | "Cancelada" | "Realizada"),
  observations: String (opcional, max 500 caracteres),
  clinicId: Number (obrigatório),
  veterinaryId: Number (obrigatório),
  user: ObjectId (referência ao User),
  createdAt: Date (automático),
  updatedAt: Date (automático)
}
```

### MongoDB - Modelo User (Usuários)

```javascript
{
  name: String (obrigatório, max 50 caracteres),
  email: String (obrigatório, único),
  password: String (obrigatório, min 6 caracteres, criptografado),
  avatar: {
    public_id: String,
    url: String
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  role: String (padrão: "user", pode ser "admin"),
  createdAt: Date (automático),
  updatedAt: Date (automático)
}
```

### PostgreSQL - Modelo Clinic (Clínicas)

```prisma
{
  id: Int (auto-incremento, chave primária),
  name: String (obrigatório),
  address: String (opcional),
  email: String (obrigatório),
  phone: String (opcional),
  vets: Veterinario[] (relação um-para-muitos)
}
```

### PostgreSQL - Modelo Veterinario (Veterinários)

```prisma
{
  id: Int (auto-incremento, chave primária),
  name: String (obrigatório),
  email: String (obrigatório),
  crmv: String (obrigatório),
  clinicId: Int (chave estrangeira para Clinic),
  clinic: Clinic (relação muitos-para-um)
}
```

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- MongoDB (local ou Atlas)
- PostgreSQL (local ou remoto)
- Chave da API OpenAI (opcional, para uso completo do chatbot)

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/seu-usuario/medvet.git
cd medvet
```

### Passo 2: Instale as Dependências

```bash
# Instalar dependências do backend e frontend
npm install

# Instalar dependências do frontend
cd frontend
npm install
cd ..
```

### Passo 3: Configure as Variáveis de Ambiente

Crie/edite o arquivo `backend/config/config.env`:

```env
# Servidor
PORT=3000

# MongoDB
DB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/database

# PostgreSQL
DATABASE_URL=postgresql://usuario:senha@localhost:5433/database

# JWT
JWT_SECRET=seu-secret-jwt-aqui
JWT_EXPIRES_TIME=7d

# OpenAI (Opcional)
OPENAI_API_KEY=sua-chave-openai-aqui
```

### Passo 4: Configure o Banco de Dados

```bash
# Gerar Prisma Client
npm run prisma:generate

# Executar migrações do PostgreSQL
npm run prisma:migrate
```

### Passo 5: Inicie os Servidores

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### Passo 6: Inicie o Frontend

**Terminal 3 - Frontend:**
```bash
cd frontend
npm install
npm start
```

### Passo 7: Acesse a Aplicação

- **Frontend:** http://localhost:3000 (ou porta configurada pelo React)
- **Backend API:** http://localhost:3000/api/v1
- **Teste da API:** http://localhost:3000/api/v1/test

**Nota:** O React geralmente roda na porta 3000, mas se estiver ocupada, ele usará a próxima disponível (3001, 3002, etc).

---

## 🧪 Testando a Instalação

### Verificar Backend

```bash
# Teste se o servidor está rodando
curl http://localhost:3000/api/v1/test

# Resposta esperada:
# {"message":"API v1 está funcionando!","timestamp":"..."}
```

### Verificar Frontend

1. Abra o navegador em `http://localhost:3000`
2. Você deve ver a página inicial
3. Tente fazer login ou registro

### Verificar Banco de Dados

#### MongoDB
```bash
# Via MongoDB Compass ou CLI
mongosh "sua-connection-string"
use medvet
show collections
```

#### PostgreSQL
```bash
# Via psql
psql -U postgres -d medvet
\dt  # Lista tabelas
SELECT * FROM "Clinic";
```

---

## 📁 Estrutura do Projeto

```
medvet/
├── backend/
│   ├── app.js                    # Servidor Express principal
│   ├── config/
│   │   ├── config.env            # Variáveis de ambiente
│   │   └── dbConnect.js          # Conexão MongoDB
│   ├── controllers/              # Controladores (lógica de negócio)
│   │   ├── authControllers.js
│   │   ├── chatbotController.js
│   │   ├── clinicControllers.js
│   │   ├── vetControllers.js
│   │   └── veterinaryControllers.js
│   ├── middleware/               # Middlewares
│   │   ├── auth.js              # Autenticação JWT
│   │   ├── erros.js             # Tratamento de erros
│   │   ├── isAdmin.js           # Verificação de admin
│   │   └── catchAsyncErrors.js  # Wrapper para async
│   ├── models/                   # Modelos MongoDB
│   │   ├── user.js
│   │   └── vet.js
│   ├── prisma/                   # Prisma (PostgreSQL)
│   │   ├── schema.prisma        # Schema do banco
│   │   ├── migrations/          # Migrações
│   │   └── seed.js              # Seed de dados
│   ├── routes/                   # Rotas da API
│   │   ├── auth.js
│   │   ├── chatbotRoutes.js
│   │   ├── clinicRoutes.js
│   │   ├── vet.js
│   │   └── veterinaryRoutes.js
│   ├── services/                 # Serviços
│   │   ├── chatbotService.js    # Serviço de IA
│   │   ├── clinicService.js
│   │   └── veterinaryService.js
│   └── utils/                    # Utilitários
│       ├── apiFilters.js        # Filtros de API
│       └── errorHandle.js       # Tratamento de erros
│
├── frontend/
│   ├── public/                   # Arquivos públicos
│   └── src/
│       ├── api/
│       │   └── api.js           # Configuração Axios
│       ├── components/          # Componentes React
│       │   ├── layout/         # Header, Footer
│       │   ├── Dashboard.jsx
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       ├── pages/               # Páginas principais
│       │   ├── Agendamentos/
│       │   ├── Animais/
│       │   ├── Chatbot/
│       │   ├── Clinicas/
│       │   ├── Consultas/
│       │   ├── Medicos/
│       │   ├── Perfil/
│       │   └── Tutores/
│       ├── utils/
│       │   └── auth.js         # Utilitários de autenticação
│       ├── App.js              # Componente principal
│       └── index.js            # Entry point
│
├── docker-compose.yml           # Configuração Docker
├── Dockerfile                    # Dockerfile produção
├── Dockerfile.dev               # Dockerfile desenvolvimento
└── package.json                 # Dependências principais
```

---

## 🗺️ Rotas do Frontend

O frontend utiliza React Router para navegação. Todas as rotas estão definidas em `frontend/src/App.js`:

### Rotas Públicas

- `/` - Página inicial (Home)
- `/login` - Página de login
- `/register` - Página de registro

### Rotas de Agendamentos

- `/agendamentos` - Lista de agendamentos (ordenada por data)
- `/agendamentos/novo` - Criar novo agendamento (Admin)
- `/agendamentos/:id` - Detalhes do agendamento
- `/agendamentos/:id/editar` - Editar agendamento (Admin)

### Rotas de Consultas (Redirecionam para Agendamentos)

- `/consultas` - Redireciona para `/agendamentos`
- `/consultas/nova` - Redireciona para `/agendamentos/novo`

### Rotas de Veterinários

- `/medicos` - Lista de veterinários
- `/medicos/novo` - Criar novo veterinário (Admin)

### Rotas de Clínicas

- `/clinicas` - Lista de clínicas
- `/clinicas/nova` - Criar nova clínica (Admin)
- `/clinicas/editar/:id` - Editar clínica (Admin)

### Rotas de IA

- `/medvet-ia` - Chatbot com Inteligência Artificial

### Rotas de Perfil

- `/perfil` - Perfil do usuário logado

**Nota:** Rotas protegidas requerem autenticação. Algumas rotas (criar, editar, deletar) requerem permissão de administrador.

---

## 🔌 API Endpoints

### Base URL

```
http://localhost:3000/api/v1
```

### Autenticação

#### Registrar Usuário
- **Endpoint:** `POST /api/v1/register`
- **Autenticação:** Não requerida
- **Body:**
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
```
- **Resposta:** Token JWT e dados do usuário

#### Login
- **Endpoint:** `POST /api/v1/login`
- **Autenticação:** Não requerida
- **Body:**
```json
{
  "email": "joao@email.com",
  "password": "senha123"
}
```
- **Resposta:** Token JWT e dados do usuário

#### Obter Usuário Atual
- **Endpoint:** `GET /api/v1/me`
- **Autenticação:** Requerida (Bearer Token)
- **Headers:** `Authorization: Bearer <token>`
- **Resposta:** Dados do usuário logado

#### Atualizar Perfil
- **Endpoint:** `PUT /api/v1/me/update`
- **Autenticação:** Requerida
- **Body:**
```json
{
  "name": "João Silva Atualizado"
}
```

#### Atualizar Senha
- **Endpoint:** `PUT /api/v1/password/update`
- **Autenticação:** Requerida
- **Body:**
```json
{
  "currentPassword": "senha123",
  "newPassword": "novaSenha456"
}
```

### Agendamentos/Consultas

#### Listar Agendamentos
- **Endpoint:** `GET /api/v1/vets`
- **Autenticação:** Não requerida
- **Query Parameters:**
  - `keyword` - Buscar por nome do tutor
  - `page` - Número da página
- **Resposta:** Lista de agendamentos ordenados por data

#### Obter Agendamento Específico
- **Endpoint:** `GET /api/v1/vets/:id`
- **Autenticação:** Não requerida
- **Resposta:** Dados completos do agendamento

#### Criar Agendamento
- **Endpoint:** `POST /api/v1/admin/vets`
- **Autenticação:** Requerida (Admin)
- **Body:**
```json
{
  "tutorName": "Maria Santos",
  "tutorEmail": "maria@email.com",
  "tutorPhone": "11999999999",
  "animalName": "Rex",
  "species": "Cão",
  "race": "Labrador",
  "age": 3,
  "sex": "Macho",
  "dateConsult": "2024-12-25",
  "hourConsult": "14:00",
  "reasonConsult": "Consulta de rotina",
  "symptoms": "Nenhum",
  "status": "Agendada",
  "clinicId": 1,
  "veterinaryId": 1
}
```

#### Atualizar Agendamento
- **Endpoint:** `PUT /api/v1/vets/:id`
- **Autenticação:** Requerida (Admin)
- **Body:** Mesmo formato do criar

#### Excluir Agendamento
- **Endpoint:** `DELETE /api/v1/vets/:id`
- **Autenticação:** Requerida (Admin)

### Clínicas

#### Listar Clínicas
- **Endpoint:** `GET /api/v1/clinics`
- **Autenticação:** Não requerida
- **Resposta:** Lista de todas as clínicas

#### Obter Clínica Específica
- **Endpoint:** `GET /api/v1/clinics/:id`
- **Autenticação:** Não requerida

#### Criar Clínica
- **Endpoint:** `POST /api/v1/clinics`
- **Autenticação:** Requerida (Admin)
- **Body:**
```json
{
  "name": "Clínica Veterinária PetCare",
  "address": "Rua das Flores, 123",
  "email": "contato@petcare.com",
  "phone": "11988888888"
}
```

#### Atualizar Clínica
- **Endpoint:** `PUT /api/v1/clinics/:id`
- **Autenticação:** Requerida (Admin)

#### Excluir Clínica
- **Endpoint:** `DELETE /api/v1/clinics/:id`
- **Autenticação:** Requerida (Admin)

### Veterinários

#### Listar Veterinários
- **Endpoint:** `GET /api/v1/veterinaries`
- **Autenticação:** Não requerida

#### Obter Veterinário Específico
- **Endpoint:** `GET /api/v1/veterinaries/:id`
- **Autenticação:** Não requerida

#### Criar Veterinário
- **Endpoint:** `POST /api/v1/veterinaries`
- **Autenticação:** Requerida (Admin)
- **Body:**
```json
{
  "name": "Dr. Carlos Mendes",
  "email": "carlos@vet.com",
  "crmv": "CRMV-SP-12345",
  "clinicId": 1
}
```

#### Atualizar Veterinário
- **Endpoint:** `PUT /api/v1/veterinaries/:id`
- **Autenticação:** Requerida (Admin)

#### Excluir Veterinário
- **Endpoint:** `DELETE /api/v1/veterinaries/:id`
- **Autenticação:** Requerida (Admin)

### Chatbot

#### Enviar Mensagem
- **Endpoint:** `POST /api/v1/chatbot`
- **Autenticação:** Não requerida
- **Body:**
```json
{
  "message": "Meu cachorro está vomitando",
  "sessionId": "session_1234567890"
}
```
- **Resposta:**
```json
{
  "user": "Meu cachorro está vomitando",
  "bot": "Vômito em pets pode ter várias causas..."
}
```

#### Verificar Quota OpenAI
- **Endpoint:** `GET /api/v1/chatbot/quota`
- **Autenticação:** Não requerida
- **Resposta:**
```json
{
  "hasQuota": true,
  "reason": null,
  "questions": [
    {
      "id": "vomito",
      "text": "Precisa de ajuda com vômito?"
    },
    ...
  ]
}
```

---

## 📝 Exemplos de Requisições

### Exemplo: Login com cURL

```bash
curl -X POST http://localhost:3000/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@email.com",
    "password": "senha123"
  }'
```

### Exemplo: Criar Agendamento (com autenticação)

```bash
curl -X POST http://localhost:3000/api/v1/admin/vets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN_JWT_AQUI" \
  -d '{
    "tutorName": "João Silva",
    "tutorEmail": "joao@email.com",
    "tutorPhone": "11999999999",
    "animalName": "Rex",
    "species": "Cão",
    "race": "Labrador",
    "age": 3,
    "sex": "Macho",
    "dateConsult": "2024-12-25",
    "hourConsult": "14:00",
    "reasonConsult": "Consulta de rotina",
    "symptoms": "Nenhum",
    "status": "Agendada",
    "clinicId": 1,
    "veterinaryId": 1
  }'
```

### Exemplo: Listar Agendamentos com Busca

```bash
curl -X GET "http://localhost:3000/api/v1/vets?keyword=João&page=1"
```

### Exemplo: Enviar Mensagem ao Chatbot

```bash
curl -X POST http://localhost:3000/api/v1/chatbot \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Como cuidar de um filhote?",
    "sessionId": "session_123"
  }'
```

---

## 🔐 Autenticação e Autorização

### Fluxo de Autenticação

1. **Registro/Login:**
   - Usuário faz POST em `/api/v1/register` ou `/api/v1/login`
   - Servidor retorna um token JWT
   - Token é armazenado no localStorage do frontend

2. **Requisições Autenticadas:**
   - Frontend envia token no header: `Authorization: Bearer <token>`
   - Middleware `isAuthenticated` valida o token
   - Se válido, adiciona `req.user` à requisição

3. **Verificação de Admin:**
   - Middleware `isAdmin` verifica se `req.user.role === "admin"`
   - Apenas admins podem criar/editar/deletar recursos

### Estrutura do Token JWT

```javascript
{
  id: "user_id",
  iat: timestamp,
  exp: timestamp
}
```

### Headers Necessários

```javascript
{
  "Content-Type": "application/json",
  "Authorization": "Bearer <seu_token_jwt>"
}
```

---

## 🛡️ Middlewares

### isAuthenticated

Verifica se o usuário está autenticado:

- Lê o token do header `Authorization` ou cookies
- Valida o token JWT
- Busca o usuário no banco de dados
- Adiciona `req.user` à requisição
- Retorna erro 401 se não autenticado

**Uso:**
```javascript
router.get("/protected", isAuthenticated, controller);
```

### isAdmin

Verifica se o usuário é administrador:

- Deve ser usado após `isAuthenticated`
- Verifica se `req.user.role === "admin"`
- Retorna erro 403 se não for admin

**Uso:**
```javascript
router.post("/admin/route", isAuthenticated, isAdmin, controller);
```

### catchAsyncErrors

Wrapper para funções async que captura erros automaticamente:

- Evita repetição de try/catch
- Passa erros para o middleware de erro centralizado

**Uso:**
```javascript
export const handler = catchAsyncErrors(async (req, res, next) => {
  // código sem try/catch
});
```

### errorMiddleware

Middleware centralizado de tratamento de erros:

- Captura todos os erros da aplicação
- Retorna respostas JSON padronizadas
- Loga erros para debugging

---

## 🔧 Serviços

### chatbotService.js

Serviço principal do chatbot com IA:

**Funções principais:**
- `chatbotReply(message, sessionId)` - Processa mensagem e retorna resposta
- `checkOpenAIQuota()` - Verifica se há quota disponível na OpenAI
- `getFrequentQuestions()` - Retorna lista de perguntas frequentes
- `getPredefinedAnswer(questionId)` - Retorna resposta pré-definida

**Fluxo de funcionamento:**
1. Tenta usar OpenAI GPT-3.5-turbo
2. Se falhar (quota, erro, etc), usa IA baseada em regras
3. Detecta intenção na mensagem
4. Retorna resposta apropriada

**Base de conhecimento:**
- 12 tópicos principais (vômito, diarreia, febre, vacina, etc.)
- Sistema de detecção de intenções por palavras-chave
- Respostas pré-definidas para casos comuns

### clinicService.js

Serviço para gerenciamento de clínicas (PostgreSQL via Prisma):

- CRUD completo de clínicas
- Validação de dados
- Relacionamento com veterinários

### veterinaryService.js

Serviço para gerenciamento de veterinários (PostgreSQL via Prisma):

- CRUD completo de veterinários
- Validação de CRMV
- Vinculação com clínicas

---

## 🎨 Componentes do Frontend

### Páginas Principais

#### Agendamentos
- **AgendamentosList.jsx** - Lista todos os agendamentos ordenados por data
- **NovoAgendamento.jsx** - Formulário para criar novo agendamento
- **DetalhesAgendamento.jsx** - Visualização detalhada de um agendamento
- **EditarAgendamento.jsx** - Formulário para editar agendamento existente

#### Clínicas
- **Clinics.jsx** - Lista todas as clínicas cadastradas
- **ClinicForm.jsx** - Formulário para criar/editar clínica

#### Veterinários
- **MedicosList.jsx** - Lista todos os veterinários
- **NovoMedico.jsx** - Formulário para cadastrar novo veterinário

#### Chatbot
- **Chatbot.jsx** - Interface do chatbot com IA
- **Chatbot.css** - Estilos do chatbot

#### Perfil
- **Perfil.jsx** - Página de perfil do usuário
- Permite atualizar nome e senha

#### Animais e Tutores
- **AnimaisList.jsx** - Lista de animais cadastrados
- **NovoAnimal.jsx** - Formulário para cadastrar animal
- **TutoresList.jsx** - Lista de tutores
- **NovoTutor.jsx** - Formulário para cadastrar tutor

### Componentes Reutilizáveis

#### Layout
- **Header.jsx** - Cabeçalho com navegação
- **Footer.jsx** - Rodapé da aplicação

#### Autenticação
- **Login.jsx** - Página de login
- **Register.jsx** - Página de registro

#### Home
- **Home.jsx** - Página inicial

### API Client

**api.js** - Cliente centralizado para requisições HTTP:

- Configuração base do Axios
- Interceptors para adicionar token automaticamente
- Tratamento de erros 401 (redireciona para login)
- APIs organizadas por módulo:
  - `authAPI` - Autenticação
  - `vetAPI` - Agendamentos
  - `clinicAPI` - Clínicas
  - `veterinaryAPI` - Veterinários
  - `chatbotAPI` - Chatbot

---

## 📦 Dependências Principais

### Backend (package.json)

```json
{
  "express": "^5.1.0",
  "mongoose": "^8.19.3",
  "@prisma/client": "^6.19.0",
  "prisma": "^6.19.0",
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^3.0.3",
  "axios": "^1.13.2",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "nodemon": "^3.1.10"
}
```

### Frontend

Principais dependências do React:
- `react` - Biblioteca principal
- `react-router-dom` - Roteamento
- `axios` - Cliente HTTP
- `bootstrap` - Framework CSS
- `react-helmet` - Gerenciamento de meta tags

---

## 🔄 Fluxo de Dados

### Autenticação

```
1. Usuário faz login → POST /api/v1/login
2. Backend valida credenciais → MongoDB
3. Backend gera JWT → Retorna token
4. Frontend armazena token → localStorage
5. Frontend usa token → Header Authorization
6. Backend valida token → Middleware isAuthenticated
```

### Chatbot

```
1. Usuário envia mensagem → POST /api/v1/chatbot
2. Backend verifica quota OpenAI → GET /api/v1/chatbot/quota
3. Se tem quota → Usa OpenAI GPT-3.5-turbo
4. Se não tem quota → Usa IA baseada em regras
5. Backend retorna resposta → Frontend exibe
```

### Agendamentos

```
1. Admin cria agendamento → POST /api/v1/admin/vets
2. Backend valida dados → Mongoose schema
3. Backend salva → MongoDB
4. Frontend lista → GET /api/v1/vets
5. Backend ordena por data → Retorna ordenado
```

---

## 📜 Scripts Disponíveis

### Backend

```bash
npm start          # Inicia o servidor em produção
npm run dev        # Inicia o servidor em desenvolvimento (nodemon)
npm run prisma:generate  # Gera o Prisma Client
npm run prisma:migrate   # Executa migrações do PostgreSQL
```

### Frontend

```bash
cd frontend
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
npm test           # Executa testes
```

---

## 🔒 Segurança

- Autenticação JWT com tokens expiráveis
- Senhas criptografadas com bcryptjs
- Middleware de autenticação em rotas protegidas
- Controle de acesso baseado em roles (Admin/Usuário)
- Validação de dados de entrada
- Tratamento centralizado de erros
- CORS configurado para segurança

---

## 🐳 Docker

O projeto inclui configuração completa do Docker para facilitar o desenvolvimento e deploy. Todos os serviços necessários (backend, MongoDB, PostgreSQL) são containerizados.

### Pré-requisitos

- Docker instalado (versão 20.10 ou superior)
- Docker Compose instalado (versão 2.0 ou superior)

### Estrutura Docker

O projeto utiliza **Docker Compose** com os seguintes serviços:

1. **Backend (Node.js)**
   - Porta: 3000
   - Hot-reload em desenvolvimento
   - Migrações automáticas do Prisma

2. **MongoDB**
   - Porta: 27017
   - Volume persistente para dados
   - Healthcheck configurado

3. **PostgreSQL**
   - Porta: 5432
   - Volume persistente para dados
   - Healthcheck configurado

### Arquivos Docker

- `Dockerfile` - Imagem de produção otimizada
- `Dockerfile.dev` - Imagem de desenvolvimento com nodemon
- `docker-compose.yml` - Configuração para desenvolvimento
- `docker-compose.prod.yml` - Configuração para produção

### Uso Básico

#### Desenvolvimento

```bash
# Iniciar todos os serviços
docker-compose up

# Iniciar em background
docker-compose up -d

# Ver logs
docker-compose logs -f backend

# Parar serviços
docker-compose down
```

#### Produção

```bash
# Iniciar em modo produção
docker-compose -f docker-compose.prod.yml up -d

# Ver logs
docker-compose -f docker-compose.prod.yml logs -f

# Parar serviços
docker-compose -f docker-compose.prod.yml down
```

### Configuração de Variáveis de Ambiente

As variáveis de ambiente podem ser configuradas de duas formas:

1. **Arquivo `.env` na raiz do projeto**
2. **Variáveis de ambiente do sistema**

Variáveis importantes para Docker:

```env
# Backend
PORT=3000
NODE_ENV=development  # ou production

# MongoDB (usado dentro do Docker)
DB_URI=mongodb://mongodb:27017/medvet

# PostgreSQL (usado dentro do Docker)
DATABASE_URL=postgresql://postgres:medvet123@postgres:5432/medvet?schema=public

# JWT
JWT_SECRET=seu-secret-jwt
JWT_EXPIRES_TIME=7d

# OpenAI (Opcional)
OPENAI_API_KEY=sua-chave-openai
```

### Comandos Úteis

#### Gerenciamento de Containers

```bash
# Ver status dos containers
docker-compose ps

# Reconstruir imagens
docker-compose build --no-cache

# Parar e remover volumes (apaga dados)
docker-compose down -v

# Reiniciar um serviço específico
docker-compose restart backend
```

#### Executar Comandos nos Containers

```bash
# Acessar shell do backend
docker-compose exec backend sh

# Executar migrações do Prisma
docker-compose exec backend npx prisma migrate deploy --schema=./backend/prisma/schema.prisma

# Gerar Prisma Client
docker-compose exec backend npx prisma generate --schema=./backend/prisma/schema.prisma

# Acessar MongoDB
docker-compose exec mongodb mongosh

# Acessar PostgreSQL
docker-compose exec postgres psql -U postgres -d medvet
```

#### Logs e Debugging

```bash
# Ver logs do backend
docker-compose logs -f backend

# Ver logs de todos os serviços
docker-compose logs -f

# Ver últimas 100 linhas
docker-compose logs --tail=100 backend

# Ver logs do MongoDB
docker-compose logs -f mongodb

# Ver logs do PostgreSQL
docker-compose logs -f postgres
```

### Volumes Docker

Os dados são persistidos em volumes nomeados:

- `mongodb_data` - Dados do MongoDB
- `postgres_data` - Dados do PostgreSQL

**Importante:** Os volumes persistem mesmo após parar os containers. Para remover completamente:

```bash
docker-compose down -v
```

### Rede Docker

Todos os serviços estão na mesma rede Docker (`loja-network`), permitindo comunicação interna entre containers usando os nomes dos serviços:

- `mongodb` - Hostname do MongoDB
- `postgres` - Hostname do PostgreSQL
- `backend` - Hostname do backend

### Healthchecks

Os serviços de banco de dados possuem healthchecks configurados:

- **MongoDB**: Verifica conexão a cada 10 segundos
- **PostgreSQL**: Verifica se está pronto a cada 10 segundos

O backend aguarda os bancos estarem saudáveis antes de iniciar.

### Scripts de Inicialização

O projeto inclui scripts auxiliares:

**Windows:**
```bash
docker-start.bat
```

**Linux/Mac:**
```bash
chmod +x docker-start.sh
./docker-start.sh
```

### Troubleshooting

#### Porta já em uso

Se as portas 3000, 27017 ou 5432 estiverem em uso, altere no `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Mude a porta externa
```

#### Erro de conexão com banco

1. Verifique se os containers estão rodando: `docker-compose ps`
2. Verifique os logs: `docker-compose logs mongodb postgres`
3. Aguarde os healthchecks passarem antes de iniciar o backend

#### Reconstruir tudo do zero

```bash
# Parar e remover tudo
docker-compose down -v

# Remover imagens antigas
docker rmi loja-backend loja-mongodb loja-postgres

# Reconstruir
docker-compose build --no-cache

# Iniciar
docker-compose up
```

#### Limpar sistema Docker

```bash
# Remover containers parados
docker container prune

# Remover volumes não utilizados
docker volume prune

# Remover imagens não utilizadas
docker image prune

# Limpeza completa (cuidado!)
docker system prune -a --volumes
```

### Desenvolvimento com Docker

O `docker-compose.yml` de desenvolvimento inclui:

- **Hot-reload**: Mudanças no código são refletidas automaticamente
- **Volumes montados**: Código local é sincronizado com o container
- **Nodemon**: Reinicia automaticamente o servidor

### Produção com Docker

O `docker-compose.prod.yml` de produção inclui:

- **Build otimizado**: Apenas dependências de produção
- **Sem hot-reload**: Performance otimizada
- **Migrações automáticas**: Prisma executa migrações na inicialização

---

---

## 🔧 Troubleshooting

### Problemas Comuns

#### Erro: "Cannot find module"
```bash
# Reinstale as dependências
npm install
cd frontend && npm install
```

#### Erro: "MongoDB connection failed"
- Verifique se o MongoDB está rodando
- Confirme a string de conexão no `config.env`
- Verifique se as credenciais estão corretas

#### Erro: "Prisma Client not generated"
```bash
npm run prisma:generate
```

#### Erro: "Port 3000 already in use"
- Pare outros processos na porta 3000
- Ou altere a porta no `config.env`

#### Erro: "JWT token invalid"
- Verifique se `JWT_SECRET` está configurado
- Certifique-se de que o token não expirou
- Faça login novamente

#### Erro: "OpenAI quota exceeded"
- O sistema automaticamente usa IA baseada em regras
- Adicione créditos na conta OpenAI ou aguarde

#### Erro: "CORS policy"
- Verifique se o CORS está configurado no backend
- Confirme que a origem do frontend está permitida

### Logs e Debugging

#### Backend
```bash
# Ver logs em tempo real
npm run dev

# Ver logs do Docker
docker-compose logs -f backend
```

#### Frontend
```bash
# Ver erros no console do navegador
# F12 > Console

# Ver erros de rede
# F12 > Network
```

### Resetar Banco de Dados

#### MongoDB
```bash
# Via Docker
docker-compose exec mongodb mongosh
use medvet
db.dropDatabase()

# Ou remover volume
docker-compose down -v
```

#### PostgreSQL
```bash
# Via Docker
docker-compose exec postgres psql -U postgres -d medvet
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

# Ou remover volume
docker-compose down -v
```

---

## 🧪 Testando a API

### Com Postman

1. Importe a collection (se disponível)
2. Configure a variável `base_url` como `http://localhost:3000/api/v1`
3. Faça login e copie o token
4. Configure a variável `token` com o JWT recebido
5. Use `{{token}}` nos headers das requisições autenticadas

### Com cURL

Veja exemplos na seção [Exemplos de Requisições](#exemplos-de-requisições)

### Com JavaScript/Fetch

```javascript
// Login
const response = await fetch('http://localhost:3000/api/v1/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'usuario@email.com',
    password: 'senha123'
  })
});

const data = await response.json();
const token = data.token;

// Requisição autenticada
const agendamentos = await fetch('http://localhost:3000/api/v1/vets', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### Com Axios (Frontend)

```javascript
import { authAPI, vetAPI } from './api/api';

// Login
const login = async () => {
  try {
    const response = await authAPI.login({
      email: 'usuario@email.com',
      password: 'senha123'
    });
    const token = response.data.token;
    localStorage.setItem('token', token);
  } catch (error) {
    console.error('Erro no login:', error);
  }
};

// Listar agendamentos
const getAgendamentos = async () => {
  try {
    const response = await vetAPI.getAll();
    console.log(response.data.vets);
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error);
  }
};
```

---

## 💻 Exemplos de Código

### Backend - Criar Controller

```javascript
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Vet from "../models/vet.js";

export const getVets = catchAsyncErrors(async (req, res, next) => {
  const vets = await Vet.find();
  res.status(200).json({
    success: true,
    vets
  });
});
```

### Backend - Criar Route

```javascript
import express from "express";
import { getVets } from "../controllers/vetControllers.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/vets", getVets);
router.post("/vets", isAuthenticated, createVet);

export default router;
```

### Frontend - Criar Componente React

```javascript
import React, { useState, useEffect } from 'react';
import { vetAPI } from '../api/api';

const AgendamentosList = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  const fetchAgendamentos = async () => {
    try {
      const response = await vetAPI.getAll();
      setAgendamentos(response.data.vets);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      {agendamentos.map(agendamento => (
        <div key={agendamento._id}>
          <h3>{agendamento.animalName}</h3>
          <p>Tutor: {agendamento.tutorName}</p>
        </div>
      ))}
    </div>
  );
};

export default AgendamentosList;
```

### Frontend - Usar Chatbot API

```javascript
import { chatbotAPI } from '../api/api';

const sendMessage = async (message) => {
  try {
    const response = await chatbotAPI.sendMessage(message, 'session_123');
    return response.data.bot;
  } catch (error) {
    console.error('Erro no chatbot:', error);
    return 'Desculpe, ocorreu um erro.';
  }
};

// Verificar quota
const checkQuota = async () => {
  try {
    const response = await chatbotAPI.checkQuota();
    return response.data.hasQuota;
  } catch (error) {
    return false;
  }
};
```

---

## 📚 Estrutura de Código

### Padrões de Código

- **Backend:** ES6+ modules, async/await, try/catch
- **Frontend:** React Hooks, Functional Components
- **Nomenclatura:** camelCase para variáveis, PascalCase para componentes
- **Arquivos:** kebab-case para nomes de arquivos

### Convenções

- Controllers: Lógica de negócio e validação
- Services: Integrações externas e lógica complexa
- Models: Definição de schemas e modelos
- Middleware: Validação e autenticação
- Routes: Definição de endpoints

---

## 🚀 Deploy

### Preparação para Produção

1. **Configure variáveis de ambiente de produção**
2. **Build do frontend:**
   ```bash
   cd frontend
   npm run build
   ```
3. **Use Docker para produção:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Variáveis de Ambiente de Produção

```env
NODE_ENV=production
PORT=3000
DB_URI=mongodb+srv://...
DATABASE_URL=postgresql://...
JWT_SECRET=secret_forte_producao
OPENAI_API_KEY=sua_chave_producao
```

### Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados configurado e acessível
- [ ] Migrações do Prisma executadas
- [ ] Build do frontend criado
- [ ] CORS configurado para domínio de produção
- [ ] SSL/HTTPS configurado
- [ ] Logs configurados
- [ ] Backup de banco de dados configurado

---

## 🤝 Contribuindo

### Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

---

## 📖 Recursos Adicionais

### Documentação das Tecnologias

- **Node.js:** https://nodejs.org/docs
- **Express.js:** https://expressjs.com/
- **React:** https://react.dev/
- **MongoDB:** https://www.mongodb.com/docs/
- **PostgreSQL:** https://www.postgresql.org/docs/
- **Prisma:** https://www.prisma.io/docs
- **OpenAI API:** https://platform.openai.com/docs
- **Mongoose:** https://mongoosejs.com/docs/
- **JWT:** https://jwt.io/

### Ferramentas Úteis

- **MongoDB Compass** - Interface gráfica para MongoDB (https://www.mongodb.com/products/compass)
- **PostgreSQL pgAdmin** - Interface gráfica para PostgreSQL (https://www.pgadmin.org/)
- **Postman** - Teste de APIs (https://www.postman.com/)
- **Docker Desktop** - Gerenciamento de containers (https://www.docker.com/products/docker-desktop)
- **Prisma Studio** - Interface visual para banco de dados (execute: `npx prisma studio`)

### Obter Chave OpenAI

1. Acesse: https://platform.openai.com/
2. Crie uma conta ou faça login
3. Vá em "API Keys"
4. Crie uma nova chave
5. Copie e adicione no `config.env` como `OPENAI_API_KEY`

### Configurar MongoDB Atlas (Cloud)

1. Acesse: https://www.mongodb.com/cloud/atlas
2. Crie uma conta gratuita
3. Crie um cluster
4. Obtenha a connection string
5. Adicione no `config.env` como `DB_URI`

### Configurar PostgreSQL Local

1. Instale PostgreSQL: https://www.postgresql.org/download/
2. Crie um banco de dados: `createdb medvet`
3. Configure a connection string no `config.env`
4. Execute migrações: `npm run prisma:migrate`

---

## 📝 Licença

Este projeto é de uso livre para fins educacionais e pode ser adaptado conforme necessidade.

---

## 👨‍💻 Desenvolvido por

**Pedro Gomes de Almeida** e **Matheus de Castro Evangelista**

---

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma issue no repositório do projeto
- Verifique a seção [Troubleshooting](#troubleshooting)
- Consulte a documentação das tecnologias utilizadas

---

## 📈 Roadmap Futuro

- [ ] Sistema de notificações
- [ ] Relatórios e estatísticas
- [ ] Integração com sistemas de pagamento
- [ ] App mobile (React Native)
- [ ] Sistema de backup automático
- [ ] Dashboard administrativo avançado
- [ ] Exportação de dados (PDF/Excel)
- [ ] Sistema de lembretes por email/SMS

---

**Versão:** 1.0.0  
**Última atualização:** Dezembro 2024  
**Status:** Em desenvolvimento ativo
