import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
/*const store = new Vuex.Store({
		state: {
			isLogin: "",
			subtitle: "",
			signSlect: "", //首页底部选中标记
			backInfo: {
				sign: false,
				url: ""
			}
		},
		mutations: {
			isLogin(state, data) {
				localStorage.setItem("loginUserId", data.loginUserId);
				localStorage.setItem("sessionId", data.sessionId);
				localStorage.setItem("storageId", data.storageId);
				localStorage.setItem("loginUserName", data.loginUserName);
				localStorage.setItem("storageName", data.storageName);
				localStorage.setItem("releBuessRemark", data.releBuessRemark);
			},
			issignSlect(state, data) {
				state.signSlect = data
			},
			subtitle(state, data) {
				state.subtitle = data
			},
			backInfo(state, data) {
				state.backInfo.sign = data.sign;
				state.backInfo.url = data.url;
			},

		}

	}

)*/
const state={
    imgUrl:0,//图片地址
    probability:0,//概率数
}

//export default store
export default state