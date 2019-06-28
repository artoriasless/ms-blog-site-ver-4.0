# ms-blog-site-ver-4.0
自己搭的一个博客网站，4.0 版本（[English](https://github.com/MonkingStand/ms-blog-site-ver-4.0))

> 线上运行版本可访问 **[stanby.cn](http://www.stanby.cn)**

## 简述
*   服务端使用 koa2
*   数据库使用 mysql
*   前端框架使用 react
*   前端 UI 框架使用 bootstrap
*   前端使用 postcss 编写自定义的样式文件
*   关于前端实时打包构建
    +   gulp + webpack
    +   gulp 实时编译合并 stylesheet 样式文件
    +   webpack 实时编译打包 javascript 文件
    +   发生文件变化后，监听变化的文件类型（stylesheet 或者 javascript），进行增量构建，根据修改的文件获取其入口文件，选择性地打包
*   关于前端静态资源
    *   所有静态资源现已迁移至 **OSS** ，考虑到实际场景和成本，暂时没有使用 **CDN** 加速

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
        *   `npm run pack-development`
*   **提醒**
    *   在运行上述两个脚本之前，请确保已经安装了所有依赖：项目的依赖，以及前端模块的依赖
    *   本应用使用了作者的个人 gmail 邮箱进行发送邮件的操作，出于保护隐私，这部分的配置信息添加到了 **`.gitignore`** 中，如果有用户需要进行二次开发，在 **`config`** 中添加 **`email-config.js`** 的配置信息即可（内容参考 **`config/email-config-tpl.js`**）
    *   本应用使用了 oss 上传文件，使用了作者个人的阿里云相关密钥等信息，出于保护隐私，这部分的配置信息添加到了 **`.gitignore`** 中，如果有用户需要进行二次开发，在 **`config`** 中添加 **`oss-config.js`** 的配置信息即可（内容参考 **`config/oss-config-tpl.js`**）

## 技术栈说明
+   前端打包方案：gulp + webpack
    1.  各取所长
        +   gulp 更侧重于自动化构建工具，强调 task 的概念，提供了打包 js、css 等静态资源的功能
        +   webpack 更侧重于模块化的解决方案，强调 bundle 的概念，对单个入口文件做处理，将其所引入的各类静态资源独立打包
        +   关于处理静态文件资源（ fonts 、 iamges），**` gulp.watch `** 比 webpack 的 **` Copy Webpack Plugin `** 更为安全
        +   对于 stylesheet 的预处理上，gulp 的效率比 webpack 较高
        +   关于 stylesheet 中的字体、图片引用，本身 webpack 不支持此功能，需要通过各种 loader 、plugin 来实现，默认的 webpack 只会识别 js 中的 **` require('../xx/xx.png') `**

    2.  webpack 中用于独立打包输入 css 的插件耗时太大，对于开发人员效率过于低下
        +	主要表现在 **` css-loader `** 、 **` style-loader `** ，以及 **` sass-loader `** 、 **` less-loader `** 、 **` postcss-loader `** 这类样式预处理 loader 以及用于独立打包输出 css 的 **` extract-text-webpack-plugin `** 插件上

+   前端实时构建（增量构建）
    +   采用 chokidar（基于 fs.watch）监听文件变化，进行实时打包构建
        1.  放弃使用 nodemon 监听文件变化后重启进程 -> 效率太低
        2.  放弃使用 webpack 热启动来实时监听文件变化 -> gulp.watch 会将该进程阻塞
        3.  放弃使用 gulp.watch 监听文件变化 -> 文件夹删除会报错
        4.  最终使用 chokidar 监听文件变化（基于原生 fs.watch）
            +   监听文件变化不报错
            +   后续增量构建时更灵活

## TODO
+   oss-pusher
    +   由于现阶段前端静态资源已全部迁移至 **OSS** ，此应用将用于发布前端应用静态资源