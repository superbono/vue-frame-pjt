<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <!-- <h2>로그인페이지</h2> -->
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">id:</label>
          <input id="username" v-model="username" type="text" required />
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" v-model="password" type="text" required />
        </div>
        <button
          v-bind:disabled="!isUsernameValid || !isPasswordValid"
          type="submit"
        >
          로그인
        </button>
        <button type="reset">초기화</button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from "@/api/index";
import {
  validateUsername,
  validateEmail,
  validatePassword
} from "@/utils/validation";

export default {
  // data: 변수를 담고 초기화하는 속성
  data() {
    return {
      username: "",
      password: "",
      logMessage: ""
    };
  },
  // computed: 데이터의 변화에 따라 자동으로 계산, 감지하는 속성
  computed: {
    isUsernameValid() {
      //   console.log(this.username);
      return validateUsername(this.username);
    },
    isEmailValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return validatePassword(this.password);
    }
  },
  // methods: vue에서 사용 할 함수를 정의해 놓은 속성
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password
      };
      try {
        const { data } = await loginUser(userData);
        console.log(data);
        this.logMessage = `${data.user.username}님 로그인되었습니다.`;
        // this.initForm();
      } catch (error) {
        // console.log(error.response.data);
        this.logMessage = error.response.data;
        // this.initForm();
      } finally {
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
