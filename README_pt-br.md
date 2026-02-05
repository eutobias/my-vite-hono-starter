# My Vite Hono Boilerplate

[📖 Read in English](README.md)

Um boilerplate para iniciar uma aplicação web full-stack moderna que combina **Vite**, **Hono** e **JSX** (Hono/Jsx) com renderização no servidor (SSR) e hidratação do código cliente.

---

Basicamente, você só precisa espelhar a rota no AppRouter com a rota do routes.tsx (rotas backend feitas com hono). Se você quiser carregar as informações no backend, cada página pode ter uma função assíncrona que carrega os dados no servidor e os serve como o initialState da aplicação.

---

# My Vite Hono Boilerplate

[📖 Read in English](README.md)

Um boilerplate para iniciar uma aplicação web full-stack moderna que combina **Vite**, **Hono**, e **JSX** (Hono/Jsx) com renderização no servidor (SSR) e hidratação no cliente.

---

Basicamente, você só precisa espelhar a rota no AppRouter com a rota do routes.tsx (rotas backend feitas com hono). Se você quiser carregar as informações no backend, cada página pode ter uma função assíncrona que carrega os dados no servidor e os serve como o initialState da aplicação.

---

## 🚀 Tecnologias

- **[Hono](https://hono.dev/)** - Framework web ultrarrápido para Node.js
- **[Vite](https://vitejs.dev/)** - Bundler moderno com HMR
- **[Wouter](https://github.com/molefrog/wouter)** - Router minimalista para React
- **Hono/JSX** (via Hono/JSX/DOM) - Suporte JSX com Hono

---

## 📁 Estrutura do Projeto

```
src/
├── server.tsx          # Entry point do servidor (SSR)
├── client.tsx          # Entry point do cliente (hidratação)
├── app/
│   ├── App.tsx         # Componente raiz com routing
│   ├── AppRouter.tsx   # Configuração do router
│   ├── Layout.tsx      # Layout HTML da aplicação
│   └── components/     # Componentes reutilizáveis
│       ├── Counter.tsx      # Exemplo com useState()
│       └── ClockButton.tsx  # Exemplo com fetch de API
├── pages/
│   ├── Home.tsx        # Página inicial com loader
│   ├── About.tsx       # Página Sobre com loader
│   └── routes.tsx      # Roteamento SSR com integração de loader
└── api/
    └── routes.ts       # Rotas da API REST
```

---

## 💡 Funcionalidades

- **Renderização no Servidor (SSR)** - Páginas renderizadas no backend com hidratação no cliente
- **Roteamento Client-Side** - Navegação sem recarregar a página (Home e About)
- **Componentes Interativos** - Exemplos de `useState()` e chamadas de API
- **API REST** - Endpoint de exemplo
- **Carregamento de Dados SSR com Funções Loader**  
  Cada página exporta uma função `loader` (veja [Home.tsx](src/pages/Home.tsx) e [About.tsx](src/pages/About.tsx)) que busca os dados no servidor antes de renderizar.  
  O estado inicial é injetado no HTML e hidratado no cliente para uma integração perfeita entre SSR/CSR.

---

## 🛠️ Scripts

```bash
npm run dev    # Inicia servidor de desenvolvimento com HMR
npm run build  # Build de produção (client + server)
```

Para iniciar a aplicação após build:

```bash
cd dist # importante: entre neste diretório antes de iniciar para evitar problemas no servidor estático
node index.js
```

---

## 📦 Dependências Principais

- `hono` - Framework web
- `wouter-hono` - Routing
- `@hono/node-server` - Servidor Node.js
- `@hono/vite-build` - Plugin Vite para Hono
- `@hono/vite-dev-server` - Dev server integrado
---
