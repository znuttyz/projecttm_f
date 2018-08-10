import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const BrandElement = ({ sidebar, tab, content, brand, regions, lang, menulist }) => (
	<div className={content.classname}>
		<div className="b-banner">
			<img src={content.banner} />
		</div>
		<div className="b-banner-mb">
			<img src={content.bannermb} />
		</div>
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/brands/tummour" ><a><img src={sidebar.tummour}/></a></Link></li>
					<li><Link href="/brands/laoyuan" ><a><img src={sidebar.laoyuan}/></a></Link></li>
					<li><Link href="/brands/jaewhon" ><a><img src={sidebar.jaewhon}/></a></Link></li>
					<li><Link href="/brands/pho" ><a><img src={sidebar.pho}/></a></Link></li>
					<li><Link href="/brands/granny" ><a><img src={sidebar.granny}/></a></Link></li>
					<li><Link href="/brands/kruathai" ><a><img src={sidebar.kruathai}/></a></Link></li>
					<li><Link href="/brands/detummour" ><a><img src={sidebar.detummour}/></a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
				<div className="detail-info">
					<div className="description">
		 				<p>{(brand && brand.desc)}</p>
		 			</div>

		 			{
		 				(brand && ( brand.menu && <div className="btn-menu"><a href={brand.menu} target="_blank">{menulist}</a></div>) )
		 			}
		 			
		 			<div className="branches">
		 				<Tabs>
						    <TabList>
						      	<Tab>{tab.central}</Tab>
						      	<Tab>{tab.northeast}</Tab>
						      	<Tab>{tab.east}</Tab>
						      	<Tab>{tab.west}</Tab>
						      	<Tab>{tab.north}</Tab>
						      	<Tab>{tab.south}</Tab>
						      	<Tab>{tab.foreign}</Tab>
						    </TabList>

						    <TabPanel>
						    	<ul>
						      	{
						      		(regions && (regions.central)?
						      		regions.central.map((item, index)=>{
						      			let name, phone
						      			if(lang === "th") {
						      				name = item.name_th
						      				phone = "โทร. "+item.phone_th
						      			} else if(lang === "en") {
						      				name = item.name_en
						      				phone = "Call "+item.phone_en
						      			} else if(lang === "cn") {
						      				name = item.name_cn
						      				phone = "Call "+item.phone_cn
						      			}
						      			return (
						      				<li key={item+index}>
								      			<h4>{name}</h4>
								      			<p>{phone}</p>
								      		</li>
						      			)
						      		}) : (lang === "th")? <p>เร็วๆ นี้ ...</p> : <p>Coming soon...</p> )	
						      		
						      	}
						      	</ul>
						    </TabPanel>
						    <TabPanel>
						      	<ul>
						      	{
						      		(regions && (regions.northeast)?
						      		regions.northeast.map((item, index)=>{
						      			let name, phone
						      			if(lang === "th") {
						      				name = item.name_th
						      				phone = "โทร. "+item.phone_th
						      			} else if(lang === "en") {
						      				name = item.name_en
						      				phone = "Call "+item.phone_en
						      			} else if(lang === "cn") {
						      				name = item.name_cn
						      				phone = "Call "+item.phone_cn
						      			}
						      			return (
						      				<li key={item+index}>
								      			<h4>{name}</h4>
								      			<p>{phone}</p>
								      		</li>
						      			)
						      		}) : (lang === "th")? <p>เร็วๆ นี้ ...</p> : <p>Coming soon...</p> )	
						      		
						      	}
						      	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    	{
						      		(regions && (regions.east)?
						      		regions.east.map((item, index)=>{
						      			let name, phone
						      			if(lang === "th") {
						      				name = item.name_th
						      				phone = "โทร. "+item.phone_th
						      			} else if(lang === "en") {
						      				name = item.name_en
						      				phone = "Call "+item.phone_en
						      			} else if(lang === "cn") {
						      				name = item.name_cn
						      				phone = "Call "+item.phone_cn
						      			}
						      			return (
						      				<li key={item+index}>
								      			<h4>{name}</h4>
								      			<p>{phone}</p>
								      		</li>
						      			)
						      		}) : (lang === "th")? <p>เร็วๆ นี้ ...</p> : <p>Coming soon...</p> )	
						      		
						      	}
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    	{
						      		(regions && (regions.west)?
						      		regions.west.map((item, index)=>{
						      			let name, phone
						      			if(lang === "th") {
						      				name = item.name_th
						      				phone = "โทร. "+item.phone_th
						      			} else if(lang === "en") {
						      				name = item.name_en
						      				phone = "Call "+item.phone_en
						      			} else if(lang === "cn") {
						      				name = item.name_cn
						      				phone = "Call "+item.phone_cn
						      			}
						      			return (
						      				<li key={item+index}>
								      			<h4>{name}</h4>
								      			<p>{phone}</p>
								      		</li>
						      			)
						      		}) : (lang === "th")? <p>เร็วๆ นี้ ...</p> : <p>Coming soon...</p> )	
						      		
						      	}
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    	{
						      		(regions && (regions.north)?
						      		regions.north.map((item, index)=>{
						      			let name, phone
						      			if(lang === "th") {
						      				name = item.name_th
						      				phone = "โทร. "+item.phone_th
						      			} else if(lang === "en") {
						      				name = item.name_en
						      				phone = "Call "+item.phone_en
						      			} else if(lang === "cn") {
						      				name = item.name_cn
						      				phone = "Call "+item.phone_cn
						      			}
						      			return (
						      				<li key={item+index}>
								      			<h4>{name}</h4>
								      			<p>{phone}</p>
								      		</li>
						      			)
						      		}) : (lang === "th")? <p>เร็วๆ นี้ ...</p> : <p>Coming soon...</p> )	
						      		
						      	}
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    	{
						      		(regions && (regions.south)?
						      		regions.south.map((item, index)=>{
						      			let name, phone
						      			if(lang === "th") {
						      				name = item.name_th
						      				phone = "โทร. "+item.phone_th
						      			} else if(lang === "en") {
						      				name = item.name_en
						      				phone = "Call "+item.phone_en
						      			} else if(lang === "cn") {
						      				name = item.name_cn
						      				phone = "Call "+item.phone_cn
						      			}
						      			return (
						      				<li key={item+index}>
								      			<h4>{name}</h4>
								      			<p>{phone}</p>
								      		</li>
						      			)
						      		}) : (lang === "th")? <p>เร็วๆ นี้ ...</p> : <p>Coming soon...</p> )	
						      		
						      	}
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    	{
						      		(regions && (regions.foreign)?
						      		regions.foreign.map((item, index)=>{
						      			let name, phone
						      			if(lang === "th") {
						      				name = item.name_th
						      				phone = "โทร. "+item.phone_th
						      			} else if(lang === "en") {
						      				name = item.name_en
						      				phone = "Call "+item.phone_en
						      			} else if(lang === "cn") {
						      				name = item.name_cn
						      				phone = "Call "+item.phone_cn
						      			}
						      			return (
						      				<li key={item+index}>
								      			<h4>{name}</h4>
								      			<p>{phone}</p>
								      		</li>
						      			)
						      		}) : (lang === "th")? <p>เร็วๆ นี้ ...</p> : <p>Coming soon...</p> )	
						      		
						      	}
						    	</ul>
						    </TabPanel>
						</Tabs>
		 			</div>
	 			</div>
	 		</div>
	 	</div>
	</div>
)

