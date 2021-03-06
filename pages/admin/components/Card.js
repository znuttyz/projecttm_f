import { Header } from './'
import Link from 'next/link'

const menu = (title, isEdit) => {
	if(!isEdit) {
		if (title === "Banners") {
			return <Link href="/admin/banner_edit"><a>EDIT</a></Link>
		} else if (title === "News") {
			return <Link href="/admin/news_add"><a>ADD</a></Link>
		} else if (title === "Promotions") {
			return <Link href="/admin/promotion_add"><a>ADD</a></Link>
		} else {
			return;
		}
	}
}

const Card = ({ children, title, subTitle, isEdit }) => (
	

		<div className="subContentAdmin">
			<div className="row">
				<div className="cardAdmin">
					<div className="cardHeader">
						<div>
							<h4 className="title">{title}</h4>
							<p className="sub-title">{subTitle}</p>
						</div>
						<div className="cardMenu">
							{menu(title, isEdit)}
						</div>
					</div>
					<div className="content">
						{children}
					</div>
				</div>
			</div>
		</div>
)

export { Card }