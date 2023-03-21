<template>
  <div>
    {{ count }}
    <button @click="this.increment">+</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      count: (state) => state.counter.count,
    }),
  },
  methods: {
    ...mapActions('counter', ['increment']),
  },
}
</script>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
