<template>
  <div>
    <A :addContent="msg1" :removeContent="msg2" @pAdd="pAdd"></A>
    <hr>
    <B ref="myB"></B>
  </div>
</template>

<script>
import A from '@/components/A'
import B from '@/components/B'
export default {
  data () {
    return {
      msg1: '增加',
      msg2: '减少'
    }
  },

  methods: {
    pAdd (str='') {
      this.$store.commit('add')
      this.msg1 = str
    },

    premove () {
      console.log(this.$refs.myB.msg)
    }
  },

  components: {
    A,
    B
  },

  mounted() {
    this.premove()
  },
}
</script>
