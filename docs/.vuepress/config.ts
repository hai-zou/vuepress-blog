import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types';
import dayjs from 'dayjs';

export default defineConfig4CustomTheme<VdoingThemeConfig>({
	theme: "vdoing",
	title: "旧梦",
	description: "生活不止眼前的苟且！",
	themeConfig: {
		nav: [
			{ text: '随笔', link: '/pages/00f539/' },
			{ text: '归档', link: '/archives/' },
			{ text: '留言', link: '/pages/d3d97d/' },
			{ text: '关于', link: '/pages/e60ff2/' },
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
			avatar: 'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200103123203.jpg',
			name: 'Hai',
			slogan: '学无止境！',
		},
		social: {
			icons: [
			{
				iconClass: 'icon-youjian',
				title: '发邮件',
				link: 'mailto:894072666@qq.com',
			},
			{
				iconClass: 'icon-github',
				title: 'GitHub',
				link: 'https://github.com/xugaoyi',
			},
			{
				iconClass: 'icon-erji',
				title: '听音乐',
				link: 'https://music.163.com/#/playlist?id=755597173',
			},
			],
		},
		footer: {
			createYear: 2023,
			copyrightInfo:
			'Evan Xu | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>',
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
					return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
				},
			},
		],
	],
});
