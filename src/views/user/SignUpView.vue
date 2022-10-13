<template>
  <div>
    <AppHeader />
    <h1 class="page-header">회원 가입 페이지</h1>
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
import SignupForm from "@/components/form/SignUpForm.vue";

export default {
  components: {
    AppHeader,
    SignupForm
  }
};
</script>

<style></style>
