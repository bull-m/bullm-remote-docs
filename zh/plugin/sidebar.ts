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
                // {text: '插件安装', link: 'install'},
            ]
        },
        {
            text: "内置插件",
            items: [
                {text: '实时视频 (Live)', link: 'built-in/live'},
                {text: '摇杆控制 (Nipple)', link: 'built-in/nipple'},
                {text: '手柄控制 (Gamepad)', link: 'built-in/gamepad'},
                {text: '键盘控制 (Keyboard)', link: 'built-in/keyboard'},
                {text: '连接状态 (Signal)', link: 'built-in/signal'},
                {text: '滑块 (Slider)', link: 'built-in/slider'},
                {text: '开关按钮 (SwitchButton)', link: 'built-in/switch-button'},
                {text: '按钮 (Button)', link: 'built-in/button'},
            ]
        },
        {
            text: '插件开发', items: [
                {text: '项目初始化', link: 'develop'},
            ]
        },
    ]
}
