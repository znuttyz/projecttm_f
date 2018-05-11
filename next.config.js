require('dotenv').config()                                                        
const path = require('path')                                                      
const Dotenv = require('dotenv-webpack')  

const withSass = require('@zeit/next-sass')

module.exports = withSass({
	poweredByHeader: false,
	// exportPathMap: function () {
	//     return {
	//       '/': { page: '/soon' },
	//       '/t/home': { page: '/' },
	//       '/t/about': { page: '/about' },
	//       '/t/news': { page: '/news' },
	//       // '/t/promotion': { page: '/promotion' },
	//       '/t/contact': { page: '/contact' },
	//       '/a': { page: '/admin' },
	//       '/a/banner': { page: '/admin/banner' },
	//       '/a/banner/edit': { page: '/admin/banner_edit' },
	//       '/a/news': { page: '/admin/news' },
	//       '/a/news/edit': { page: '/admin/banner_edit' },
	//       '/a/promotion': { page: '/admin/promotion' },
	//       '/a/promotion/edit': { page: '/admin/banner_edit' }
	//     }
	// },
	exportPathMap: function () {
	    return {
	      '/': { page: '/' },
	      '/about': { page: '/about' },
	      '/news': { page: '/news' },
	      // '/t/promotion': { page: '/promotion' },
	      '/contact': { page: '/contact' },
	      '/admin': { page: '/admin' },
	      '/admin/banner': { page: '/admin/banner' },
	      '/admin/banner/edit': { page: '/admin/banner_edit' },
	      '/admin/news': { page: '/admin/news' },
	      '/admin/news/edit': { page: '/admin/banner_edit' },
	      '/admin/promotion': { page: '/admin/promotion' },
	      '/admin/promotion/edit': { page: '/admin/banner_edit' }
	    }
	},
	webpack(config, options) {
		config.plugins = config.plugins || []                                         
	    config.plugins = [                                                            
	    	...config.plugins,                                                          

			// Read the .env file                                                       
			new Dotenv({                                                                
				path: path.join(__dirname, '.env'),                                       
				systemvars: true                                                          
			})                                                               
	    ]                                                                             
	    return config
	}
})