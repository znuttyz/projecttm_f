const HomeBanner = ({ image, content }) => {
	let desktop, mobile
	switch(content) {
		case "th":
			desktop = image.src_desktop_th
			mobile = image.src_mobile_th
			break;
		case "en":
			desktop = image.src_desktop_en
			mobile = image.src_mobile_en
			break;
		case "cn":
			desktop = image.src_desktop_cn
			mobile = image.src_mobile_cn
			break;
		default:
			break;
	}
	return (
		<div>
			<div className="home-banner clear">
				<img src={desktop} alt={image.tag} />
			</div>
			<div className="home-banner-mb clear">
				<img src={mobile} alt={image.tag} />
			</div>
		</div>
	)
}

export { HomeBanner }