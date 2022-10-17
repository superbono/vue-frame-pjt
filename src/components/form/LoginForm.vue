<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<PageHeader>로그인</PageHeader>
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">아이디</label>
					<input id="username" type="text" v-model="username" required />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid">
							아이디를 확인해주세요.
						</span>
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
								? '로그인'
								: '아이디와 비밀번호를 입력해주세요.'
						}}
					</button>
					<!-- <button v-on:click="goLogin">
            로그인
          </button>
          <button v-on:click="goHome">
            홈
          </button> -->
				</div>
				<!-- <button
          v-bind:disabled="!isUsernameValid || !isPasswordValid"
          type="submit"
        >
          로그인
        </button>
        <button type="reset">초기화</button> -->
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import PageHeader from '@/components/common/PageHeader';
import { validateUsername, validatePassword } from '@/utils/validation';

export default {
	// data: 변수를 담고 초기화하는 속성
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	components: {
		PageHeader,
	},
	// computed: 데이터의 변화에 따라 자동으로 계산, 감지하는 속성
	computed: {
		isUsernameValid() {
			if (this.username === '') {
				return true;
			}
			//   console.log(this.username);
			return validateUsername(this.username);
		},
		// isEmailValid() {
		//   return validateEmail(this.username);
		// },
		isPasswordValid() {
			if (this.password === '') {
				return true;
			}
			return validatePassword(this.password);
		},
		isButtonDisabled() {
			return !this.username ||
				!this.password ||
				// !this.agreeChecked ||
				// !this.pvChecked ||
				!validateUsername(this.username) ||
				!validatePassword(this.password)
				? 'disabled'
				: null;
		},
	},
	// methods: vue에서 사용 할 함수를 정의해 놓은 속성
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
			};
			try {
				const { data } = await loginUser(userData);
				console.log(data);
				this.logMessage = `${data.user.username}님 로그인되었습니다.`;
				this.$router.push('/main').catch(() => {});
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
			this.username = '';
			this.password = '';
			//   this.logMessage = "";
		},
	},
};
</script>

<style>
.warning,
.confirm {
	font-size: 12px;
}
</style>
