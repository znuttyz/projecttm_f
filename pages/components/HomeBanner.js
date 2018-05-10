const HomeBanner = ({ image }) => (
	<div className="home-banner clear">
		<img src={image.src} alt={image.tag} />
	</div>
)

export { HomeBanner }