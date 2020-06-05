require("dotenv").config();

// for HTTPS calls
const tls = require('tls')
tls.DEFAULT_ECDH_CURVE = 'auto'

const config = require('config');
const next = require('next');

const Koa = require('koa');
const Router = require('koa-router');

const dev = process.env.NODE_ENV == 'development';
const app = next({ dev, dir: 'app' });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const koa = new Koa();
    const router = new Router();

    config.get('routes.root').forEach((rootPage) => {
      router.get(`${rootPage.source}`, async ctx => {
        await app.render(ctx.req, ctx.res, `${rootPage.target}`); 
        ctx.respond = false;
      });
    });

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });

    koa.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });

    koa.use(router.routes());
    
    const port = config.get('server.port');
    koa.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  });
