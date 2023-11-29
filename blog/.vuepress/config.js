const path = require("path");
module.exports = (options, context, api) => {
    return {
        title: "旧梦",
        description: "Web development, Frontend, JavaScript",
        theme: "@vuepress/blog",
        plugins: [
            [
                "@vuepress/google-analytics",
                {
                    ga: process.env.GA
                }
            ]
        ],
        themeConfig: {
            directories: [
                {
                    id: "article",
                    dirname: "article",
                    title: "首页",
                    path: "/",
                    itemPermalink: "/article/:slug"
                },
            ],
            nav: [
                {
                    text: "随笔",
                    link: "/essay/"
                },
                {
                    text: "友链",
                    link: "/friends/"
                },
                {
                    text: "留言",
                    link: "/messages/"
                },
                {
                    text: "关于",
                    link: "/about/"
                },
            ],
            sitemap: {
                hostname: "https://billyyyyy3320.com/"
            },
            comment: {
                service: "vssue",
                autoCreateIssue: true,
                prefix: "[Post]",
                owner: "newsbielt703",
                repo: "billy",
                clientId: "4119e8c1b0093fc5d034",
                clientSecret: "1ac1176791689b1ca31037c39489fc7b0667015d"
            },
            newsletter: {
                endpoint:
                    "https://gmail.us5.list-manage.com/subscribe/post?u=942c0d587f8ea28269e80d6cd&amp;id=d77d789d53"
            },
            feed: {
                canonical_base: "https://billyyyyy3320.com/",
                posts_directories: ["/article/"]
            },
            footer: {
                contact: [
                    {
                        type: "github",
                        link: "https://github.com/billyyyyy3320"
                    },
                    {
                        type: "mail",
                        link: "mailto:newsbielt703@gmail.com"
                    }
                ],
                copyright: [
                    {
                        text: "Billy Chin © 2019",
                        link: ""
                    }
                ]
            },
            smoothScroll: true
        },
        alias: {
            "@assets": path.resolve(__dirname, "../assets")
        }
    };
};
