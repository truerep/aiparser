const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const PORT = process.env.SERVER_PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();
    server.use((req, res, next) => {
      next();
    });

    server.get('/health', (req, res) => {
      res.send('Hellow Human...');
    });

    server.get('/', (req, res) => {
      const actualPage = '/guest/landing-page';
      const queryParams = {};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      req.url = req.url.replace(/\/$/, '');
      if (req.url === '') {
        req.url = '/';
      }
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

// server.get(`${'/'}/urlPath/:slug1/:slug2`, (req, res) => {
//   const actualPage = '/file-path';
//   const queryParams = {
//     slug1: req.params.slug1,
//     slug2: req.params.slug2
//   };
//   app.render(req, res, actualPage, queryParams);
// });
