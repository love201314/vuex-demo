<template>
  <div>
    <!-- <p>{{ $store.state.count }}</p> -->
    <p>{{ $store.getters.optCount }}</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'this is B component'
    }
  }
}
</script>

<style scoped>

</style>
