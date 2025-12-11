import {DefaultTheme, defineAdditionalConfig} from 'vitepress'
import {GuideSidebar} from "./guide/sidebar";
import {PluginSidebar} from "./plugin/sidebar";
import {InfoSidebar} from "./info/sidebar";
import {RewardSidebar} from "./reward/sidebar";

const zhConfig = defineAdditionalConfig({
    lang: 'zh-CN',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭'
                        }
                    }
                }
            }
        },
        outline: {
            label: '页面导航'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2025${new Date().getFullYear() != 2025 ? ('-' + new Date().getFullYear()) : ''} <a href="https://github.com/yyznm">YYZ</a>` //
        },
        editLink: {
            pattern: 'https://github.com/bull-m/bullm-remote-docs/edit/main/basics/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
            text: '最后更新于'
        },
        notFound: {
            title: '没有找到那个她',
            quote: '也不知道是走了还是本来就没有',
            linkLabel: '前往首页',
            linkText: '带我回去'
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',

        nav: nav(),

        sidebar: {
            ...InfoSidebar,
            ...PluginSidebar,
            ...GuideSidebar,
            ...RewardSidebar
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/bull-m/bullm-remote'}
        ],
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {text: '🤔这是什么 ?', link: '/info/tis', activeMatch: '/info/'},
        {text: '🧭指南', link: '/guide/start/start', activeMatch: '/guide/'},
        {text: '🔌插件', link: '/plugin/start', activeMatch: '/plugin/'},
        {text: '🍨一杯冰淇淋', link: '/reward/make', activeMatch: '/reward/'},
    ]
}


export default zhConfig
