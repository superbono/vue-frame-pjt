<template>
  <!-- <header>
    <router-link to="/">홈</router-link> |
    <router-link to="/login">로그인</router-link> |
    <router-link to="/signup">회원가입</router-link>
  </header> -->
  <header>
    <div>
      <router-link class="logo" to="/">
        <img src="../../assets/image/sample_logo.png" />
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
  name: "app-header"
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #d9d8df;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
.logo img {
  /* font-size: 30px;
  font-weight: 900;
  color: white; */
  width: 35px;
  height: 30px;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
