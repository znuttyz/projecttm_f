const News = () => (
	<div className="news clear">
		<div className="tab">
			<button className="tablink" onclick="openType(event, 'News')">ข่าวสาร</button>
			<button className="tablink" onclick="openType(event, 'Promotions')">โปรโมชั่น</button>
		</div>
		<div id="News" className="tabcontent">
			<h3>News</h3>
			<p>lorem ipsum</p>
		</div>
		<div id="Promotions" className="tabcontent">
			<h3>Promotions</h3>
			<p>lorem ipsum</p>
		</div>
	</div>
)

export { News }