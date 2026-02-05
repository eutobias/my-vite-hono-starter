# My Vite Hono Boilerplate

[📖 Leia em Português](README_pt-br.md)

A boilerplate to start a modern full-stack web application combining **Vite**, **Hono**, and **JSX** (Hono/Jsx) with server-side rendering (SSR) and client-side hydration.

---

Basically, you just need to mirror the route in AppRouter with the route from routes.tsx (backend routes made with hono). If you want to load the information in the backend, each page can have an asynchronous function that loads the data on the server and serves it as the initialState of the application.

---

## 🚀 Technologies

- **[Hono](https://hono.dev/)** - Ultrafast web framework for Node.js
- **[Vite](https://vitejs.dev/)** - Modern bundler with HMR
- **[Wouter](https://github.com/molefrog/wouter)** - Minimalist router for React
- **Hono/JSX** (via Hono/JSX/DOM) - JSX support with Hono 

---

## 📁 Project Structure

```
src/
├── server.tsx          # Server entry point (SSR)
├── client.tsx          # Client entry point (hydration)
├── app/
│   ├── App.tsx         # Root component with routing
│   ├── AppRouter.tsx   # Router configuration
│   ├── Layout.tsx      # HTML layout of the application
│   └── components/     # Reusable components
│       ├── Counter.tsx      # Example with useState()
│       └── ClockButton.tsx  # Example with API fetch
├── pages/
│   ├── Home.tsx        # Home page with loader
│   ├── About.tsx       # About page with loader
│   └── routes.tsx      # SSR routing with loader integration
└── api/
    └── routes.ts       # REST API routes
```

---

## 💡 Features

- **Server-Side Rendering (SSR)** - Pages rendered on the backend with client-side hydration
- **Client-Side Routing** - Navigation without page reload (Home and About)
- **Interactive Components** - Examples of `useState()` and API calls
- **REST API** - Example endpoint
- **SSR Data Loading with Loader Functions**  
  Each page exports a `loader` function (see [`Home.tsx`](src/app/pages/Home.tsx) and [`About.tsx`](src/app/pages/About.tsx)) that fetches data on the server before rendering.  
  The initial state is injected into the HTML and hydrated on the client for seamless SSR/CSR integration.

---

## 🛠️ Scripts

```bash
npm run dev    # Start development server with HMR
npm run build  # Production build (client + server)
```

To start the application after build:

```bash
cd dist # important: enter this directory before starting to avoid static server issues
node index.js
```

---

## 📦 Main Dependencies

- `hono` - Web framework
- `wouter-hono` - Routing
- `@hono/node-server` - Node.js server
- `@hono/vite-build` - Vite plugin for Hono
- `@hono/vite-dev-server` - Integrated dev server

---


