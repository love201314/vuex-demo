<template>
  <div>
    <button @click="add">{{ addContent }}</button>
    <button @click="remove">{{ removeContent }}</button>
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  name: 'A',

  data() {
    return {
      msg: '点我增加'
    }
  },

  methods: {
    add () {
      // this.$emit('pAdd', this.msg)
      this.$parent.pAdd(this.msg)

    },
    remove () {
      this.$store.commit('remove', 2)
      console.log(this.$parent.msg1)
    }
  },

  props: ['addContent', 'removeContent']
}
</script>

<style>
</style>
