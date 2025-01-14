---
sidebarDepth: 2
redirectFrom:
  - /guide/introduction/console.html
  - /guide/introduction/template.html
---

# 创建模板项目

::: tip
如果想了解其他安装方式，请移步 [选择安装方式](./index.md)。
:::

本章将介绍我们最推荐的 Koishi 上手方案——创建模板项目。

## 安装 Node.js

Koishi 需要 [Node.js](https://nodejs.org/) (最低 v12，推荐使用 LTS) 运行环境，你需要自己安装它。

### 下载安装包

首先我们前往 [Node.js](https://nodejs.org/) 的官方网站：

![home](/manual/starter/nodejs/home.jpg)

在这里可以看到两个巨大的按钮，分别对应着 **LTS (长期维护版)** 和 **Current (最新版本)**。我们建议你选择更加稳定的 LTS 版本，点击按钮即可下载安装包。

::: tip
#### Windows 7 用户看这里！
Windows 7 不支持 v14 以上的版本，因此上述版本你是无法安装的。此时请使用 v12 版本 (也不要下载 v13，因为 Node.js 的奇数版本都是不稳定的)。你可以前往这里的 [镜像链接](https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/v12.22.12/) 以下载 (32 位系统请下载 `x86.msi`，64 位系统请下载 `x64.msi`)。
:::

### 完成安装

运行下载好的安装包，根据提示完成整个安装流程即可。

安装完成后可以在命令行中输入 `node -v` 确认是否安装成功：

```sh
$ node -v
16.15.1
```

## 创建项目

我们提供了两种创建模板项目的方法。你可以使用其中的任意一种。

### 使用包管理器创建

在任意目录启动命令行，输入下面的指令：

::: code-group manager
```npm
npm init koishi
```
```yarn
yarn create koishi
```
:::

跟随提示即可完成全套初始化流程。

:::: tip
由于国内可能无法访问 GitHub，你可能需要科学上网或使用镜像。例如你可以使用 [FastGit](http://fastgit.org/) 作为镜像源，只需在上面的脚本后添加 `-m https://hub.fastgit.xyz` 即可。
::::

### 从模板仓库创建

访问模板仓库需要你有一个 [GitHub](https://github.com/) 账号。我们假设你已经处于登录状态。

1. 点击 [这里](https://github.com/koishijs/boilerplate/generate) 以创建此仓库的副本。
    <br>注意：创建副本不同于 fork，它生成的新仓库不会包含当前仓库的提交历史。
2. 将你创建的项目 clone 到本地，并在本地目录启动命令行。
3. 输入 `npm install` / `yarn` 安装依赖。
4. 输入 `npm start` / `yarn start` 开始运行。

::: warning
#### pnpm 用户看这里！
Koishi 不支持 pnpm 默认的 isolated linker。如果你确实想使用 pnpm，请在安装依赖前运行如下命令：

```sh
echo node-linker=hoisted > .npmrc
```

:::

## 启动应用

如果你顺利完成了上述操作，你的应用此时应该已经是启动状态，你无需进行额外的操作。当应用处于关闭状态时，你可以在运行下面的指令以再次启动：

::: code-group manager
```npm
npm start
```
```yarn
yarn start
```
:::

## 下一步

恭喜你已经学会了 Koishi 的安装方法！接下来：

- 首先建议你阅读 [使用控制台](../console/)，你可以快速掌握 Koishi 的使用方法
- 如果想要创建自己的第一个插件，请阅读 [插件开发](../cli/development.md)
- 如果你想继续学习 Koishi 的开发，我们的 [指南](../../guide/) 提供了详细的资料
- 如果你想了解更多的插件以便快速搭建成熟的项目，可以前往 [官方插件](../../plugins/) 部分
