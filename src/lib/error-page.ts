export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load — NOLA Web Solutions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        background: #07111F;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
        box-sizing: border-box;
      }
      .card {
        max-width: 30rem;
        width: 100%;
        text-align: center;
      }
      .badge {
        display: inline-block;
        border: 1px solid rgba(255,255,255,0.15);
        background: rgba(255,255,255,0.04);
        padding: 0.35rem 1rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #12C8EA;
        margin-bottom: 1.5rem;
      }
      h1 {
        font-family: 'Syne', sans-serif;
        font-size: 2.25rem;
        font-weight: 800;
        margin: 0 0 1rem;
        letter-spacing: -0.02em;
        line-height: 1.1;
      }
      p {
        color: rgba(255,255,255,0.6);
        margin: 0 0 2rem;
        font-size: 1rem;
        line-height: 1.6;
      }
      .actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      a, button {
        padding: 0.75rem 1.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 1px solid transparent;
      }
      .primary {
        background: #ffffff;
        color: #07111F;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      }
      .primary:hover {
        background: #f1f5f9;
      }
      .secondary {
        background: rgba(255,255,255,0.05);
        color: #ffffff;
        border-color: rgba(255,255,255,0.2);
      }
      .secondary:hover {
        background: rgba(255,255,255,0.1);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="badge">✦ System Notice ✦</div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
