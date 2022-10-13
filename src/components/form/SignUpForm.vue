<template>
  <!-- <div class="contents">
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
  </div> -->
  <div class="contents">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id:</label>
        <input id="username" type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">pw:</label>
        <input id="password" type="text" v-model="password" required />
      </div>
      <div>
        <label for="passwordConfirm">pw확인:</label>
        <input
          id="passwordConfirm"
          type="text"
          v-model="passwordConfirm"
          required
        />
        {{ password !== passwordConfirm ? "비밀번호를 확인해주세요." : "" }}
      </div>
      <hr />
      <div>
        <label for="nickname">nic:</label>
        <input id="nickname" type="text" v-model="nickname" required />
      </div>
      <div>
        <label for="email">email:</label>
        <input id="email" type="email" v-model="email" required />
        <!-- <button @click="createCode">인증하기</button> -->
      </div>
      <div>
        <!-- <label for="confirm">인증</label> -->
        <!-- <input id="confirm" type="text" />
        <button @click="confirmCode">인증확인</button> -->
        <p>
          <!-- {{
            code === "abcd"
              ? "인증번호가 일치합니다."
              : "인증번호를 확인해주세요."
          }} -->
        </p>
      </div>
      <hr />
      <div class="checkbox_group">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            v-model="arr"
            value="all"
            @change="allCheck"
          />
          <label for="checkbox">모두동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            v-model="arr"
            value="agree1"
            @change="agreeCheck"
            required
          />
          <label for="checkbox">[필수]약관동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            v-model="arr"
            value="agree2"
            @change="pvCheck"
            required
          />
          <label for="checkbox">[필수]개인정보</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            v-model="arr"
            value="select"
            @change="mkCheck"
          />
          <label for="checkbox">[선택]마케팅</label>
        </div>
        <!-- <div>{{ arr }}</div> -->
      </div>
      <div>
        <button>회원가입</button>
        <button v-on:click="goLogin">
          로그인
        </button>
        <button v-on:click="goHome">
          홈
        </button>
      </div>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
import { registerUser } from "@/api/index";

export default {
  data() {
    return {
      username: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      email: "",
      arr: [],
      allChecked: false,
      agreeChecked: false,
      pvChecked: false,
      mkChecked: false,
      code: "",
      confirm: false,
      logMessage: ""
    };
  },
  methods: {
    async submitForm(e) {
      // this.logMessage = "회원가입이 완료되었습니다.";
      e.preventDefault();
      // if (this.agreeChecked && this.pvChecked) {
      //   console.log("회원가입완료");
      //   console.log("아이디: " + this.username);
      //   console.log("비밀번호:" + this.password);
      //   console.log("이름:" + this.nickname);
      //   console.log("이메일:" + this.email);
      //   console.log("약관동의:" + this.agreeChecked);
      //   console.log("개인정보:" + this.pvChecked);
      //   console.log("마케팅:" + this.mkChecked);
      //   this.initForm();
      //   this.agreeChecked = false;
      //   this.pvChecked = false;
      //   this.mkChecked = false;
      //   this.arr = [];
      //   this.allChecked = false;
      // } else {
      //   console.log("입력폼을 확인해주세요.");
      // }
      // axios.post();
      const user = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
        email: this.email
      };
      // console.log(user);
      const { data } = await registerUser(user);
      console.log(data);
      this.logMessage = `${data.username}님이 가입되셨습니다.`;
      this.initForm();
    },
    goLogin() {
      this.$router.push("/login").catch(() => {});
    },
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.passwordConfirm = "";
      this.nickname = "";
      this.email = "";
      this.agreeChecked = false;
      this.pvChecked = false;
      this.mkChecked = false;
      this.arr = [];
      this.allChecked = false;
    },
    allCheck() {
      this.allChecked = !this.allChecked;
      if (this.allChecked) {
        this.agreeChecked = true;
        this.pvChecked = true;
        this.mkChecked = true;
        this.arr = ["all", "agree1", "agree2", "select"];
      } else {
        this.arr = [];
        this.agreeChecked = false;
        this.pvChecked = false;
        this.mkChecked = false;
      }
    },
    agreeCheck() {
      this.agreeChecked = !this.agreeChecked;
      console.log(this.agreeChecked);
    },
    pvCheck() {
      this.pvChecked = !this.pvChecked;
      console.log(this.pvChecked);
    },
    mkCheck() {
      this.mkChecked = !this.mkChecked;
      console.log(this.mkChecked);
    },
    createCode() {
      this.code = "abcd";
      // alert("인증번호를 보냈습니다.");
      console.log(this.code);
    },
    confirmCode() {
      console.log("인증번호 테스트");
    }
  }
};
</script>

<style></style>
