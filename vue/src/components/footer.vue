<template>
  <div class="menuBtns">
      <mt-tabbar v-model="currentIndex">
          <mt-tab-item id="homes" @click.native="pageRounter('/')"  class="menuBtn">
            <div class="icon ">&#xf015</div>
            首页
          </mt-tab-item>
          <mt-tab-item id="wikis" @click.native="pageRounter('wiki')" class="menuBtn">
           <div class="icon ">&#xf1b2</div>
            更多
          </mt-tab-item>
      </mt-tabbar>
      
  </div>
</template>

<script>
export default {
  name: 'foot',
  props: ["message"],
  data(){
        return {
          tabs:[],
          currentIndex:this.message //currentIndex接收父组件传来的activeIndex值；
      }
    },
  methods:{
    pageRounter(url){
      this.$router.push(url)
    }
  }
}
</script>
<style scoped>
 .icon{
       font-family: FontAwesome;
      font-size:50px;
       display:block;
       padding-bottom:5px;
   }
  .menuBtns{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
	}
	.menuBtns .menuBtn{
	}
</style>
<style>
	.mint-tabbar > .mint-tab-item.is-selected{color:#F6B65A;}
	.mint-tab-item-label{
		font-size: 26px;
	}
</style>