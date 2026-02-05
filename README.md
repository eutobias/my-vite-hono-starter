# My Vite Hono Boilerplate

[📖 Leia em Português](README_pt-br.md)

A boilerplate to start a modern full-stack web application combining **Vite**, **Hono**, and **JSX** (Hono/Jsx) with server-side rendering (SSR) and client-side hydration.

## 🚀 Technologies

- **[Hono](https://hono.dev/)** - Ultrafast web framework for Node.js
- **[Vite](https://vitejs.dev/)** - Modern bundler with HMR
- **[Wouter](https://github.com/molefrog/wouter)** - Minimalist router for React
- **Hono/JSX** (via Hono/JSX/DOM) - JSX support with Hono 

## 📁 Project Structure

```
src/
├── server.tsx          # Server entry point (SSR)
├── client.tsx          # Client entry point (hydration)
├── app/
│   ├── App.tsx        # Root component with routing
│   ├── Layout.tsx     # HTML layout of the application
│   └── components/    # Reusable components
│       ├── Counter.tsx      # Example with useState()
│       └── ClockButton.tsx  # Example with API fetch
└── api/
    └── routes.ts      # REST API routes
```

## 💡 Features

- **Server-Side Rendering (SSR)** - Pages rendered on the backend with client-side hydration
- **Client-Side Routing** - Navigation without page reload (Home and About)
- **Interactive Components** - Examples of `useState()` and API calls
- **REST API** - Example endpoint

## 🛠️ Scripts

```bash
npm run dev    # Start development server with HMR
npm run build  # Production build (client + server)
```

to start aplication after build
```bash
cd dist #important enter in the same dir before start to not broke static server 
node index.js
```

## 📦 Main Dependencies

- `hono` - Web framework
- `wouter-hono` - Routing
- `@hono/node-server` - Node.js server
- `@hono/vite-build` - Vite plugin for Hono
- `@hono/vite-dev-server` - Integrated dev server
