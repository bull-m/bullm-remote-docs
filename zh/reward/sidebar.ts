import type {DefaultTheme} from "vitepress";

export const RewardSidebar = {
    "/reward/": {
        base: "/reward/",
        items: sidebar()
    },
} as DefaultTheme.Sidebar

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {text: '赚钱钱 🔬', link: 'make'},
        // {text: '要钱钱 🧧', link: 'reward'},
        // {text: '成为赞助者', link: 'ad'},
        // {text: '谢谢 💰', link: 'thank'},
        {text: '一起玩 💬', link: 'me'},
    ]
}
