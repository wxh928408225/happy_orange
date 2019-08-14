<template>
	<div class="community">
		<div class="header ">
			<span>
				<img src="../assets/back.svg" class="goBack" @click="goBack" />
			</span>
			<span class="headTitle">橙长社区</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<div>
			<div class="communityList" style="margin-top: 50px;">
				<div class="comUser clearfloat">
					<p>
						<img src="../assets/user01.jpg"/>
					</p>
					<p>
						<h5>差无此号</h5>
						<p>2小时前</p>
					</p>
				</div>
				<p>请问。。我的柑橘是不是太近了。。离多远最适合。谢谢</p>
				<div class="comImgs">
					<img src="../assets/timg.jpg"/>
					
					
				</div>
				<div class="reply">
					<span class="replyNumber">1回复</span>
					<div class="replyPeople">
						<span class="labels"></span>
						<span style="font-weight: bolder;color: #000000;">植株达人</span>
						：植株距离已经很好了
					</div>
				</div>
				<div class="share">
					<img src="../assets/user01.svg"/>
					<span>你想说什么？</span>
				</div>
			</div>
			<div class="communityList">
				<div class="comUser clearfloat">
					<p>
						<img src="../assets/user02.jpg"/>
					</p>
					<p>
						<h5>飞翔</h5>
						<p>3小时前</p>
					</p>
				</div>
				<p>这是自家出产的橘子，有需要的+V feixiang</p>
				<div class="comImgs">
					<img src="../assets/img12.jpg"/>
				</div>
				<div class="reply">
					<span class="replyNumber">1回复</span>
					<div class="replyPeople">
						<span class="labels"></span>
						<span style="font-weight: bolder;color: #000000;">吃货</span>
						：看着很美味呢
					</div>
				</div>
				<div class="share">
					<img src="../assets/user01.svg"/>
					<span>你想说什么？</span>
				</div>
			</div>
			<div class="communityList">
				<div class="comUser clearfloat">
					<p>
						<img src="../assets/user02.jpg"/>
					</p>
					<p>
						<h5>橘子爱番茄</h5>
						<p>3小时前</p>
					</p>
				</div>
				<p>这个是不是遭受了黄龙病啊？</p>
				<div class="comImgs">
					<img src="../assets/timg2.jpg"/>
				</div>
				<div class="reply">
					<span class="replyNumber">1回复</span>
					<div class="replyPeople">
						<span class="labels"></span>
						<span style="font-weight: bolder;color: #000000;">川农大徐精文</span>
						：看起来像，请在找专家页面联系我，
					</div>
				</div>
				<div class="share">
					<img src="../assets/user01.svg"/>
					<span>你想说什么？</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "community",
		methods: {
			goBack() {
				this.$router.go(-1);//返回上一层
			},
		}
	}
</script>

<style>
	.community {
		padding-top: 90px;
		text-align: left;
		color: #666666;
	}
	
	.header {
		background-color: #F6B65A;
		height: 80px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		color: #FFFFFF;
		text-align: center;
		line-height: 80px;
		display: flex;
		justify-content: space-between;
	}
	
	.header .headTitle {
		/*margin-left: 80px;*/
		font-weight: 900;
		font-size: 32px;
		font-family: '微软雅黑';
	}
	
	.goBack {
		width: 40px;
		height: 40px;
		margin-top: 16px;
		margin-left: 10px;
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
	.communityList{
		padding: 10px 20px;
		background-color: #FFFFFF;
		margin: 20px 0;
	}
	.communityList .comUser img{
		/*display: flex;*/
		float: left;
		margin-right: 20px;		
	}
	.communityList .comUser img{
		width: 80px;
		height: 80px;
		border-radius: 50px;
	}
	.communityList .reply{
		font-size: 26px;
		margin: 20px 0;
	}
	.communityList .reply .replyPeople{
		background-color: #F5F6F9;
		padding: 10px 20px;
	}
	.communityList .share{
		font-size: 26px;
		padding-bottom: 20px;
		background-image: url(../assets/share01.svg);
		background-repeat: no-repeat;
		background-position:98% 10px ;
	}
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
	.comImgs{
		width: 60%;
	}
	.comImgs img{
		width: 100%;
	}
	ul,
	li {
		list-style: none;
	}
	
	ul,
	li,
	h3,h5 {
		margin: 0;
		padding: 0;
	}
	p{
		margin: 10px;
	}
</style>