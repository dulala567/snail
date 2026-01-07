# 博客配置指南 📝

恭喜！你的博客已经基本设置完成。现在访问 http://localhost:3000 就可以看到中文版的博客了。

## 📋 已完成的配置

✅ 网站中文化（导航、作者信息、项目介绍）
✅ 创建了中文示例文章
✅ 搜索功能（Ctrl+K 打开）
✅ 主题切换（右上角月亮/太阳图标）
✅ 响应式设计（支持手机访问）

## 🔧 需要你手动配置的功能

### 1. 配置 Giscus 评论系统 💬

评论系统基于 GitHub Discussions，需要以下步骤：

#### 步骤 1：准备 GitHub 仓库
1. 在 GitHub 上创建一个公开仓库（用于存放博客源码）
2. 进入仓库的 **Settings** → **General**
3. 滚动到 **Features** 部分，勾选 **Discussions**
4. 点击 **Set up discussions**

#### 步骤 2：获取 Giscus 配置
1. 访问 https://giscus.app/zh-CN
2. 用 GitHub 账号登录并授权
3. 填写仓库信息：
   - **仓库**：你的用户名/你的仓库名
   - **页面 ↔️ discussions 映射关系**：选择 "pathname"（推荐）
   - **Discussion 分类**：选择 "Announcements"
   - **特性**：勾选你想要的功能（如 reactions）
   - **主题**：
     - 浅色主题：`light`
     - 深色主题：`transparent_dark`
   - **语言**：选择 `zh-CN`（中文）
   - **懒加载**：勾选

#### 步骤 3：创建环境变量文件
在 `my-blog` 文件夹中创建 `.env.local` 文件：

```bash
# 复制示例文件
cp .env.local.example .env.local
```

然后编辑 `.env.local`，填入从 giscus.app 获取的值：

```bash
NEXT_PUBLIC_GISCUS_REPO=你的用户名/你的仓库名
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=R_kgDO...（从 giscus 获取）
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO...（从 giscus 获取）
```

#### 步骤 4：更新 siteMetadata.js
确保 `data/siteMetadata.js` 中的评论配置正确：

```javascript
comments: {
  provider: 'giscus',
  giscusConfig: {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    mapping: 'pathname',
    reactions: '1',
    theme: 'light',
    darkTheme: 'transparent_dark',
    lang: 'zh-CN',
  },
}
```

#### 步骤 5：重启开发服务器
```bash
# 停止当前服务器（Ctrl+C）
# 然后重新启动
npm run dev
```

### 2. 个性化网站信息 🎨

编辑 `data/siteMetadata.js`，将以下内容替换为你的信息：

```javascript
title: '我的技术博客',              // 网站标题
author: '博主',                     // 作者名
headerTitle: '我的博客',            // 导航栏标题
description: '使用 Next.js 和 Tailwind.css 创建的个人博客',
email: 'your-email@example.com',   // 你的邮箱
github: 'https://github.com/你的用户名',
x: 'https://twitter.com/你的用户名',
linkedin: 'https://www.linkedin.com/in/你的用户名',
```

### 3. 自定义作者信息 👤

编辑 `data/authors/default.mdx`：

```yaml
---
name: 你的名字
avatar: /static/images/avatar.png  # 替换为你的头像图片
occupation: 软件工程师
company: 你的公司
email: your-email@example.com
twitter: https://twitter.com/yourusername
linkedin: https://www.linkedin.com/in/yourusername
github: https://github.com/yourusername
---
```

然后将你的头像图片放到 `public/static/images/avatar.png`

### 4. 添加你的博客文章 📝

在 `data/blog/` 文件夹中创建 `.mdx` 或 `.md` 文件：

```markdown
---
title: '文章标题'
date: '2025-01-06'
tags: ['标签1', '标签2']
draft: false  # 设为 true 则不会显示
summary: '文章摘要'
images: ['/static/images/封面图.png']
---

# 文章内容

这里是正文...
```

### 5. 自定义项目展示 🚀

编辑 `data/projectsData.ts`，添加你的项目：

```typescript
{
  title: '项目名称',
  description: `项目描述`,
  imgSrc: '/static/images/project-image.png',
  href: 'https://项目链接.com',
}
```

## 🚀 部署到 Vercel

### 方法 1：通过 Vercel 网站（最简单）

1. 访问 https://vercel.com/
2. 用 GitHub 账号登录
3. 点击 "Add New Project"
4. 导入你的博客仓库
5. Vercel 会自动检测 Next.js 项目并配置
6. 点击 "Deploy"

### 方法 2：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录中运行
vercel

# 按照提示操作即可
```

### 环境变量设置

部署时记得在 Vercel 中设置环境变量：
1. 进入项目设置 → Environment Variables
2. 添加所有 `NEXT_PUBLIC_*` 变量
3. 重新部署

## 📱 测试功能

访问 http://localhost:3000 并测试：

1. **主题切换**：点击右上角 🌙 图标
2. **搜索**：按 `Ctrl + K` (Windows) 或 `Cmd + K` (Mac)
3. **响应式**：调整浏览器窗口大小
4. **评论**：在任意文章底部查看评论区（需要先配置）

## 🎯 下一步

1. ✅ 配置 Giscus 评论系统
2. ✅ 替换个人信息（姓名、头像、社交链接）
3. ✅ 写你的第一篇博客文章
4. ✅ 部署到 Vercel
5. ✅ 分享你的博客链接！

## 📚 参考资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [MDX 文档](https://mdxjs.com/docs/)
- [Giscus 配置](https://giscus.app/zh-CN)

## ❓ 常见问题

### Q: 如何更改主题颜色？
A: 编辑 `tailwind.config.js`，修改 `primary` 颜色值。

### Q: 如何添加新的导航链接？
A: 编辑 `data/headerNavLinks.ts`

### Q: 如何修改首页内容？
A: 首页组件在 `app/page.tsx`

### Q: 评论不显示怎么办？
A: 检查：
1. `.env.local` 文件是否正确配置
2. GitHub 仓库是否启用了 Discussions
3. 重启开发服务器

---

祝你使用愉快！如有问题随时问我 😊
