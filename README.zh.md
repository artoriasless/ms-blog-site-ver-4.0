# ms-blog-site-ver-4.0
自己搭的一个博客网站，4.0 版本

## 简述
*   服务端使用 koa2
*   数据库使用 mysql
*   前端框架使用 react
*   前端 UI 框架使用 bootstrap

## 说明
*   如果需要本地启动服务， node 版本至少为 7.6.0 ( koa2 限制)
*   package.json 中的启动脚本在 Linux/OS X 下正常执行，在 windows 环境下会报错，可能需要做部分修改
    *   修改 `NODE_ENV=development` 为 `$env:NODE_ENV="development"` 可能可以解决这个问题
    *   如果无法解决，请上 **Stack Overflow** 寻求帮助

## 其他
*   如果需要在本项目的基础上进行修改，本地需要开两个终端
    *   一个用于启动项目，同时监听项目文件的变化
        *   `npm run dev`
    *   另一个终端用来监听前端模块的变化，用于实时打包
        *   `cd ./web/src`
        *   `npm run pack`
*   **提醒**
    *   在运行上述两个脚本之前，请确保已经安装了所有依赖：项目的依赖，以及前端模块的依赖
