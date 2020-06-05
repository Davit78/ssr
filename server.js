// for HTTPS calls
const tls = require('tls')
tls.DEFAULT_ECDH_CURVE = 'auto'

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

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });

    koa.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });

    koa.use(router.routes());
    
    koa.listen(port, () => {
      console.log(`> Ready on http://localhost:3001`)
    })
  });
