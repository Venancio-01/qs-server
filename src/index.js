const Koa = require("koa");
const KoaRouter = require("koa-router");
const SendEmail = require("./methods/SendEmail.js");

// 1. 生成应用及路由器实例
const app = new Koa();
const router = new KoaRouter();

// 核心代码
router.get("/", (ctx, next) => {
  // 1. 获取请求的参数

  // 2. 根据请求的地址和参数处理数据

  // 3. 响应数据
  ctx.body = "我是服务器";
});

// 核心代码
router.get("/send-email", async (ctx, next) => {
  const text = ctx.query || 'Hello'
  console.log(ctx.query)
//   SendEmail(text);
  ctx.body = "已经发送啦";
});

// 2. 使用路由器及路由
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()); // 允许使用路由的方法

// 3. 监听端口
app.listen("3000", () => {
  console.log("服务器启动成功");
  console.log("服务器地址： http://localhost:3000");
});
