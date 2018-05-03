const withSass = require('@zeit/next-sass')
module.exports = withSass({
	poweredByHeader: false,
	// exportPathMap: function () {
	//     return {
	//       '/': { page: '/soon' },
	//       '/t/home': { page: '/' },
	//       '/t/promotion': { page: '/promotion' }
	//     }
	// }
})