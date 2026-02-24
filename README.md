# 📊 Bem Serviço - Dashboard de Vendas

Dashboard simples para acompanhamento de metas de vendas da equipe, exibindo o progresso em tempo real através de uma barra de progresso visual.

## 🖥️ Visão Geral

A aplicação consiste em uma **tela única (Dashboard)** que mostra:

- Total de vendas em movimento (vidas)
- Meta da equipe para 2026
- Barra de progresso indicando o avanço em relação à meta
- Mensagem de celebração ao bater a meta 🎉

## 🛠️ Tecnologias

- **React 19** — Biblioteca para construção da interface
- **Vite 7** — Bundler e servidor de desenvolvimento
- **Styled Components** — Estilização dos componentes
- **React Router DOM** — Roteamento da aplicação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ProgressBar/       # Componente de barra de progresso
├── pages/
│   └── Dashboard/         # Página principal do dashboard
├── assets/                # Arquivos estáticos
├── App.jsx                # Componente raiz com rotas
├── main.jsx               # Ponto de entrada da aplicação
└── index.css              # Estilos globais
```

## 🚀 Como Rodar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd bem_servico
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto:
   ```
   VITE_URL_BACK_END="https://sua-api-aqui"
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

## 📡 API

A aplicação consome um endpoint **GET** `/dados` do back-end configurado na variável de ambiente `VITE_URL_BACK_END`, que retorna o total de vendas atual.
