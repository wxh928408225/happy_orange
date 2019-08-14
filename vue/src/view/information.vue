<template>
	<div class="information">
		<div class="header ">
			<span>
				<img src="../assets/back.svg" class="goBack" @click="goBack" />
			</span>
			<span class="headTitle">橙长资讯</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<!--搜索框-->
		<div class="searchInput">
			<input type="text" placeholder="请输入搜索内容" />
			<span class="subscribe">+订阅</span>
		</div>
		<div class="totalTitle">
			<span style="color: #EA6117;">推荐</span>
			<span>市场动态</span>
			<span>实用技术</span>
			<span>柑橘专栏</span>
		</div>
		<div class="infoContent">
			<div>
				<img src="../assets/info.png" />
			</div>
			
			<h3 class="imgTitle">海升柑橘产业发展 全力巩固仪陇脱贫成果</h3>
			<p class="userInfo">
				<span>仪陇手机台</span>
				<span>2019/07/29</span>
			</p>

		</div>
		<div class="infoContent">
			<div>
				<img src="../assets/info2.png" />
			</div>
			
			<h3 class="imgTitle">象山晓塘“橘姑娘”织梦柑橘加工产业 </h3>
			<p class="userInfo">
				<span>宁波日报</span>
				<span>2019/07/17</span>
			</p>

		</div>
	</div>
</template>

<script>
	export default {
		name: "information",
		methods: {
			goBack() {
				this.$router.go(-1); //返回上一层
			},
		}
	}
</script>

<style>
	.information {
		padding-top: 250px;
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
	
	.searchInput {
		background-color: #F6B65A;
		width: 100%;
		position: fixed;
		top: 78px;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	
	.searchInput input {
		width: 60%;
		border: none;
		border-radius: 50px;
		padding: 10px 0 10px 100px;
		margin: 10px 0;
		background-image: url(../assets/search.svg);
		background-size: 60px 60px;
		background-repeat: no-repeat;
		background-position: 30px 2px;
		font-size: 34px;
	}
	
	.searchInput .subscribe {
		background-color: #FFFFFF;
		display: inline-block;
		height: 40px;
		padding: 10px 30px;
		border-radius: 50px;
		margin-top: 10px;
		color: #EA6117;
	}
	
	.totalTitle {
		position: fixed;
		top: 160px;
		border-bottom: 1px solid #CCCCCC;
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 36px;
		padding: 10px 0;
		background-color: #FFFFFF;
	}
	
	.infoContent {
		background-color: #FFFFFF;
		margin: 20px;
		padding-bottom: 20px;
	}
	.infoContent img{
		width: 100%;
	}
	.infoContent .imgTitle{
		padding-left: 10px;
	}
	.infoContent .userInfo{
		display: flex;
		justify-content: space-between;
		font-size: 26px;
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