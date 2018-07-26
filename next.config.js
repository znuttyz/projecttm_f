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
	      '/brands/tummour': { page: '/brands', query: { brand: "tummour" } },
	      '/brands/laoyuan': { page: '/brands', query: { brand: "laoyuan" } },
	      '/brands/jaewhon': { page: '/brands', query: { brand: "jaewhon" } },
	      '/brands/pho': { page: '/brands', query: { brand: "pho" } },
	      '/brands/granny': { page: '/brands', query: { brand: "granny" } },
	      '/brands/kruathai': { page: '/brands', query: { brand: "kruathai" } },
	      '/brands/detummour': { page: '/brands', query: { brand: "detummour" } },
	      '/contact': { page: '/contact' },
	      '/admin': { page: '/admin' },
	      '/admin/banner': { page: '/admin/banner' },
	      '/admin/banner/edit': { page: '/admin/banner_edit' },
	      '/admin/brand': { page: '/admin/brand/list' },
	      '/admin/brand/list': { page: '/admin/brand/list' },
	      '/admin/brand/tummour': { page: '/admin/brand', query: { brand: 'tummour' } },
	      '/admin/brand/tummour/north': { page: '/admin/brand/region', query: { brand: 'tummour', region: 'north' } },
	      '/admin/brand/tummour/south': { page: '/admin/brand/region', query: { brand: 'tummour', region: 'south' } },
	      '/admin/brand/tummour/east': { page: '/admin/brand/region', query: { brand: 'tummour', region: 'east' } },
	      '/admin/brand/tummour/west': { page: '/admin/brand/region', query: { brand: 'tummour', region: 'west' } },
	      '/admin/brand/tummour/central': { page: '/admin/brand/region', query: { brand: 'tummour', region: 'central' } },
	      '/admin/brand/tummour/northeast': { page: '/admin/brand/region', query: { brand: 'tummour', region: 'northeast' } },
	      '/admin/brand/tummour/foreign': { page: '/admin/brand/region', query: { brand: 'tummour', region: 'foreign' } },
	      '/admin/brand/laoyuan': { page: '/admin/brand', query: { brand: 'laoyuan' } },
	      '/admin/brand/laoyuan/north': { page: '/admin/brand/region', query: { brand: 'laoyuan', region: 'north' } },
	      '/admin/brand/laoyuan/south': { page: '/admin/brand/region', query: { brand: 'laoyuan', region: 'south' } },
	      '/admin/brand/laoyuan/east': { page: '/admin/brand/region', query: { brand: 'laoyuan', region: 'east' } },
	      '/admin/brand/laoyuan/west': { page: '/admin/brand/region', query: { brand: 'laoyuan', region: 'west' } },
	      '/admin/brand/laoyuan/central': { page: '/admin/brand/region', query: { brand: 'laoyuan', region: 'central' } },
	      '/admin/brand/laoyuan/northeast': { page: '/admin/brand/region', query: { brand: 'laoyuan', region: 'northeast' } },
	      '/admin/brand/laoyuan/foreign': { page: '/admin/brand/region', query: { brand: 'laoyuan', region: 'foreign' } },
	      '/admin/brand/jaewhon': { page: '/admin/brand', query: { brand: 'jaewhon' } },
	      '/admin/brand/jaewhon/north': { page: '/admin/brand/region', query: { brand: 'jaewhon', region: 'north' } },
	      '/admin/brand/jaewhon/south': { page: '/admin/brand/region', query: { brand: 'jaewhon', region: 'south' } },
	      '/admin/brand/jaewhon/east': { page: '/admin/brand/region', query: { brand: 'jaewhon', region: 'east' } },
	      '/admin/brand/jaewhon/west': { page: '/admin/brand/region', query: { brand: 'jaewhon', region: 'west' } },
	      '/admin/brand/jaewhon/central': { page: '/admin/brand/region', query: { brand: 'jaewhon', region: 'central' } },
	      '/admin/brand/jaewhon/northeast': { page: '/admin/brand/region', query: { brand: 'jaewhon', region: 'northeast' } },
	      '/admin/brand/jaewhon/foreign': { page: '/admin/brand/region', query: { brand: 'jaewhon', region: 'foreign' } },
	      '/admin/brand/pho': { page: '/admin/brand', query: { brand: 'pho' } },
	      '/admin/brand/pho/north': { page: '/admin/brand/region', query: { brand: 'pho', region: 'north' } },
	      '/admin/brand/pho/south': { page: '/admin/brand/region', query: { brand: 'pho', region: 'south' } },
	      '/admin/brand/pho/east': { page: '/admin/brand/region', query: { brand: 'pho', region: 'east' } },
	      '/admin/brand/pho/west': { page: '/admin/brand/region', query: { brand: 'pho', region: 'west' } },
	      '/admin/brand/pho/central': { page: '/admin/brand/region', query: { brand: 'pho', region: 'central' } },
	      '/admin/brand/pho/northeast': { page: '/admin/brand/region', query: { brand: 'pho', region: 'northeast' } },
	      '/admin/brand/pho/foreign': { page: '/admin/brand/region', query: { brand: 'pho', region: 'foreign' } },
	      '/admin/brand/granny': { page: '/admin/brand', query: { brand: 'granny' } },
	      '/admin/brand/granny/north': { page: '/admin/brand/region', query: { brand: 'granny', region: 'north' } },
	      '/admin/brand/granny/south': { page: '/admin/brand/region', query: { brand: 'granny', region: 'south' } },
	      '/admin/brand/granny/east': { page: '/admin/brand/region', query: { brand: 'granny', region: 'east' } },
	      '/admin/brand/granny/west': { page: '/admin/brand/region', query: { brand: 'granny', region: 'west' } },
	      '/admin/brand/granny/central': { page: '/admin/brand/region', query: { brand: 'granny', region: 'central' } },
	      '/admin/brand/granny/northeast': { page: '/admin/brand/region', query: { brand: 'granny', region: 'northeast' } },
	      '/admin/brand/granny/foreign': { page: '/admin/brand/region', query: { brand: 'granny', region: 'foreign' } },
	      '/admin/brand/kruathai': { page: '/admin/brand', query: { brand: 'kruathai' } },
	      '/admin/brand/kruathai/north': { page: '/admin/brand/region', query: { brand: 'kruathai', region: 'north' } },
	      '/admin/brand/kruathai/south': { page: '/admin/brand/region', query: { brand: 'kruathai', region: 'south' } },
	      '/admin/brand/kruathai/east': { page: '/admin/brand/region', query: { brand: 'kruathai', region: 'east' } },
	      '/admin/brand/kruathai/west': { page: '/admin/brand/region', query: { brand: 'kruathai', region: 'west' } },
	      '/admin/brand/kruathai/central': { page: '/admin/brand/region', query: { brand: 'kruathai', region: 'central' } },
	      '/admin/brand/kruathai/northeast': { page: '/admin/brand/region', query: { brand: 'kruathai', region: 'northeast' } },
	      '/admin/brand/kruathai/foreign': { page: '/admin/brand/region', query: { brand: 'kruathai', region: 'foreign' } },
	      '/admin/brand/detummour': { page: '/admin/brand', query: { brand: 'detummour' } },
	      '/admin/brand/detummour/north': { page: '/admin/brand/region', query: { brand: 'detummour', region: 'north' } },
	      '/admin/brand/detummour/south': { page: '/admin/brand/region', query: { brand: 'detummour', region: 'south' } },
	      '/admin/brand/detummour/east': { page: '/admin/brand/region', query: { brand: 'detummour', region: 'east' } },
	      '/admin/brand/detummour/west': { page: '/admin/brand/region', query: { brand: 'detummour', region: 'west' } },
	      '/admin/brand/detummour/central': { page: '/admin/brand/region', query: { brand: 'detummour', region: 'central' } },
	      '/admin/brand/detummour/northeast': { page: '/admin/brand/region', query: { brand: 'detummour', region: 'northeast' } },
	      '/admin/brand/detummour/foreign': { page: '/admin/brand/region', query: { brand: 'detummour', region: 'foreign' } },
	      '/admin/news': { page: '/admin/news' },
	      '/admin/news/add': { page: '/admin/news_add' },
	      '/admin/news/edit': { page: '/admin/banner_edit' },
	      '/admin/news/galley': { page: '/admin/news_gallery'},
	      '/admin/news/galley/add': { page: '/admin/news_gallery_add' },
	      '/admin/promotion': { page: '/admin/promotion' },
	      '/admin/promotion/add': { page: '/admin/promotion_add' },
	      '/admin/promotion/edit': { page: '/admin/promotion_edit' },
	      '/admin/message': { page: '/admin/message' }
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
