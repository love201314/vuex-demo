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

    modify () {
      this.$refs.myB.msg = '通过$refs修改了B组件的msg属性'
    }
  },

  components: {
    A,
    B
  },

  mounted() {
    this.modify()
  },
}
</script>
