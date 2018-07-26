import Link from 'next/link'

const AboutInfo = ({ content }) => (
	<div className="aboutinfo clear">
		<div className="aboutbanner">
			<img src={content.banner} />
		</div>
		<div className="aboutbanner-mb">
			<img src={content.bannermb} />
		</div>
		<div className="container">
			<div className="aboutlogo">
				<img src={content.logo}/>
			</div>
			<div className="aboutcontent">
				<p dangerouslySetInnerHTML={{__html: content.text1}} />
				<img src={content.image} />
				<div className="lastbox">
					<p dangerouslySetInnerHTML={{__html: content.text2}} />
				</div>
			</div>
		</div>
	</div>
)

export { AboutInfo }