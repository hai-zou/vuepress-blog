---
title: 如何在页面中接入 giscus 评论插件
date: 2023-06-05
category:
  - GitHub
---

## 介绍

Giscus 是一个基于 GitHub Discussion 的评论系统。
仓库中的 `Discussions` 便是存放评论的地方。

## 准备

1. 新建一个公开的仓库
   ![创建公开仓库](/images/giscus_1.webp)

2. 找到仓库中的 Settings 设置，勾选 Discussions，并点击 Set up discussions，开启评论区
   ![开启评论区](/images/giscus_2.webp)

3. 安装 [Giscus App](https://github.com/apps/giscus)
   ![安装](/images/giscus_3.webp)

4. 选择刚刚创建好的仓库，点击保存
   ![选择仓库](/images/giscus_4.webp)

5. 前往 [Giscus 页面](https://giscus.app/zh-CN)，只需要填写仓库名称和 Discussion 分类
   ![填写名称](/images/giscus_5.webp)
   ![选择分类](/images/giscus_6.webp)

6. 获取 `data-repo`, `data-repo-id`, `data-category` 和 `data-category-id` 这四个属性
   ![获取属性](/images/giscus_7.webp)

## 使用

支持 React、Vue 和 Svelte 中使用 giscus，可以参考[giscus 组件库](https://github.com/giscus/giscus-component)

本文以 Vue 为例

```bash
npm i @giscus/vue
```

封装一个 comment.vue 的组件

```vue
<template>
	<Giscus
		id="comments"
		repo="hai-zou/poseidon"
		repoId="R_kgDOIPqaJQ"
		category="General"
		categoryId="DIC_kwDOIPqaJc4CW4xW"
		mapping="pathname"
		term="Welcome to component!"
		inputPosition="top"
		theme="light"
		lang="zh-CN"
		loading="lazy"
	/>
</template>
```
