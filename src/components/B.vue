<template>
  <div>
    <!-- <p>{{ $store.state.count }}</p> -->
    <p>{{ $store.getters.optCount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'this is B compenent'
    }
  }
}
</script>

<style scoped>

</style>
