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

	poweredByHeader: false,
	// exportPathMap: function () {
	//     return {
	//       '/': { page: '/soon' },
	//       '/t/home': { page: '/' },
	//       '/t/news': { page: '/news' },
	//       // '/t/promotion': { page: '/promotion' },
	//       '/a': { page: '/admin' },
	//       '/a/banner': { page: '/admin/banner' },
	//       '/a/banner/edit': { page: '/admin/banner_edit' },
	//       '/a/news': { page: '/admin/news' },
	//       '/a/news/edit': { page: '/admin/banner_edit' },
	//       '/a/promotion': { page: '/admin/promotion' },
	//       '/a/promotion/edit': { page: '/admin/banner_edit' }
	//     }
	// }

})