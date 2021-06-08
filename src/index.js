const Koa = require("koa");
const KoaRouter = require("koa-router");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const json = require("koa-json");
const SendEmail = require("./methods/SendEmail.js");

// 1. 生成应用及路由器实例
const app = new Koa();
const router = new KoaRouter();

// 核心代码
router.get("/", (ctx, next) => {
  // 1. 获取请求的参数

  // 2. 根据请求的地址和参数处理数据

  // 3. 响应数据
  ctx.body = "hello world";
});

router.get("/api", function (ctx) {
  //get params = ctx.request.query
  const params = ctx.request.query;
  console.log(params);
  console.log(params);
  console.log(ctx);
  ctx.body = "hello routerApi";
});

router.post("/post", async (ctx) => {
  let { body } = ctx.request; // es6的写法把ctx.request请求体的所有方法都放到body对象里面去
  console.log(body);
  console.log(ctx.request);
  let aa = {};
  aa.status = "";
  aa.name = "cx2";
  ctx.body = aa;
});

// 核心代码
router.get("/send-email", async (ctx, next) => {
  const text = ctx.query || "Hello";
  console.log(ctx.query);
  //   SendEmail(text);
  ctx.body = "已经发送啦";
});

// 2. 使用路由器及路由
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods())
  .use(koaBody())
  .use(cors())
  .use(json({ pretty: false, param: "pretty" })); // 允许使用路由的方法

// 3. 监听端口
app.listen("3000", () => {
  console.log("服务器启动成功");
  console.log("服务器地址： http://localhost:3000");
});
