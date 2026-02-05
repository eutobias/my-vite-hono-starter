import { PropsWithChildren } from 'hono/jsx'

interface LayoutProps extends PropsWithChildren {
  initialState?: Record<string, any>;
}

export function Layout({children, initialState = {}}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
        {import.meta.env.PROD ? (
          <script type="module" src="/static/client.js" />
        ) : (
          <script type="module" src="/src/client.tsx" />
        )}
      </head>
      <body>
        <div id="root">{children}</div>
        <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};`}} />
      </body>
    </html>
  );
}
