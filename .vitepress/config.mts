import { defineConfig } from "vitepress";


export default defineConfig({
    title: "Administer",
    titleTemplate: ":title · Documentation",
    description: "API documentation for Administer, Administer AOS, Apps. Learn how to make an app, use web APIs, or contribute to Administer.",
    lang: "en-US",

    head: [
        [
            "link", 
            { 
                rel: "icon", 
                href: "/logo.png" 
            }
        ],
        [
            "meta", 
            { 
                name: "darkreader-lock" 
            }
        ],
        [
            'script',
            {
                defer: '',
                'data-domain': 'docs.admsoftware.org',
                src: 'https://plausible.admsoftware.org/js/script.file-downloads.hash.outbound-links.js',
            },
        ],
        [
            'script',
            {},
            `window.plausible = window.plausible || function() {
        (window.plausible.q = window.plausible.q || []).push(arguments)
      }`
        ]
    ],

    ignoreDeadLinks: true,
    cleanUrls: true,
    lastUpdated: true,

    sitemap: {
        hostname: "https://docs.admsoftware.org",
    },

    themeConfig: {
        logo: "https://github.com/administer-org/.github/blob/main/profile/CnP_02042025_235822.png?raw=true",

        search: {
            provider: "local"
        },

        editLink: {
            pattern: "https://github.com/administer-org/documentation/edit/gh-pages/:path"
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/administer-org" },
            { icon: "discord", link: "https://to.admsoftware.org/discord" },
            { icon: "bluesky", link: "https://to.admsoftware.org/bluesky" },
            {
                icon: {
                    svg: `<?xml version="1.0"?>
                        <svg xmlns="http://www.w3.org/2000/svg" width="477" height="477" viewBox="0 0 134.86717 134.86723">
                            <g transform="translate(-0.31047259,-0.31047345)">
                            <path transform="matrix(4.2145936,0,0,4.2145936,0.2065483,-3.8001967)"
                            d="M 6.78817,0.975342 3.21606,14.3004 l 9.09084,2.4333 1.1355,-4.2343 16.1457,4.327 2.4366,-9.08756 z M 18.6069,21.448 2.46124,17.1211 0.0246582,26.2119 25.2611,32.9754 28.8332,19.6504 19.7424,17.2138 Z"/>
                            </g>
                        </svg>
                    `
                },
                link: "https://devforum.roblox.com/t/3179989/"
            }
        ],

        sidebar: [
            {
                text: 'Information',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'About Administer', link: '/meta/about-administer' },
                    { text: 'Donations and Contributions', link: '/meta/donation-contribution' },
                    { text: 'Docs issues & Contributions', link: '/meta/issues' },
                    { text: 'Contact Us', link: '/meta/contact' },
                    {
                        text: 'Getting Started',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'Installation', link: '/quickstart/installation' },
                            { text: 'Initial Configuration', link: '/quickstart/initialConfig' }
                        ]
                    }
                ]
            },
            {
                text: 'Legacy API (AppPlatform 1)',
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
                            { text: 'widgetconfig', link: '/v1/apps/namespace/widgetconfig' }
                        ]
                    }
                ]
            },
            {
                text: 'Administer API',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Quickstart Guide', link: '/v2/tutorials/app-quickstart' },
                    {
                        text: 'Help',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'extra-data', link: '/v2/help/extra-data' },
                            { text: 'Translation Keys', link: '/v2/help/translation-keys' },
                            { text: 'Icon Packs', link: '/v2/help/icon-packs' }
                        ]
                    },
                    {
                        text: 'Types',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            { text: 'builtapi', link: '/v2/apps/types/builtapi' },
                            { text: 'invocation-api', link: '/v2/apps/types/invocation-api' },
                            { text: 'richconfig', link: '/v2/apps/types/richconfig' },
                            { text: 'widgetconfig', link: '/v2/apps/types/widgetconfig' }
                        ]
                    },
                    {
                        text: 'Server Modules',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Helpers',
                                collapsible: true,
                                collapsed: true,
                                items: [
                                    { text: 'V1 Migrator', link: '/v2/server/helpers/v1migrator' },
                                    { text: 'Bootstrapper', link: '/v2/server/helpers/bootstrap' },
                                    { text: 'ParseCommand', link: '/v2/server/helpers/ParseCommand' },
                                ]
                            },
                            { text: 'Apps', link: '/v2/server/apps' },
                            { text: 'AdminRunner', link: '/v2/server/adminrunner' },
                            { text: 'Debugging', link: '/v2/server/debugging' },
                            { text: 'FrontendAPI', link: '/v2/server/frontend' },
                            { text: 'HttpRunner', link: '/v2/server/httprunner' },
                            { text: 'External Importer', link: '/v2/server/importer' },
                            { text: 'Settings', link: '/v2/server/settings' },
                            { text: 'Utilities', link: '/v2/server/utilities' }
                        ]
                    }
                ]
            },
            {
                text: 'AOS',
                collapsible: true,
                collapsed: false,
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
                            { text: 'Privacy Policy', link: '/AOS/legal/privacy' }
                        ]
                    },

                    { text: 'What is AOS?', link: '/AOS/information/about' },
                    { text: 'Public AOS Nodes', link: '/AOS/information/nodes' },
                    { text: 'Quickstart', link: '/AOS/maintaining/setup' },
                    { text: 'Recommended Specs', link: '/AOS/maintaining/recommended-specs' }
                ]
            }
        ]
    }
});
