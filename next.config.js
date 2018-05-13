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
	      '/brands/tummour': { page: '/brands/tummour' },
	      // '/brands/laoyuan': { page: '/brands/laoyuan' },
	      // '/brands/jaewhon': { page: '/brands/jaewhon' },
	      // '/brands/pho': { page: '/brands/pho' },
	      // '/brands/granny': { page: '/brands/granny' },
	      // '/brands/kruathai': { page: '/brands/kruathai' },
	      // '/brands/detummour': { page: '/brands/detummour' },
	      '/promotion': { page: '/promotion' },
	      '/contact': { page: '/contact' },
	      '/admin': { page: '/admin' },
	      '/admin/banner': { page: '/admin/banner' },
	      '/admin/banner/edit': { page: '/admin/banner_edit' },
	      '/admin/news': { page: '/admin/news' },
	      '/admin/news/add': { page: '/admin/news_add' },
	      '/admin/news/edit': { page: '/admin/banner_edit' },
	      '/admin/news/galley': { page: '/admin/news_gallery'},
	      '/admin/news/galley/add': { page: '/admin/news_gallery_add' },
	      '/admin/promotion': { page: '/admin/promotion' },
	      '/admin/promotion/add': { page: 'admin/promotion_add' },
	      '/admin/promotion/edit': { page: '/admin/promotion_edit' }
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
