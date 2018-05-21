require('dotenv').config()                                                        
const path = require('path')                                                      
const Dotenv = require('dotenv-webpack')  

const withSass = require('@zeit/next-sass')

module.exports = withSass({
	poweredByHeader: false,
	exportPathMap: function () {
	    return {
	      '/': { page: '/' },
	      '/about': { page: '/about' },
	      '/news': { page: '/news' },
	      '/newsdetail': { page: '/news' },
	      '/promotion': { page: '/promotion' },
	      '/promotiondetail': { page: '/promotion' },
	      '/brands/tummour': { page: '/brands/tummour' },
	      '/brands/laoyuan': { page: '/brands/laoyuan' },
	      '/brands/jaewhon': { page: '/brands/jaewhon' },
	      '/brands/pho': { page: '/brands/pho' },
	      '/brands/granny': { page: '/brands/granny' },
	      '/brands/kruathai': { page: '/brands/kruathai' },
	      '/brands/detummour': { page: '/brands/detummour' },
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
	      '/admin/promotion/add': { page: '/admin/promotion_add' },
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
