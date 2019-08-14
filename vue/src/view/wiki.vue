<template>
	<div class="wiki">
		<div class="header">
			<span class="goBack"></span>
			<span class="headTitle">更多</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<!--图片轮播-->
		<div class="swipers">
			<mt-swipe :auto="2000">
				<mt-swipe-item><img src="../assets/img2.jpg" width="100%" /></mt-swipe-item>
				<mt-swipe-item><img src="../assets/img1.jpg" width="100%" /></mt-swipe-item>
				<mt-swipe-item><img src="../assets/img3.jpg" width="100%" /></mt-swipe-item>
				<mt-swipe-item><img src="../assets/back.jpg" width="100%" /></mt-swipe-item>
			</mt-swipe>
		</div>
		<!--菜单导航-->
		<ul class="menu">
			<li @click="pageRounter('expert')">
				<img src="../assets/menu1.png"/>
				<p class="menuTitle" >找专家</p>
			</li>
			<li @click="pageRounter('encyclopedia')">
				<img src="../assets/menu2.png" />
				<p class="menuTitle">查百科</p>
			</li>
			<li @click="pageRounter('pictures')">
				<img src="../assets/menu3.png" />
				<p class="menuTitle">听讲座</p>
			</li>
			<li @click="pageRounter('information')">
				<img src="../assets/menu4.png" />
				<p class="menuTitle">看资讯</p>
			</li>
			<li @click="pageRounter('community')">
				<img src="../assets/menu5.png" />
				<p class="menuTitle">逛社区</p>
			</li>
		</ul>
		<!--找专家-->
		<div class="menuList">
			<!--<p class="lsitTitle">找专家</p>
        	<p>权威专家1对1问诊</p>-->
			<div class="lsitTitle">
				<p class="titlName" @click="pageRounter('expert')">找专家</p>
				<p>权威专家1对1问诊</p>
			</div>
			<ul class="listContent expert">
				<li @click="pageRounter('expert')">
					<img src="../assets/expert14.jpg" />
					<p class="expertName"><span>徐精文</span>（川农大教授）</p>
					<button class="consultBtn">咨询TA</button>
				</li>
				<li @click="pageRounter('expert')">
					<img src="../assets/expert12.jpg" />
					<p class="expertName"><span>纪璟德</span>（农科所植保专家）</p>
					<button class="consultBtn">咨询TA</button>
				</li>
				<li @click="pageRounter('expert')">
					<img src="../assets/expert13.jpg" />
					<p class="expertName"><span>董冠军</span>（川农大副教授）</p>
					<button class="consultBtn">咨询TA</button>
				</li>
				<li @click="pageRounter('expert')">
					<img src="../assets/expert15.jpg" />
					<p class="expertName"><span>廖宇祥</span>（川农大副教授）</p>
					<button class="consultBtn">咨询TA</button>
				</li>
			</ul>

		</div>
		<!--查百科-->
		<div class="menuList">
			<div class="lsitTitle">
				<p class="titlName" @click="pageRounter('encyclopedia')">查百科</p>
				<p>更全面的农业百科知识库</p>
			</div>
			<ul class="listContent wikiList">
				<li @click="pageRounter('encyclopedia')">
					<img src="../assets/chuang.png" />
					<span class="imgName">柑橘疮痂病</span>
				</li>
				<li @click="pageRounter('encyclopedia')">
					<img src="../assets/kui.png" />
					<span class="imgName">柑橘溃疡病</span>
				</li>
				<li @click="pageRounter('encyclopedia')">
					<img src="../assets/sha.png" />
					<span class="imgName">柑橘沙皮病</span>
				</li>
				<li @click="pageRounter('encyclopedia')">
					<img src="../assets/qing.png" />
					<span class="imgName">柑橘青霉病</span>
				</li>
			</ul>

		</div>
		<!--看资讯-->
		<div class="menuList">
			<div class="lsitTitle">
				<p class="titlName" @click="pageRounter('information')">看资讯</p>
				<p>最新最全面的农业资讯</p>
			</div>
			<ul class="listContent information">
				<li @click="pageRounter('information')">
					<img src="../assets/kui2.png" />
					<div class="informationInfo clearfloat">
						<h3>柑橘“溃疡病”频频复发！防治、预防措施抓紧跟上</h3>
						<p>
							<span class="informationSource">新浪新闻</span><span class="informationTime">2019/07/29</span>
						</p>
					</div>
				</li>
				<li @click="pageRounter('information')">
					<img src="../assets/img12.jpg" />
					<div class="informationInfo clearfloat">
						<h3>四川浦江的柑橘丰收啦！</h3>
						<p>
							<span class="informationSource">澎湃新闻</span><span class="informationTime">2019/05/16</span>
						</p>
					</div>
				</li>
			</ul>

		</div>
		<!--逛社区-->
		<div class="menuList">
			<div class="lsitTitle">
				<p class="titlName" @click="pageRounter('community')">逛社区</p>
				<p>农业人的交流平台</p>
			</div>
			<ul class="listContent community">
				<li @click="pageRounter('community')">
					<div class="comImgs">
						<img src="../assets/fig2.jpg" />
					</div>
					
					<div class="communityInfo">
						<h3>柑橘黄龙病有哪些危害？</h3>
						<p class="details">由类立克次体细菌、类细菌引起的一种毁灭性的橘柑病害。幼龄树发病后1~2年内死亡，老龄树发病3 ~ 5年内死亡或丧央结果能力</p>
						<p class="userName clearfloat">川农大徐精文<img src="../assets/right.svg" class="rightArrow" /> </p>
					</div>
				</li>
				<li @click="pageRounter('community')">
					<img src="../assets/orange4.jpg" />
					<div class="communityInfo">
						<h3>如何防止柑橘黄龙病</h3>
						<p class="details">为了提高防治效果可以采用立体化防治的方案。一是生长期（时间上）立体化防治，花芽期与展叶期是易于被侵染的关键时期，中药沃丰素具有</p>
						<p class="userName clearfloat">植保专家纪璟德<img src="../assets/right.svg" class="rightArrow" /> </p>
					</div>
				</li>
			</ul>

		</div>

		<foot message="wikis"></foot>
	</div>
