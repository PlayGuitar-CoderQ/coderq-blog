<br>
<p align="center">
<a href="https://sli.dev" target="_blank">
<img src="https://static01.imgkr.com/temp/bfc1e4e2d4b24ec588ba58a4a1ba5bf3.png" alt="CoderQ" height="250" width="250"/>
</a>
</p>

<br/>

 <h1 align="center"> ~ 弹吉他🎸的Coder_Q 🤖 - 博客平台 ~</h1>

## 🗿 &nbsp; <b>特征<b/>

- 💈 样式基于 hexo 比较受欢迎的主题 - hexo-theme-aurora，进行模仿改造
- 🦋 使用 next12 进行开发，有着良好的 seo，以及性能提升，并且搭配 node.js 后端服务进行的前后端分离
- 🏗 长期对当前项目进行维护。
- 🔩 代码遵循凹凸实验室的代码规范（也是比较受好评的规范），保证代码的可读性和可维护性。
- 🔭 项目开发基于腾讯的 DevOps 平台 coding 进行敏捷管理，有着严格的开发流程，监控，埋点，测试。都是该项目将要实现的功能。

<br/>

## 🧬 &nbsp; <b>技术栈（后续持续增加新技术）</b>

- [![license](https://img.shields.io/badge/React-17.0.2-blue?logo=React)](LICENSE) - 采用比较主流的 React 框架版本
- [![license](https://img.shields.io/badge/Less-17.0.2-blue?logo=Less)](LICENSE) - 流行的 css 预处理器
- [![license](https://img.shields.io/badge/Next.js-12.0.10-white?logo=Next.js)](LICENSE) - 基于 React 的同构解决方案，优秀的 ssr 框架
- [![license](https://img.shields.io/badge/Typescript-4.5.5-gray?logo=Typescript)](LICENSE) - Javascript 的超集，前端工程师的新利器

<br/>

## 👮‍♀️ &nbsp; <b>代码工作流</b>

- 选用 gitlab flow 工作流进行分支管理
- 特点是以"上游优先"。进行管理
- 采用 gitlab flow 的原因是，很好的综合了 git flow 工作流的优点以及 github flow 工作流的优点，可简易管理，亦能细化式的管理。非常符合我个人开发使用，也兼顾到未来有多人开发进行的时候采取的方案。
- 相关文章：https://zhuanlan.zhihu.com/p/370686069、https://zhuanlan.zhihu.com/p/439678144

<br/>

## 🖥 &nbsp; <b>项目的脚本命令</b>

```shell
 # yarn [命令]

 yarn dev

 yarn build

```

- dev: 启动开发环境
- build: 打包项目，用于发布生产
- start: 生产环境启动项目
- prepare: 安装 node_modules 依赖的时候回触发该命令，husky 安装对应的 git 钩子
- release: 管控 package.json 版本，并生成对应的版本 CHANGELOG.md
- lint:pretty: prettier 格式化 git 暂存空间的代码
- lint:lint-staged: 对暂存的代码文件运行 linter
- lint:eslint: 运行 eslint，匹配自定义规则进行修复代码
- lint:stylelint: 运行 stylelint，匹配自定义规则修复样式代码
- git:coding: 提交代码到本人的 coding 敏捷开发平台仓库。
- git:all: 提交代码到 gitee、github、gitlab 上。

<br>

> 🤓 这里解释一下为什么有两个**git**的脚本命令。因为在 coding 平台上有着十分优秀的流程管控，有着完善的**ci/cd**功能，和**测试功能**，他能保障我提交的代码是符合测试并且能成功发布预览起来的，所以才区分开提交**coding**和其他仓库的命令。这样 coding 里的提交代码检查完成后，即可手动触发，也能通过集成工具触发提交到其他仓库的命令了 -- **git:all**

<br>

## 🙋‍♂️ 着重申明

- 本项目大量样式代码都借鉴与 hexo-theme-aurora 项目，但未必一模一样，实现手法也未必一样，请悉知。
- 项目地址： https://github.com/auroral-ui/hexo-theme-aurora
- 项目效果：https://tridiamond.tech/

<br/>

## MIT 协议

[MIT © CoderQ-2022](./LICENSE)
