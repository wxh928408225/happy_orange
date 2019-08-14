<template>
	<div class="encyclopedia">
		<div class="header ">
			<span>
				<img src="../assets/back.svg" class="goBack" @click="goBack" />
			</span>
			<span class="headTitle">橙长百科</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<!--搜索框-->
		<div class="searchInput">
			<input type="text" placeholder="请输入搜索内容" />
		</div>
		<div class="searchResult">
			<ul class="category">
				<li>
					<h3>柑橘百科</h3>
					<span class="horizontalLine"></span>
				</li>
				<li>
					<h3>杂草百科</h3>
					<span class="horizontalLine"></span>
				</li>
			</ul>
			<ul class="subclassification">
				<li>
					<span class="labels" style="background-color: #F6B65A;color: #FFFFFF;">全部</span>
					<span class="labels">柑类</span>
					<span class="labels">虫害/螨害</span>
					<span class="labels">病害</span>
					<span class="labels">其它</span>
				</li>
			</ul>
			<ul class="imgList">
				<li>
					<img src="../assets/orange1.jpg"/>
				</li>
				<li>
					<img src="../assets/orange2.jpg"/>
				</li>
				<li>
					<img src="../assets/orange3.jpg"/>
				</li>
				<li>
					<img src="../assets/orange4.jpg"/>
				</li>
				<li>
					<img src="../assets/orange5.jpg"/>
				</li>
				<li>
					<img src="../assets/orange6.jpg"/>
				</li>
				<li>
					<img src="../assets/orange7.jpg"/>
				</li>
				<li>
					<img src="../assets/orange8.jpg"/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "encyclopedia",
		methods: {
			goBack() {
				this.$router.go(-1);//返回上一层
			},
		}
	}
</script>

<style>
	.encyclopedia {
		padding-top: 160px;
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
	.searchInput{
		background-color: #F6B65A;
		width: 100%;
		position: fixed;
		top:80px;
		left: 0;
		width: 100%;
	}
	.searchInput input{
		width: 80%;
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
	.searchResult{
		padding: 10px 20px;
		background-color: #FFFFFF;
	}
	.searchResult .category{
		display: flex;
		justify-content: space-around;
	}
	.searchResult .category .horizontalLine{
		display: inline-block;
		width: 80px;
		height: 6px;
		background-color: #F6B65A;
	}
	.subclassification{
		margin: 20px 0;
	}
	.imgList{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.imgList li{
		width: 48%;
		height: 300px;
		margin-bottom: 20px;
	}
	.imgList li img{
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.labels{
		display: inline-block;
		margin: 0 10px;
		background-color: #E0E0E0;
		border-radius: 50px;
		padding: 10px 20px;
		color: #666666;
		font-size: 26px;
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
		font-size: 32px;
	}
	
	p {
		margin: 10px 0;
	}
</style>