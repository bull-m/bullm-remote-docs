import type {DefaultTheme} from "vitepress";

export const InfoSidebar = {
    "/info/": {
        base: "/info/",
        items: sidebar()
    },
} as DefaultTheme.Sidebar

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '介绍', items: [
                {text: '梦开始的地方', link: 'start'},
                {text: '这是什么 ?', link: 'tis'},
            ]
        },
    ]
}
