<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>
<script></script>
<style scoped lang="scss">
#app {
  background: $bg-color;
}
</style>
