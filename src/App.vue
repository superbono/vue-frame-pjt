<template>
  <div id="app">
    <div class="app-contents">
      <default-layout-view />
    </div>
  </div>
</template>

<script>
import DefaultLayoutView from "@/views/DefaultLayoutView";
export default {
  components: { DefaultLayoutView },
  name: "App"
};
</script>

<style>
@import "./assets/css/common.css";
/* @import "./assets/css/reset.css"; */
</style>
