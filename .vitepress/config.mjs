import { defineConfig } from 'vitepress'
import nav from "./nav.mjs";

export default defineConfig({
  title: "VM docs",
  description: "虚拟机文档",
  head: [
    //添加图标
    ['link', { rel: 'icon', href: '/VM docs.png' }]
  ],
  themeConfig: {
    logo: "/VM docs.png",
    nav,
    sidebar: [
      {
        text: '加入我们',
        items: [
          { text: 'QQ群', link: '/加入我们/QQ群' },
          { text: 'QQ群规', link: '/加入我们/QQ群规' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cybaka520/VM-docs' }
    ]
  }
})
