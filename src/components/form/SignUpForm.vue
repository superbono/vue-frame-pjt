<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <PageHeader>회원가입</PageHeader>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">아이디</label>
          <input id="username" type="text" v-model="username" required />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid">
              아이디를 사용할 수 없습니다.
            </span>
            <!-- <span class="confirm" v-else>
              아이디를 사용할 수 있습니다.
            </span> -->
          </p>
        </div>
        <div>
          <label for="password">비밀번호</label>
          <input id="password" type="text" v-model="password" required />
          <p class="validation-text">
            <span class="warning" v-if="!isPasswordValid">
              사용할 수 없는 비밀번호입니다.
            </span>
          </p>
        </div>
        <div>
          <label for="passwordConfirm">비밀번호확인</label>
          <input
            id="passwordConfirm"
            type="text"
            v-model="passwordConfirm"
            required
          />
          <!-- {{ password !== passwordConfirm ? "비밀번호를 확인해주세요." : "" }} -->
          <p class="validation-text">
            <span class="warning" v-if="!isConfirmPasswordValid">
              비밀번호가 일치하지 않습니다.
            </span>
          </p>
        </div>
        <div>
          <label for="nickname">닉네임</label>
          <input id="nickname" type="text" v-model="nickname" required />
          <p class="validation-text">
            <span class="warning" v-if="!isNicknameValid">
              사용할 수 없는 닉네임입니다.
            </span>
          </p>
        </div>
        <div>
          <label for="email">이메일</label>
          <input id="email" type="email" v-model="email" required />
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid">
              사용할 수 없는 이메일입니다.
            </span>
          </p>
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
        <div class="btn-container">
          <!-- <button>회원가입</button> -->
          <button
            type="submit"
            class="btn"
            :class="isButtonDisabled"
            :disabled="isButtonDisabled"
          >
            {{
              isButtonDisabled === null
                ? "가입을 진행합니다."
                : "형식에 맞게 입력해주세요."
            }}
          </button>
          <!-- <button v-on:click="goLogin">
            로그인
          </button>
          <button v-on:click="goHome">
            홈
          </button> -->
        </div>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { registerUser } from "@/api/index";
import PageHeader from "@/components/common/PageHeader";
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateNickname
} from "@/utils/validation";

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
  components: {
    PageHeader
  },
  computed: {
    isUsernameValid() {
      if (this.username === "") {
        return true;
      }
      return validateUsername(this.username);
    },
    isPasswordValid() {
      if (this.password === "") {
        return true;
      }
      return validatePassword(this.password);
    },
    isConfirmPasswordValid() {
      if (this.passwordConfirm === "") {
        return true;
      }
      return this.password === this.passwordConfirm && this.password.length > 0;
    },
    isNicknameValid() {
      if (this.nickname === "") {
        return true;
      }
      return validateNickname(this.nickname);
    },
    isEmailValid() {
      if (this.email === "") {
        return true;
      }
      return validateEmail(this.email);
    },
    isAgreeValid() {
      return this.agreeChecked && this.pvChecked;
    },
    isButtonDisabled() {
      return !this.username ||
        !this.password ||
        !this.passwordConfirm ||
        !this.nickname ||
        !this.email ||
        !this.agreeChecked ||
        !this.pvChecked ||
        !validateUsername(this.username) ||
        !validatePassword(this.password) ||
        !validateNickname(this.nickname) ||
        !validateEmail(this.email)
        ? "disabled"
        : null;
    }
  },
  methods: {
    async submitForm(e) {
      e.preventDefault();
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

<style>
.form {
  width: 460px;
  height: 100%;
}
.form .validation-text {
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  /* padding: 0 300px 20px 0 !important; */
}
.btn-container {
  margin-top: 30px;
}
/* .btn {
  color: #000;
} */
.warning,
.confirm {
  font-size: 12px;
}

.log {
  width: 460px;
}
</style>
