const withSass = require('@zeit/next-sass')
module.exports = withSass({
		poweredByHeader: false,
		// exportPathMap: function () {
		//     return {
		//       '/': { page: '/soon' },
		//       // '/t/home': { page: '/' },
		//       // '/t/promotion': { page: '/promotion' },
		//       // '/a/banner': { page: '/admin/banner' },
		//       // '/a/banner/edit': { page: '/admin/banner_edit' },
		//       // '/a/news': { page: '/admin/news' },
		//       // '/a/promotion': { page: '/admin/promotion' }
		//     }
		// }
})