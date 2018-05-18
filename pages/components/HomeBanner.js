const HomeBanner = ({ image }) => (
	<div className="home-banner clear">
		<img src={image.src_desktop_th} alt={image.tag} />
	</div>
)

export { HomeBanner }