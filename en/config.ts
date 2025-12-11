import {DefaultTheme, defineAdditionalConfig, LocaleSpecificConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
    themeConfig: {
        socialLinks: [
            {icon: 'github', link: 'https://github.com/nmcar'}
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present <a href="https://github.com/yyznm">yyznm</a>'
        },
        notFound: {
            title: 'Sorry',
            quote: 'The English document is still being written',
            linkLabel: 'Go Chinese Doc',
            linkText: 'Go Chinese Doc',
            link: '/zh'

        },
        nav: [],
    },

})
