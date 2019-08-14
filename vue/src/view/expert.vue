<template>
	<div class="expertss">
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
		<ul class="menuNav">
			<li class="borderRight">
				<span>全部</span>
			</li>
			<li>
				<span>推荐排序</span>
			</li>
		</ul>
		<div style="margin-top: 30px;">
			<div class="exList" style="padding-top: 20px;">
				<div class="expertList" @click="pageRounter('experters')">
					<div class="expertImg">
						<img src="../assets/expert14.jpg" />
					</div>
					<ul class="expertInfo1">
						<li class="expertUser">
							<h3>徐精文</h3>
							<img src="../assets/star.svg" class="evaluationStar" />4.9
						</li>
						<li>四川农业大学教授</li>
						<li class="laberOne">21年经验 已服务25人</li>
						<li>
							<span class="laberss labelThree">柑橘</span>
							<span class="laberss labelFive">橙子</span>
							<span class="laberss labelFour">火龙果</span>
							<span class="laberss labelSix">更多</span>
						</li>
					</ul>
				</div>
				<div class="expertBtn">
					<button>了解更多</button>
				</div>
			</div>
			<div class="exList" @click="pageRounter('experters')">
				<div class="expertList">
					<div class="expertImg">
						<img src="../assets/expert12.jpg" />
					</div>
					<ul class="expertInfo1">
						<li class="expertUser">
							<h3>纪璟德</h3>
							<img src="../assets/star.svg" class="evaluationStar" />4.5
						</li>
						<li>重庆农科所植保专家</li>
						<li class="laberOne">19年经验 已服务20人</li>
						<li>
							<span class="laberss labelThree">橙子</span>
							<span class="laberss labelFive">柑橘</span>
							<span class="laberss labelFour">梨</span>
							<span class="laberss labelSix">更多</span>
						</li>
					</ul>
				</div>
				<div class="expertBtn">
					<button>了解更多</button>
				</div>
			</div>
			<div class="exList" @click="pageRounter('experters')">
				<div class="expertList">
					<div class="expertImg">
						<img src="../assets/expert13.jpg" />
					</div>
					<ul class="expertInfo1">
						<li class="expertUser">
							<h3>董冠军</h3>
							<img src="../assets/star.svg" class="evaluationStar" />4.7
						</li>
						<li>四川农业大学副教授</li>
						<li class="laberOne">8年经验 已服务15人</li>
						<li>
							<span class="laberss labelThree">橙子</span>
							<span class="laberss labelFive">柑橘</span>
							<span class="laberss labelFour">苹果</span>
							<span class="laberss labelSix">更多</span>
						</li>
					</ul>
				</div>
				<div class="expertBtn">
					<button>了解更多</button>
				</div>
			</div>
			<div class="exList" @click="pageRounter('experters')">
				<div class="expertList">
					<div class="expertImg">
						<img src="../assets/expert15.jpg" />
					</div>
					<ul class="expertInfo1">
						<li class="expertUser">
							<h3>廖宇翔</h3>
							<img src="../assets/star.svg" class="evaluationStar" />4.8
						</li>
						<li>四川农业大学副教授</li>
						<li class="laberOne">13年经验 已服务16人</li>
						<li>
							<span class="laberss labelThree">苹果</span>
							<span class="laberss labelFive">葡萄</span>
							<span class="laberss labelFour">柑橘</span>
							<span class="laberss labelSix">更多</span>
						</li>
					</ul>
				</div>
				<div class="expertBtn">
					<button>了解更多</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "export",
		data() {
			return {

			}
		},
		methods: {
			goBack() {
				this.$router.go(-1); //返回上一层
			},
			pageRounter(url) {
				this.$router.push(url)
			}
		}
	}
</script>

<style>
	.expertss {
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
	
	.menuNav {
		position: fixed;
		display: flex;
		top: 60px;
		left: 0;
		width: 100%;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
		padding: 30px 20px 20px 20px;
		
	}
	.menuNav li{
		width: 48%;
		background-image: url(../assets/down.svg);
		background-repeat: no-repeat;
		background-position: 280px 10px;
		text-align: left;
	}
	.menuNav li.borderRight{
		border-right: 1px solid #CCCCCC;
	}
	.exList {
		margin-bottom: 20px;
		padding: 10px 20px;
		background-color: #FFFFFF;
		text-align: left;
	}
	
	.exList .expertList {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #CCCCCC;
		padding-bottom: 30px;
		margin: 0;
	}
	
	.exList .expertList .expertImg {
		width: 200px;
		height: 200px;
	}
	
	.exList .expertList .expertImg img {
		width: 100%;
		border-radius: 10px;
	}
	
	.exList .expertList .expertInfo1 {
		margin-left: 20px;
	}
	
	.exList .expertList .expertInfo1 li {
		list-style: none;
		margin: 10px 0;
	}
	
	.expertUser {
		display: flex;
	}
	/*.exList .expertList .expertInfo1 li .labelOne {
		background-color: #182022;
		border: 1px solid #182022;
		padding: 0 10px;
		color: #FFFFFF;
	}
	
	.exList .expertList .expertInfo1 li .labelTwo {
		border: 1px solid #182022;
		padding: 0 10px;
	}*/
	
	.exList .expertBtn {
		text-align: right;
	}
	
	.exList .expertBtn button {
		background-color: #EA6117;
		padding: 0 20px;
		border: none;
		border-radius: 6px;
		margin: 20px 10px;
		color: #FFFFFF;
		font-size: 28px;
	}
	
	.laberss {
		display: inline-block;
		width: 100px;
		text-align: center !important;
		color: #FFFFFF;
		border-radius: 10px;
		margin: 4px;
		font-size: 24px;
	}
	
	.labelThree {
		background-color: orange;
	}
	
	.labelFour {
		background-color: red;
	}
	
	.labelFive {
		background-color: green;
	}
	
	.labelSix {
		border: 1px solid #EA6117;
		color: #EA6117;
	}
	
	.evaluationStar {
		width: 50px !important;
		height: 50px;
	}
	
	li.laberOne {
		font-size: 28px;
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
</style>