const HomeBanner = ({ image }) => (
	<div className="home-banner clear">
		<img src={image.src_th} alt={image.tag} />
	</div>
)

export { HomeBanner }