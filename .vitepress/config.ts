import { defineConfig } from 'vitepress'
import zhConfig from "../zh/config";
import enConfig from "../en/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "牛明远控",
  description: "NMCar Doc",
  // base: '/',
  outDir: 'dist',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://car.bullm.cn',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English'}
  },
  themeConfig: {
    logo: {
      dark: '/logo-dark.svg',
      light: '/logo.svg'
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nmcar' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/yyznm">yyznm</a>'
    }
  }
})
