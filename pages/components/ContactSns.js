import Link from 'next/link'
import React, { Component } from "react";

const ContactSns = () => (
	<div className="contactsns clear">
		<div className="container">
			<img src="/static/images/05-contact/line-social.png" />
			<ul>
				<li>
					<ul>
						<li>
							<Link href=""><a>
								<i className="fab fa-facebook-square" />
								<h2>ตำมั่ว ต้นตำรับ</h2>
							</a></Link>
						</li>
						<li><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2F01.png?alt=media&token=b62d3dfd-c962-4f0c-8be8-aed95c161ea5"/></li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<Link href=""><a>
								<i className="fab fa-line" />
								<h2>@tummouroriginal</h2>
							</a></Link>
						</li>
						<li><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2F02.png?alt=media&token=08478fda-5d30-4c4b-865e-a3562f287b14"/></li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<Link href=""><a>
								<i className="fab fa-instagram" />
								<h2>spicygang</h2>
							</a></Link>
						</li>
						<li><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2F03.png?alt=media&token=c7bc1561-ef20-4e2c-8741-88fdac7e3ba0"/></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
)

export { ContactSns }