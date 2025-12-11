import type {DefaultTheme} from "vitepress";

export const GuideSidebar = {
    "/guide/": {
        base: "/guide/",
        items: sidebar()
    },
} as DefaultTheme.Sidebar

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'GoGoGo!!!', items: [
                {text: '开始', link: 'start/start'},
                {text: '系统架构', link: 'start/process'},
                {text: '连接', link: 'start/link'},
                {text: '互联网控制', link: 'start/internet'},
            ]

        },
        {
            text: '输入输出', items: [
                {text: '基础架构', link: 'io/framework'},
                {text: 'I2C扩展板', link: 'io/extend'},
                {text: 'PWM', link: 'io/pwm'},
                {text: '电平', link: 'io/digital'},
                {text: '舵机', link: 'io/servo'},
                {text: '组合', link: 'io/group'},
                {text: '步进电机', link: 'io/stepper'},
            ]
        },
        {
            text: '模块', items: [
                {text: '底盘', link: 'module/chassis'},
                // {text: '屏幕', link: 'module/screen'},
                {text: '云台', link: 'module/pzt'},
                {text: '相机', link: 'module/camera'},
            ]
        },
        // {
        //     text: '示例',
        //     items: [
        //         {text: 'Runtime API Examples', link: '/examples/api-examples'},
        //         {text: 'Markdown Examples', link: '/examples/markdown-examples'}
        //     ]
        // }
    ]
}
