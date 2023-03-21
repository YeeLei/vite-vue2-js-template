<template>
  <div class="about">about</div>
</template>

<script>
import User from '@/api/user'

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {},
  created() {
    this.login()
  },
  methods: {
    async login() {
      const res = await User.login(this.username, this.password)
      console.log(res)
    },
  },
}
</script>

<style lang="scss"></style>