</template>
<script>
	import foot from "../components/footer"
	export default {
		name: 'wiki',
		data() {
			return {}
		},
		components: {
			foot
		},
		methods: {
			pageRounter(url) {
				this.$router.push(url)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.swipers {
		height: 350px;
		padding: 20px;
		background-color: #FFFFFF;
	}
</style>
<style type="text/css">
	.wiki {
		font-family: 'Arial Negreta', 'Arial';
		font-style: normal;
		font-size: 26px;
		color: #666666;
		text-align: left;
		overflow-y: hidden;
		padding: 90px 0 40px 0;
	}
	
	.header {
		background-color: #F6B65A !important;
		height: 80px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		color: #FFFFFF;
		text-align: center;
		line-height: 80px;
		z-index: 999;
	}
	
	.header .headTitle {
		margin-left: 140px;
		font-weight: 900;
		font-size: 32px;
		font-family: '微软雅黑';
	}
	
	.exit {
		border: none;
		background-color: #EA6117;
		width: 200px;
		height: 60px;
		text-align: center;
		margin: 10px 10px 0 0;
		border-radius: 40px;
		position: relative;
		float: right;
	}
	
	.exit img {
		width: 50px;
		height: 50px;
		margin-left: 10px;
	}
	
	.exit .separator {
		color: #FFFFFF;
		position: absolute;
		top: 6px;
		left: 105px;
		font-size: 36px;
	}
	
	.menu {
		display: flex;
		justify-content: space-around;
		margin-bottom: 20px;
		background-color: #FFFFFF;
		padding: 10px 20px 20px 20px;
	}
	
	.menu li img {
		width: 100px;
		height: 100px;
	}
	
	.menu li .menuTitle {
		font-weight: 700;
		font-size: 34px;
		text-align: center;
		margin: 10px 0;
	}
	
	.menuList {
		background-color: #FFFFFF;
		width: 96%;
		padding: 30px 20px;
		margin: 20px 0;
	}
	
	.menuList .lsitTitle {
		padding-left: 50px;
		background-image: url(../assets/u423.png);
		background-repeat: no-repeat;
		background-position: 0 10px;
	}
	
	.menuList .lsitTitle .titlName {
		font-weight: 700;
		font-size: 34px;
	}
	
	.menuList .expert,
	.menuList .wikiList {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.menuList .listContent li {
		width: 340px;
		background-color: #FFFFFF;
		margin-bottom: 20px;
	}
	.menuList .expert li,.menuList .wikiList li{
		width: 340px;
		
	}
	.menuList .expert li img {
		width: 100%;
		height: 500px;
	}
	.menuList .wikiList li img {
		width: 100%;
		height: 340px;
	}
	
	.menuList .listContent li .expertName {
		line-height: 50px;
	}
	
	.menuList .listContent li .expertName span {
		font-weight: 700;
		font-size: 28px;
		margin-left: 20px;
	}
	
	.menuList .listContent li .consultBtn {
		width: 100%;
		line-height: 54px;
		border: none;
		border-radius: 5px;
		color: #FFFFFF;
		text-align: center;
		background-color: #EA6117;
	}
	
	.menuList .wikiList li {
		position: relative;
		background-color: #F5F5F5;
	}
	
	.menuList .wikiList li span {
		position: absolute;
		top: 240px;
		left: 30px;
		/*color: #33CC00;*/
		color: #000000;
		font-weight: 700;
	}
	
	.menuList .information li {
		width: 100%;
		background-color: rgba(255, 255, 255, 1);
		padding: 20px 0 20px 20px;
		display: flex;
		flex-wrap: nowrap;
	}
	
	.menuList .information li img {
		float: left;
		width: 200px;
		height: 200px;
	}
	
	.menuList .information li .informationInfo {
		float: right;
		margin-left: 10px;
		padding-right: 60px;
	}
	
	.menuList .information li .informationInfo h3 {
		margin-bottom: 80px;
	}
	
	.menuList .information li .informationInfo .informationSource {
		padding-left: 40px;
		float: left;
		background-image: url(../assets/source.svg);
		background-repeat: no-repeat;
		position: 0 0;
		background-size: 36px 36px;
	}
	
	.menuList .information li .informationInfo .informationTime {
		float: right;
	}
	.community{
		padding: 0 !important;
	}
	.menuList .community li {
		width: 96%;
		background-color: #FFFFFF;
	}
	
	.menuList .community li img {
		width: 100%;
		height: 400px;
	}
	
	.menuList .community li .communityInfo {
		padding: 10px 20px;
	}
	
	.menuList .community li .communityInfo .userName {
		font-size: 24px;
	}
	
	.menuList .community li .communityInfo .userName .rightArrow {
		float: right;
		width: 30px;
		height: 30px;
	}
	
	.menuList .community li .communityInfo .details {
		line-height: 50px;
	}
	ul,
	li {
		list-style: none;
	}
	
	ul,
	li,
	h3 {
		margin: 0;
		padding: 0;
	}
	
	p {
		margin: 10px 0;
	}
	
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
</style>