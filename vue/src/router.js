import Vue from 'vue'
import Router from 'vue-router'
import photographPage from "./view/photograph.vue"
import photographDetail from "./view/photographDetail.vue"
Vue.use(Router)

export default new Router({
  routes: [
		{
			path: "/",
			name: 'photograph',
			component:photographPage
		},
		{
			//path: "/photographDetail/:imgUrl/:probability",
			path: "/photographDetail",
			name: 'photographDetail',
			component: () => import("./view/photographDetail.vue"),
			//component: require('./view/photographDetail')
		},
		{
			path: "/wiki",
			name: 'wiki',
			component: () => import("./view/wiki.vue"),
		},
		{
			path: "/expert",
			name: 'expert',
			component: () => import("./view/expert.vue"),
		},
		{
			path: "/encyclopedia",
			name: 'encyclopedia',
			component: () => import("./view/encyclopedia.vue"),
		},
		{
			path: "/community",
			name: 'community',
			component: () => import("./view/community.vue"),
		},
		{
			path: "/information",
			name: 'information',
			component: () => import("./view/information.vue"),
		},
		{
			path: "/pictures",
			name: 'pictures',
			component: () => import("./view/pictures.vue"),
		},
		{
			path: "/experters",
			name: 'experters',
			component: () => import("./view/experters.vue"),
		}
  ]
})

