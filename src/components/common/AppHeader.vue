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
			</router-link>
		</div>
		<div class="navigations">
			<router-link to="/login">로그인</router-link>
			<router-link to="/signup">회원가입</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: 'app-header',
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
</style>
