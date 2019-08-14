<template>
	<div class="photograph">
		<div class="header">
			<span class="goBack"></span>
			<span class="headTitle">橙长快乐</span>
			<button class="exit">
				<img src="../assets/u63.svg"/>
				<span class="separator">|</span>
				<img src="../assets/u61.svg"/>
			</button>
		</div>
		<div class="logo">
			<img src="../assets/logos.png" />
		</div>
		<div class="main">
			<div class="mainImg">
				<img src="../assets/u40.svg" />
			</div>
			<form method="post" action="http://47.106.214.4/up_photo" enctype="multipart/form-data" id="test_form">
				<a href="javascript:;" class="file">拍照诊断
					<input type="file" name="" id="photo" name="photo" @change="photoUpload">
				</a>
			</form>

		</div>
		<foot message="homes"></foot>
	</div>
</template>
<script>
	import foot from "../components/footer";
	import $ from 'jquery';
	export default {
		name: 'photograph',
		data() {
			return {}
		},
		components: {
			foot
		},
		methods: {
			photoUpload() {
				/*this.$router.push({
					name: 'photographDetail',
					query: {
						imgUrl: 0,
						probability: 50
					}
				}); */
				var aa = this.$router;
				let url = 'http://47.106.214.4/up_photo'
				var formData = new FormData();
				formData.append("photo", $("#photo")[0].files[0]);
				$.ajax({
					url: url,
					type: 'post',
					data: formData,
					contentType: false,
					processData: false,
					success: function(result) {
						if(result.msg=='success'){
							aa.push({
								name: 'photographDetail',
								query: {
									imgUrl: 0,
									probability: result.score
								}
							}); //要跳转的界面
						}else{
							alert("上传失败!")
						}
					},
					error: function(result) {
						alert("error:上传失败!");
					}

				});
			},
		}
	}
</script>
<style lang="scss" scoped>

</style>
<style type="text/css">
	.file {
		position: relative;
		display: inline-block;
		color: #FFFFFF;
		background-color: #F6B65A;
		border: 1px solid #F6B65A;
		border-radius: 4px;
		padding: 0 20px 0 80px;
		overflow: hidden;
		text-decoration: none;
		text-indent: 0;
		line-height: 80px;
		background-image: url(../assets/u46.svg);
		background-repeat: no-repeat;
		background-size: 60px 60px;
		background-position: 10px 10px;
		height: 80px;
	}
	
	.file input {
		position: absolute;
		font-size: 100px;
		right: 0;
		top: 0;
		opacity: 0;
	}
	
	.file:hover {
		background-color: #F6B65A;
		background-image: url(../assets/u46.svg);
		background-repeat: no-repeat;
		background-size: 60px 60px;
		background-position: 10px 10px;
		color: #FFFFFF;
		text-decoration: none;
	}
	
	.photograph {
		padding: 90px 10px 40px 10px;
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
		margin-left: 220px;
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
	
	.logo {
		text-align: center;
		position: relative;
	}
	
	.logo img {
		width: 600px;
		height: 400px;
		position: absolute;
		top: -80px;
		left: 10%;
	}
	
	.main {
		margin-top: 300px;
	}
	
	.main .mainImg {}
	
	.main .mainImg img {
		width: 400px;
		height: 400px;
		background-image: url(../assets/u38.svg);
		background-repeat: no-repeat;
		background-size: 200px 200px;
		background-position: 110px 90px;
	}
</style>