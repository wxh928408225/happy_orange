<template>
	<div class="picture">
		<div class="header ">
			<span>
				<img src="../assets/back.svg" class="goBack" @click="goBack" />
			</span>
			<span class="headTitle">橙长讲座</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<div class="classify">
			<ul class="classify1">
				<li>
					<span class="classSelectionText">全部</span>
					<label class="classSelectionImg"></label>
				</li>
				<li>
					<span>柑橘</span>
				</li>
			</ul>
			<ul class="classify2">
				<li>
					<span>品种</span>
					<img src="../assets/down.svg"/>
				</li>
				<li>
					<span>技术</span>
					<img src="../assets/down.svg"/>
				</li>
				<li>
					<span>地区</span>
					<img src="../assets/down.svg"/>
				</li>
				<li>
					<span>季节</span>
					<img src="../assets/down.svg"/>
				</li>
				<li>
					<span>生育期</span>
					<img src="../assets/down.svg"/>
				</li>
			</ul>
		</div>
		<div style="margin-top: 64px;">
			<ul class="pictureMain">
				<li>
					<img src="../assets/lecture.png" width="100%" />
				</li>
				<li class="pictureTitle">
					<span>更新中</span>
					<label>柑橘实蝇【监测+防治】技术大全</label>
				</li>
				<li class="pictureUser">
					<span> 刘立柱 柑橘病虫害诊断及防治方案</span>
				</li>
			</ul>
			<ul class="pictureMain">
				<li>
					<img src="../assets/lecture2.png" width="100%" />
				</li>
				<li class="pictureTitle">
					<span>更新中</span>
					<label>【营养基础课】掌握元素知识，种柑橘、施好肥！</label>
				</li>
				<li class="pictureUser">
					<span>张戈壁 广西柑橘研究所植保研究室</span>
				</li>
			</ul>
			<ul class="pictureMain">
				<li>
					<img src="../assets/lecture3.png" width="100%" />
				</li>
				<li class="pictureTitle">
					<span>更新中</span>
					<label>【欧阳健】答柑橘果友问，解你青苔等痛难点</label>
				</li>
				<li class="pictureUser">
					<span>欧阳健 40年柑橘种植实战专家</span>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"pictures",
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
	.picture{
		padding-top: 90px;
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
	.classify{
		position: fixed;
		top: 76px;
		left: 0;
		background-color: #FFFFFF;
		width: 100%;
		color: #666666;
	}
	.classify .classify1{
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #CCCCCC;
		padding: 20px 0;
	}
	.classify .classify1 .classSelectionText{
		position: relative;
	}
	.classify .classify1 .classSelectionImg{
		position: absolute;
		top: 83px;
		left: 140px;
		display: inline-block;
		width: 100px;
		height: 4px;
		background-color: #EA6117;
	}
	.classify .classify2{
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #CCCCCC;
		padding: 10px 0;
		font-size: 26px;
	}
	
	.pictureMain{
		background-color: #FFFFFF;
		padding: 20px;
		text-align: left;
		margin-bottom: 20px;
	}
	.pictureMain .pictureTitle{
		
	}
	.pictureMain .pictureTitle span{
		border: 1px solid #F6B65A;
		padding: 4px 10px;
		display: inline-block;
		color: #F6B65A;
		font-size: 18px;
	}
	.pictureMain .pictureTitle label{
		font-weight: bold;
	}
	.pictureUser{
		font-size: 22px;
		color: #666666;
		margin: 10px 0;
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