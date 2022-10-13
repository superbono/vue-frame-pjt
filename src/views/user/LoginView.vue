<template>
  <div>
    <AppHeader />
    <login-form />
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
import LoginForm from "@/components/form/LoginForm";

export default {
  components: {
    AppHeader,
    LoginForm
  }
};
</script>

<style></style>
