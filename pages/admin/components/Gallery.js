import Link from 'next/link'

const showImages = (images, deleteImage, id) => {
	return images.map((src, index) => {
		return (
			<li className="each-promotion" key={"news_gallery_"+index}>
				<img src={src} style={{maxWidth: '90%'}}/>
				<a href="#" style={{height: 'auto', width: 'intrinsic' }} onClick={() => deleteImage(id, src)}>X Delete</a>
			</li>
		)
	})
}

const Gallery = ({ id, images = [], deleteImage }) => {
	return (
		<div className="promotioninfo">
			<div className="tab">
				<div className="tabcontent" style={{backgroundColor: 'transparent', width: '100%', padding: '0'}}>
					<ul className="all-promotions">
						<li className="each-promotion">
							<Link href={{ pathname: '/admin/news_gallery_add', query: { id: id } }}>
								<a style={styles.addImgStyle}><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fadd-img-btn.png?alt=media" /></a>
							</Link>
						</li>
						{showImages(images, deleteImage, id)}
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