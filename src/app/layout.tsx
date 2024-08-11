import './global.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="description" content="My App is a search movies." />
        <title>Movie Search</title>
      </head>

      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
