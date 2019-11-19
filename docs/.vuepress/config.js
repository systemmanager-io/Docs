module.exports = {
    title: 'SystemManager',
    plugins: [
        ['@vuepress/nprogress'], ['@vuepress/back-to-top'], ['@vuepress/pwa']
    ],
    themeConfig: {
        lastUpdated: 'This page was last updated on',
        description: 'Let long downtimes be a thing of the past',
        editLinkText: 'Help us improve this page in the documentation.',
        editLinks: true,
        docsRepo: 'systemmanager-io/docs',
        docsDir: 'docs',
        sidebar: {
            '/': [
                {
                    title: 'Core',
                    collapsable: false,
                    children: [
                        '/core/',
                    ]
                },
                {
                    title: 'Daemon',
                    collapsable: false,
                    children: [
                        '/daemon/',
                    ]
                }
            ]
        }
    }
};
