import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types';
import dayjs from 'dayjs';

export default defineConfig4CustomTheme<VdoingThemeConfig>({
	theme: "vdoing",
	title: "旧梦",
	description: "生活不止眼前的苟且！",
	themeConfig: {
		nav: [
			{ text: '随笔', link: '/pages/f863d0/' },
			{ text: '归档', link: '/archives/' },
			{ text: '友链', link: '/friends/' },
			{ text: '留言', link: '/messages/' },
			{ text: '关于', link: '/about/' },
		],
		sidebarDepth: 2,
		repo: 'hai-zou/vuepress-blog',
		lastUpdated: '上次更新',
		docsDir: 'docs',
		docsBranch: 'main',
		editLinks: true,
		editLinkText: '编辑',
		author: {
			name: 'hai-zou',
			link: 'https://github.com/hai-zou',
		},
		blogger: {
			avatar: 'https://luckyzh.cn/avatar.jpg',
			name: 'haizou',
			slogan: '学无止境！',
		},
		social: {
			icons: [
				{
					iconClass: 'icon-youjian',
					title: '发邮件',
					link: 'mailto:zou.hai@outlook.com',
				},
				{
					iconClass: 'icon-github',
					title: 'GitHub',
					link: 'https://github.com/hai-zou',
				},
				{
					iconClass: 'icon-rss',
					title: 'RSS',
					link: 'https://luckyzh.cn/rss.xml',
				},
			],
		},
		footer: {
			createYear: 2021,
			copyrightInfo:
			'Haizou | <a href="https://github.com/hai-zou/vuepress-blog/blob/main/LICENSE" target="_blank">MIT License</a>',
		},
	},
	plugins: <UserPlugins>[
		// 站点地图
		[
			"sitemap",
			{
				hostname: "https://www.luckyzh.cn",
			},
		],
		// 代码块复制按钮
		[
			'one-click-copy',
			{
				copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
				copyMessage: '复制成功',
				duration: 1000,
				showInMobile: false,
			},
		],
		// 放大图片
		[
			'vuepress-plugin-zooming',
			{
				selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
				options: {
					bgColor: 'rgba(0,0,0,0.6)',
				},
			},
		],
		// 评论
		[
			'vuepress-plugin-comment',
			{
				choosen: 'valine',
				options: {
					el: '#valine-vuepress-comment',
					appId: 'XXZEyuLDolX9MAHmxNSYLAzy-gzGzoHsz',
					appKey: 'qzv88EGymhIWw3vRh1RO4M3J',
					path: '<%- frontmatter.commentid || frontmatter.permalink %>'
				},
			},
		],
		// "上次更新"时间格式
		[
			'@vuepress/last-updated',
			{
				transformer: (timestamp, lang) => {
					return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
				},
			},
		],
	],
});
