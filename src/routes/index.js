import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/main',
			component: () => import('@/views/MainView'),
		},
		{
			path: '/login',
			component: () => import('@/views/user/LoginView'),
		},
		{
			path: '/signup',
			component: () => import('@/views/user/SignUpView'),
		},
		{
			path: '/mypage',
			component: () => import('@/views/user/MypageView'),
		},
		{
			path: '*',
			component: () => import('@/views/error/NotFoundView'),
		},
	],
});
