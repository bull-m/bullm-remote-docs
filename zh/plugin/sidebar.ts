import type {DefaultTheme} from "vitepress";

export const PluginSidebar = {
    "/plugin/": {
        base: "/plugin/",
        items: sidebar()
    },
} as DefaultTheme.Sidebar

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '插件', items: [
                {text: '什么是插件？', link: 'start'},
                {text: '插件开发', link: 'develop'},
                {text: '插件安装', link: 'install'},
            ]
        },
        {
            text: "内置插件",
            items: [
                {text: '实时视频', link: ''},
                {text: '摇杆控制', link: ''},
                {text: '手柄控制', link: ''},
                {text: '键盘控制', link: ''},
                {text: '连接状态', link: ''},
                {text: '大灯', link: ''},
                {text: '滑块', link: ''},
            ]
        },
        {
            text: '插件开发', items: [
                {text: '项目初始化', link: 'develop'},
            ]
        },
    ]
}
