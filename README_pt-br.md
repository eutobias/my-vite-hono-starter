# My Vite Hono Boilerplate

[📖 Read in English](README.md)

Um boilerplate para iniciar uma aplicação web full-stack moderna que combina **Vite**, **Hono** e **JSX** (Hono/Jsx) com renderização no servidor (SSR) e hidratação do código cliente.

## 🚀 Tecnologias

- **[Hono](https://hono.dev/)** - Framework web ultrarrápido para Node.js
- **[Vite](https://vitejs.dev/)** - Bundler moderno com HMR
- **[Wouter](https://github.com/molefrog/wouter)** - Router minimalista para React
- **Hono/JSX** (via Hono/JSX/DOM) - Suporte JSX com Hono 

## 📁 Estrutura

```
src/
├── server.tsx          # Entry point do servidor (SSR)
├── client.tsx          # Entry point do cliente (hidratação)
├── app/
│   ├── App.tsx        # Componente raiz com routing
│   ├── Layout.tsx     # Layout HTML da aplicação
│   └── components/    # Componentes reutilizáveis
│       ├── Counter.tsx      # Exemplo com useState()
│       └── ClockButton.tsx  # Exemplo com fetch de API
└── api/
    └── routes.ts      # Rotas da API REST
```

## 💡 Funcionalidades

- **Renderização no Servidor (SSR)** - Páginas renderizadas no backend com hidratação no cliente
- **Roteamento Client-Side** - Navegação sem recarregar a página (Home e About)
- **Componentes Interativos** - Exemplos de `useState()` e chamadas de API
- **API REST** - Endpoint de exemplo

## 🛠️ Scripts

```bash
npm run dev    # Inicia servidor de desenvolvimento com HMR
npm run build  # Build de produção (client + server)
```

para iniciar aplicação após build
```bash
cd dist #importante entrar no mesmo diretório antes de iniciar para não quebrar o servidor estático
node index.js
```

## 📦 Dependências Principais

- `hono` - Framework web
- `wouter-hono` - Routing
- `@hono/node-server` - Servidor Node.js
- `@hono/vite-build` - Plugin Vite para Hono
- `@hono/vite-dev-server` - Dev server integrado
