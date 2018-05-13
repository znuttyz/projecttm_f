import Link from 'next/link'

const showImages = (images) => {
	return images.map(src => {
		return (
			<li className="each-promotion">
				<img src={src} />
			</li>
		)
	})
}

const Gallery = ({ id, images = [] }) => {
	return (
		<div className="promotioninfo">
			<div className="tab">
				<div className="tabcontent" style={{backgroundColor: 'transparent', width: '100%', padding: '0'}}>
					<ul className="all-promotions">
						<li className="each-promotion">
							<Link href={{ pathname: '/admin/news_gallery_add', query: { id: id } }}>
								<a style={styles.addImgStyle}><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fadd-img-btn.png?alt=media&token=f7570751-7df9-4d99-a111-ff707e49f3b0" /></a>
							</Link>
						</li>
						{showImages(images)}
					</ul>
				</div>
			</div>
		</div>
	)
}

const styles = {
	addImgStyle: {
		cursor: 'pointer'
	}
}

export { Gallery }

// <li className="each-promotion">
// 							<img src="http://placehold.it/280X280" />
// 						</li>
// 						<li className="each-promotion">
// 							<img src="http://placehold.it/280X280" />
// 						</li>
// 						<li className="each-promotion">
// 							<img src="http://placehold.it/280X280" />
// 						</li>