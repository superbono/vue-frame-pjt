<template>
	<!-- <header>
    <router-link to="/">홈</router-link> |
    <router-link to="/login">로그인</router-link> |
    <router-link to="/signup">회원가입</router-link>
  </header> -->
	<header>
		<div>
			<router-link class="logo" to="/">
				<!-- <img src="../../assets/image/sp_logo.png" /> -->
				Board Test
				<span class="name" v-if="isUserLogin">{{
					this.$store.state.username
				}}</span>
				<span class="sub" v-if="isUserLogin">님, 환영합니다</span>
			</router-link>
		</div>
		<div class="navigations">
			<template v-if="isUserLogin">
				<!-- <span class="name">{{ this.$store.state.username }}</span>
				<span class="sub">님, 환영합니다</span> -->
				<span class="logoutBox">
					<button v-on:click="onLogout" class="logout">로그아웃</button>
				</span>
			</template>
			<template v-else>
				<router-link to="/login">로그인</router-link>
				<router-link to="/signup">회원가입</router-link>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	name: 'app-header',
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		onLogout() {
			this.$store.commit('clearUsername');
			this.$router.push('/login');
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #37465d;
	z-index: 2;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
}
a {
	color: #bbbec0 !important;
	font-size: 15px;
}
a:hover {
	color: white !important;
}
a.logo {
	font-size: 30px;
	font-weight: 900;
	color: white !important;
	font-family: 'Caveat', cursive;
	text-decoration: none;
}
.logo > span {
	font-size: 14px;
	font-weight: normal;
}
.navigations a {
	margin-left: 10px;
	text-decoration: none;
}
.fixed {
	position: fixed;
	top: 0;
	width: 100%;
}
a.router-link-exact-active {
	color: white !important;
	font-weight: bold;
}
.sub {
	color: #fff;
	margin-right: 30px;
}
.name {
	opacity: 0.7;
	color: #ced1d2;
	margin-left: 20px;
}
.logout {
	border: 0;
	background: #37465d;
	margin-right: 5px;
	opacity: 0.7;
	color: #ced1d2;
}

.logout:hover {
	color: #fff;
	opacity: 1;
}
</style>
