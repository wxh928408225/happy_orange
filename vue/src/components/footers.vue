<template>
	<div class="menuBtns">
		<mt-tabbar v-model="currentIndex">
			<mt-tab-item id="homes" @click.native="pageRounter('/')" class="menuBtn">
				<div class="icon ">&#xf015</div>
				首页
			</mt-tab-item>
			<mt-tab-item id="" class="menuBtn">
				<!--<a href="javascript:;" class="file">重新拍照
			    <input type="file" name="" id="" @change="photoUpload">
			</a>-->
				<!--<form>
					<a href="javascript:;" class="file">重新拍照
						<input type="file" name="" id="file" @change="photoUpload">
					</a>
				</form>-->
				<form method="post" action="http://47.106.214.4/up_photo" enctype="multipart/form-data" id="test_form">
				<a href="javascript:;" class="file">重新拍照
					<input type="file" name="" id="photo" name="photo" @change="photoUpload">
				</a>
			</form>
			</mt-tab-item>
		</mt-tabbar>

	</div>
</template>

<script>
	export default {
		name: 'foot',
		props: ["message"],
		data() {
			return {
				tabs: [],
				currentIndex: this.message //currentIndex接收父组件传来的activeIndex值；
			}
		},
		methods: {
			pageRounter(url) {
				this.$router.push(url)
			},
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
							alert("上传失败！")
						}
					},
					error: function(data) {
						alert("error:上传失败!");
					}

				});
			},
		},
	}
</script>
<style scoped>
	.icon {
		font-family: FontAwesome;
		font-size: 50px;
		display: block;
		padding-bottom: 5px;
	}
	
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
	
	.menuBtns {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		font-size: 34px;
	}
	
	.menuBtns .menuBtn {}
	
	.mainBtn {
		background-image: url(../assets/u46.svg);
		background-repeat: no-repeat;
		width: 250px;
		height: 80px;
		border: none;
		border-radius: 4px;
		font-size: 32px;
		text-align: right;
		color: #FFFFFF;
		background-color: rgba(64, 158, 255, 1);
		background-size: 60px 60px;
		background-position: 10px 10px;
	}
</style>