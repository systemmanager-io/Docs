module.exports = {
    title: 'SystemManager',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    plugins: [
        ['@vuepress/nprogress'], ['@vuepress/back-to-top'], ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        [
            'vuepress-plugin-git-log',
            {
                additionalArgs: '',
                onlyFirstAndLastCommit: false,
            },
        ],
    ],
    themeConfig: {
        lastUpdated: 'Last updated on',
        description: 'Let long downtimes be a thing of the past',
        editLinkText: 'Help us improve this page',
        editLinks: true,
        docsRepo: 'systemmanager-io/docs',
        docsDir: 'docs',
        sidebar: {
            '/': [
                {
                    title: 'Installation Guide',
                    collapsable: false,
                    children: [
                        {
                            title: "Core",
                            collapsable: false,
                            children: [
                                '/core/getting_started',
                                '/core/updating',
                            ]
                        },
                        {
                            title: "Daemon",
                            collapsable: false,
                            children: [
                                '/daemon/getting_started',
                                '/daemon/updating'
                            ]
                        }

                    ]
                },
                // {
                //     title: 'API Documentation',
                //     collapsable: false,
                //     children: [
                //         '/api/core/',
                //     ]
                // }
            ]
        }
    }
};
