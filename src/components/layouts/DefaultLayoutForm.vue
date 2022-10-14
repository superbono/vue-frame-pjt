<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
import AppFooter from "@/components/common/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style></style>
