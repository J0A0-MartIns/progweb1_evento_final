
# 📅 Sistema de Gerenciamento de Eventos

Este projeto é um sistema completo de gerenciamento de eventos desenvolvido com **Angular** no frontend e **Spring Boot** no backend.
Ele permite adicionar, listar, buscar por nome, alterar e excluir eventos com persistência em banco de dados.

Trabalho realizado como atividade final da 2ª VA da disciplina de Programação Web 1 do 5° período de Sistemas de Informação pelos alunos:
**João Marcos de Araújo Martins** e **Matheus Felipe da Silva Felício** 

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
- Angular 17+ (standalone components)
- TypeScript
- HTML + SCSS
- Angular Forms e Router
- HttpClient

### Backend:
- Spring Boot 3
- Spring Web
- Spring Data JPA
- Banco de Dados: PostgreSQL (pode ser adaptado para outros)
- Validações de negócio e tratamento de exceções
- CORS habilitado para integração com frontend

---

## ⚙️ Requisitos

- **Node.js** (v18 ou superior)
- **Angular CLI**
- **Java 17+**
- **Maven**
- **PostgreSQL** instalado e rodando

---

## 🧱 Estrutura do Projeto

```
backend/
├── src/main/java/br/ueg/progwebi/eventapi/
│   ├── controller/         # API REST (EventController)
│   ├── dto/                # DTOs para transporte de dados
│   ├── model/              # Entidade JPA (Event.java)
│   ├── repository/         # Spring Data Repository
│   ├── service/            # Interface e implementação de regras
│   ├── config/             # CORS e outras configs
│   └── EventapiApplication.java
└── application.properties  # Configuração do banco de dados

frontend/
├── src/app/
│   ├── components/         # Componentes Angular (CRUD de eventos)
│   ├── services/           # Serviço central: EventoService
│   ├── app.routes.ts       # Rotas standalone
│   └── app.component.ts    # Navbar + Router
└── main.ts                 # Bootstrap da aplicação
```

---

## 🧪 Como executar o projeto

### 🔁 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

---

### ☕ 2. Backend - Spring Boot

#### a) Criar banco de dados PostgreSQL:

```sql
CREATE DATABASE eventdb;
```

#### b) Configurar `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/eventdb
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

#### c) Executar o backend:

```bash
cd backend
./mvnw spring-boot:run
```

Servidor: http://localhost:8080

---

### 🌐 3. Frontend - Angular

#### a) Instalar dependências:

```bash
cd frontend
npm install
```

#### b) Rodar o Angular:

```bash
ng serve
```

Aplicação: http://localhost:4200

---

## ✅ Funcionalidades

- [x] Adicionar novo evento
- [x] Listar todos os eventos
- [x] Buscar evento por nome
- [x] Excluir evento
- [x] Alterar nome do evento
- [x] Armazenamento persistente via banco de dados
- [x] Interface moderna e responsiva


