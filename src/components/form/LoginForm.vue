<template>
  <div>
    <h2>로그인페이지</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id:</label>
        <input id="username" v-model="username" type="text" required />
      </div>
      <div>
        <label for="password">pw:</label>
        <input id="password" v-model="password" type="text" required />
      </div>
      <button type="submit">로그인</button>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { loginUser } from "@/api/index";

export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: ""
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password
      };
      try {
        const { data } = await loginUser(userData);
        //   console.log(res.status);
        //   if (res.status == 200) {
        //     this.logMessage = `로그인되었습니다.`;
        //   }
        console.log(data);
        this.logMessage = `${data.user.username}님 로그인되었습니다.`;
        this.initForm();
      } catch (error) {
        console.log(error);
        this.initForm();
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
      //   this.logMessage = "";
    }
  }
};
</script>

<style></style>
