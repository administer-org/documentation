import { defineConfig } from "vitepress";
import { withSidebar } from 'vitepress-sidebar';


export default defineConfig({
    title: "Administer",
    titleTemplate: ":title · Documentation",
    description: "Administer's documentation. Learn how to make your own app and more.",
    lang: "en-US",
    head: [
        ["link", { rel: "icon", href: "/logo.png" }],
        ["meta", { name: "darkreader-lock" }],
    ],
    ignoreDeadLinks: true,
    cleanUrls: true,
    themeConfig: {
        logo: "https://github.com/administer-org/.github/blob/main/profile/CnP_02042025_235822.png?raw=true",

        socialLinks: [
            { icon: "github", link: "https://github.com/administer-org" },
            { icon: "discord", link: "https://discord.gg/c8dC4k3J5Y" },
            { icon: "bluesky", link: "https://bsky.app/profile/notpyx.me" },
            {
                icon: {
                    svg: `<?xml version="1.0"?>
          <svg xmlns="http://www.w3.org/2000/svg" width="477" height="477" viewBox="0 0 134.86717 134.86723">
            <g transform="translate(-0.31047259,-0.31047345)">
              <path transform="matrix(4.2145936,0,0,4.2145936,0.2065483,-3.8001967)"
              d="M 6.78817,0.975342 3.21606,14.3004 l 9.09084,2.4333 1.1355,-4.2343 16.1457,4.327 2.4366,-9.08756 z M 18.6069,21.448 2.46124,17.1211 0.0246582,26.2119 25.2611,32.9754 28.8332,19.6504 19.7424,17.2138 Z"/>
            </g>
          </svg>`,
                },
                link: "https://devforum.roblox.com/t/3179989/",
            },
        ],

        sidebar: [
            {
                text: 'Information',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'About Administer', link: '/meta/about-administer' },
                    { text: 'Donations and Contributions', link: '/meta/donation-contribution' },
                    {
                        text: 'Getting Started:',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'Installation', link: '/quickstart/installation' },
                            { text: 'Initial Configuration', link: '/quickstart/initialConfig' },
                        ]
                    },

                ]
            },
            {
                text: 'V1 API',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Quickstart Guide', link: '/v1/apps/quickstart' },
                    {
                        text: 'namespace',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'app', link: '/v1/apps/namespace/app' },
                            { text: 'builtapi', link: '/v1/apps/namespace/builtapi' },
                            { text: 'settings', link: '/v1/apps/namespace/settings' },
                            { text: 'widgetconfig', link: '/v1/apps/namespace/widgetconfig' },
                        ]
                    },
                ]
            },
            {
                text: 'V2 API',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Quickstart Guide', link: '/v2/tutorials/app-quickstart' },
                    {
                        text: 'help',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'extra-data', link: '/v2/apps/help/extra-data' },
                        ]
                    },
                    {
                        text: 'types',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'app', link: '/v2/apps/types/app' },
                            { text: 'builtapi', link: '/v2/apps/types/builtapi' },
                            { text: 'invocation-api', link: '/v2/apps/types/invocation-api' },
                            { text: 'module', link: '/v2/apps/types/module' },
                            { text: 'richconfig', link: '/v2/apps/types/richconfig' },
                            { text: 'settings', link: '/v2/apps/types/settings' },
                            { text: 'typesapi', link: '/v2/apps/types/typesapi' },
                            { text: 'widgetconfig', link: '/v2/apps/types/widgetconfig' },
                        ]
                    },
                ]
            },
            {
                text: 'AOS',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'API Reference',
                        collapsible: true,
                        collapsed: true,
                        items: [
                           
                        ]
                    },

                    {
                        text: 'Legal',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'Privacy Policy', link: '/AOS/legal/privacy' },
                        ]
                    },

                    { text: 'What is AOS?', link: '/AOS/information/about' },
                    { text: 'Public AOS Nodes', link: '/AOS/information/nodes' },
                ]
            },
        ]

    }
});
