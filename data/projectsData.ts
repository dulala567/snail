interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '个人博客系统',
    description: `使用 Next.js 和 Tailwind CSS 构建的现代化个人博客平台。支持 Markdown 写作、深色模式、
    全文搜索和评论功能。完美适配移动端，加载速度快，SEO 友好。`,
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com',
  },
  {
    title: '开源项目集合',
    description: `这里展示我的开源项目和作品。包括 Web 应用、工具库和技术实验项目。
    欢迎访问我的 GitHub 了解更多详情，也欢迎提交 Issue 和 Pull Request！`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com',
  },
]

export default projectsData
