<template>

	<div class="photographDetail">
		<div class="header">
			<img src="../assets/back.svg" class="goBack" @click="goBack" />
			<span class="headTitle">识别结果</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<!--头部图片-->
		<div>
			<!--<img :src='getImgUrl()' style="width: 300px;height: 240px;" />-->
			<img src="../assets/logos.png" style="width: 100%;" />
		</div>
		<!--识别结果-->
		<div class="listBlock clearfloat" style="margin-top: 20px;">
			<!--图标-->
			<div class="listIco"><img src="../assets/u299.svg" /></div>
			<ul class="listContent">
				<li class="contentTitle">识别结果</li>
				<li class="contentResult">柑橘黄龙病</li>
				<li class="contentMain">
					<span>概率</span>
					<div id="chart_example"></div>
				</li>
			</ul>

		</div>
		<!--防治方法-->
		<div class="listBlock clearfloat">
			<!--图标-->
			<div class="listIco"><img src="../assets/u305.svg" /></div>
			<ul class="listContent">
				<li class="contentTitle">防治方法</li>
				<li class="contentMain clearfloat">
					<ul>
						<li>(1)严格检疫制度，杜绝病苗、病穗传入无病区和新种植区。</li>
						<li>(2)培育无病苗木。</li>
						<li>(3)防治柑橘木虱。</li>
						<li>(4)预防为主，综合防治。</li>
					</ul>
				</li>
			</ul>

		</div>
		<!--找专家-->
		<div class="expertList">
			<!--图标-->
			<div class="listIco">
				<img src="../assets/u405.svg"/>
				<span>专家推荐</span>
			</div>
			<ul class="expert">
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
					<p class="expertName"><span>廖宇翔</span>（川农大副教授）</p>
					<button class="consultBtn">咨询TA</button>
				</li>
			</ul>
			

		</div>
		<!--淘宝链接-->
		<div class="listBlock clearfloat">
			<!--图标-->
			<div class="listIco"><img src="../assets/link.svg" /></div>
			<ul class="listContent">
				<li class="contentTitle">电商链接</li>
				<li class="">
					<ul class="links">
						<li @click="See('https://item.jd.com/41829171599.html')">
							<a>黄花宝治疗柑橘黄龙病</a>
						</li>
						<li @click="See('https://item.jd.com/45387487421.html')">
							<a>黄化一号黄龙病黄化症黄叶...</a>
						</li>
						<li @click="See('https://item.jd.com/46692799564.html')">
							<a>盐酸四环素黄化症农用喷洒...</a>
						</li>
						<li @click="See('https://item.jd.com/39571805328.html')">
							<a>农用土霉素黄化病黄龙病果...</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<footers message="wikis"></footers>
	</div>

</template>
<style type="text/css">
	.photographDetail {
		background-color: #F5F5F5;
		padding: 90px 10px 100px 10px;
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
	}
	
	.header .headTitle {
		margin-left: 80px;
		font-weight: 900;
		font-size: 32px;
		font-family: '微软雅黑';
	}
	
	.goBack {
		width: 40px;
		height: 40px;
		margin-top: 16px;
		margin-left: 10px;
		float: left;
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
	
	.listBlock .listIco {
		float: left;
		width: 20%;
	}
	
	.listBlock .listIco img {
		width: 70px;
		height: 70px;
	}
	
	.listBlock .listContent {
		float: right;
		width: 80%;
	}
	
	.listBlock .listContent li {
		list-style: none;
		text-align: left;
		margin: 20px 0;
		font-family: 'Arial Negreta', 'Arial';
		color: #666666;
		font-style: normal;
		font-size: 28px;
	}
	
	.listBlock .listContent li.contentTitle {
		font-weight: 700;
		font-size: 32px;
	}
	
	.listBlock .listContent li.contentResult {
		font-size: 34px;
	}
	
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
	
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	
	.contentMain {
		/*display: flex;
		justify-content: space-between;*/
	}
	
	#chart_example {
		width: 500px;
		height: 230px;
	}
	/*专家推荐*/
	.expertList{
		margin-bottom: 30px;
	}
	.expertList .listIco{
		text-align: left;
		padding-left:40px;
		margin-bottom: 10px;
	}
	.expertList .listIco img{
		width: 70px;
		height: 70px;
	}
	.expertList .listIco span{
		font-weight: bolder;
		margin-left: 26px;
		color: #666666;
	}
	.expert {
		padding: 0 !important;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.expert li {
		width: 310px;
		background-color: #FFFFFF;
		margin-bottom: 20px;
	}
	
	.expert img {
		width: 100%;
		height: 410px;
	}
	
	.expert .expertName {
		line-height: 30px;
		font-size: 26px;
	}
	
	.expert .expertName span {
		font-weight: 700;
		margin-left: 20px;
	}
	
	.expert .consultBtn {
		width: 100%;
		line-height: 54px;
		border: none;
		border-radius: 5px;
		color: #FFFFFF;
		text-align: center;
		background-color: #EA6117;
		font-size: 34px;
	}
	
	.links li a {
		color: #0062CC;
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
<script>
	import echarts from 'echarts'
	import footers from "../components/footers"
	export default {
		name: 'photographDetail',
		data() {
			return {

			}
		},
		props: {
			msg: String
		},
		components: {
			footers
		},
		mounted() {
			let this_ = this;
			let myChart = echarts.init(document.getElementById('chart_example'));
			let option = {
				series: [{
					name: '业务指标',
					type: 'gauge',
					startAngle: 180, //开始角度
					endAngle: 0, //结束角度
					radius: "100%", //仪表大小
					splitNumber: 2, //分割段数
					detail: {
						formatter: '{value}%',
						textStyle: {
							fontSize: 14
						}
					},
					data: [{
						value: 50,
						name: ''
					}]
				}],
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},

				textStyle: {
					fontSize: 8, //字体大小
				},

			};
			option.series[0].data[0].value = this.$route.query.probability;
			myChart.setOption(option, true);

			//建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
			/*window.addEventListener('resize', function() {
				myChart.resize()
			});*/
		},

		methods: {
			pageRounter(url) {
				this.$router.push(url)
			},
			goBack() {
				this.$router.push('/'); //要跳转的界面
			},
			See(e) {
				window.location.href = e
			}
			/*getImgUrl() {
				var url = this.$route.query.imgUrl;
				return url;
			},*/

		}
	}
</script>