export { BrandElement }

// <img src={content.title_img} className="b-logo" />
// <img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />


// <li><Link href={{ pathname: '/brands', query: { brand: 'tummour' } }} as="/brands/tummour"><a><img src={sidebar.tummour}/></a></Link></li>
// 					<li><Link href={{ pathname: '/brands', query: { brand: 'laoyuan' } }} as="/brands/laoyuan"><a><img src={sidebar.laoyuan}/></a></Link></li>
// 					<li><Link href={{ pathname: '/brands', query: { brand: 'jaewhon' } }} as="/brands/jaewhon"><a><img src={sidebar.jaewhon}/></a></Link></li>
// 					<li><Link href={{ pathname: '/brands', query: { brand: 'pho' } }} as="/brands/pho"><a><img src={sidebar.pho}/></a></Link></li>
// 					<li><Link href={{ pathname: '/brands', query: { brand: 'granny' } }} as="/brands/granny"><a><img src={sidebar.granny}/></a></Link></li>
// 					<li><Link href={{ pathname: '/brands', query: { brand: 'kruathai' } }} as="/brands/kruathai"><a><img src={sidebar.kruathai}/></a></Link></li>
// 					<li><Link href={{ pathname: '/brands', query: { brand: 'detummour' } }} as="/brands/detummour"><a><img src={sidebar.detummour}/></a></Link></li>
