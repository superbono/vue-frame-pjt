<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
        <button class="btn">
          <a href="/login">로그인페이지로</a>
        </button>
        <button class="btn">
          <a href="/">홈</a>
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logMessage: ""
    };
  },
  methods: {
    submitForm() {
      this.logMessage = "회원가입이 완료되었습니다.";
      this.initForm();
    },
    initForm() {
      (this.username = ""), (this.password = ""), (this.nickname = "");
    }
  }
};
</script>

<style></style>
