<template>
	<div class="experterss">
		<div class="header ">
			<span>
				<img src="../assets/back.svg" class="goBack" @click="goBack" />
			</span>
			<span class="headTitle">橙长专家</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<!--基本信息区-->
		<div class="expertBasic">
			<div class="basicTop">
				<div class="expertImg">
					<img src="../assets/expert14.jpg"/>
				</div>
				<ul class="expertInfo1">
					<li><h3>徐精文</h3></li>
					<li>四川农业大学资源学院教授</li>
					<li><span class="labelOne">已服务</span><span class="labelTwo">25人</span></li>
					<li class="evaluate">评价：<img src="../assets/star.svg" class="evaluationStar"/>4.9</li>
				</ul>
			</div>
			<ul class="expertInfo2">
				<li>擅长作物：
					<span class="labers labelThree">橘子</span>
					<span class="labers labelFour">橙子</span>
					<span class="labers labelThree">柑橘</span>
					<span class="labers labelFive">梨</span>
					<span class="labers labelFour">火龙果</span>
					<span class="labers labelThree">桃</span>
				</li>
				<li>擅长领域：农业技术服务</li>
				<li>行业经验：21年</li>
				<li>熟悉地区：川渝地区</li>
			</ul>
		</div>
		<!--专家介绍-->
		<div class="expertContent">
			<h3><span class="titleInco">|</span>专家介绍</h3>
			<ul>
				<li><span class="buleFont">教授，硕士生导师</span>。主要从事地理信息系统设计与开发、3S技术应用、气象灾害等方面的教学与科研工作。</li>
				<li>先后主持或主研了国家重大行业专项、国家自然科学基金、省重大科技攻关项目、省重点研究项目等20余项。</li>
				<li>对葡萄、火龙果、柑橘、梨、桃、杨梅、草莓、火龙果、无花果、瓜类、蔬菜、水稻等的病虫防治等具有良好的理论基础和实践经验。</li>
			</ul>
		</div>
		<div class="expertContent" style="margin-bottom: 50px;">
			<h3><span class="titleInco">|</span>用户评价</h3>
		</div>
		<div class="consultingBtn">
			<button>立即咨询</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"exporters",
		data(){
			return{
				
			}
		},
		methods:{
			goBack() {
				this.$router.go(-1);//返回上一层
			},
		}
	}
</script>

<style>
	.experterss{
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
	.expertBasic,.expertContent{
		text-align: left;
		background-color: #FFFFFF;
		padding: 10px 20px;
		color: #666666;
		margin-bottom: 20px;
		
	}
	.expertBasic{
		margin-top: 80px;
	}
	.expertBasic .basicTop{
		display: flex;
		/*justify-content: space-between;*/
		flex-wrap: nowrap;
	}
	.expertBasic .basicTop .expertImg{
		width: 200px;
	}
	.expertBasic .basicTop .expertImg img{
		width: 100%;
		border-radius: 10px;
	}
	.expertBasic .basicTop .expertInfo1{
		margin-left: 20px;
	}
	.expertBasic .basicTop .expertInfo1 li{
		list-style: none;
		margin: 10px 0;
	}
	.expertBasic .basicTop .expertInfo1 li .labelOne{
		background-color: #182022;
		border:1px solid #182022;
		padding: 0 10px;
		color: #FFFFFF;
	}
	.expertBasic .basicTop .expertInfo1 li .labelTwo{
		border:1px solid #182022;
		padding: 0 10px;
	}
	.expertBasic .expertInfo2{
		margin-top: 20px;
	}
	.expertBasic .expertInfo2 li{
		margin: 10px 0;
		width: 100%;
	}
	.expertContent ul li{
		margin: 30px 0;
		width: 100%;
	}
	.consultingBtn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-top: 1px solid #CCCCCC;
		background-color: #FFFFFF;
		text-align: center;
	}
	.consultingBtn button{
		background-color: #EA6117;
		width: 80%;
		color: #FFFFFF;
		border: none;
		padding: 10px 0;
		margin: 20px 0;
		border-radius: 6px;
		font-size: 40px;
	}
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
	.evaluationStar{
		width: 50px !important;
		height: 50px;
	}
	.labers{
		display: inline-block;
		width: 110px;
		text-align: center !important;
		color: #FFFFFF;
		border-radius: 10px;
		margin: 6px;
	}
	.labelThree{
		background-color: orange;
	}
	.labelFour{
		background-color: red;
	}
	.labelFive{
		background-color: green;
	}
	.titleInco{
		font-size: 32px;
		color: #EA6117;
		font-weight: bolder;
		margin-right: 10px;
	}
	.buleFont{
		color: #EA6117;
		font-weight:bolder ;
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