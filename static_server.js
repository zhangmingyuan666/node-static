const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// 当前文件路径dirname
const folderPath = path.resolve(__dirname, "./static");

const server = http.createServer((req, res) => {
  // 收到 127.0.0.1:3000/index.html 我们返回index.html资源
  req.on("error", () => {
    //
  });
  try {
    // 获取路径后缀 index.html
    const info = url.parse(req.url);

    // 文件夹路径 + 需要获取的资源路径
    const filePath = path.resolve(folderPath, "./" + info.path);

    // 流读取
    const fileStream = fs.createReadStream(filePath);

    // pipe:以流的方式进行响应
    fileStream.pipe(res);
  } catch (err) {
    console.log('err');
  }
});

const port = 8888;

server.listen(port, () => {
  console.log("success test");
});
