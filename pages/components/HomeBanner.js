const HomeBanner = ({ image }) => (
	<div>
		<div className="home-banner clear">
			<img src={image.src_desktop_th} alt={image.tag} />
		</div>
		<div className="home-banner-mb clear">
			<img src={image.src_mobile_th} alt={image.tag} />
		</div>
	</div>
)

export { HomeBanner }