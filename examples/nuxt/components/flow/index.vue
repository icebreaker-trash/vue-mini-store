<template>
  <div>
    <h2>Flow control parent component</h2>
    <keep-alive>
      <component :is="`Step${idx}`"></component>
    </keep-alive>
    <div>
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
const requireComponent = require.context('', false, /^\.[\\/]Step\d+\.vue/)
const coms = requireComponent.keys().reduce((acc, fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.[\\/]/, '').replace(/\.\w+$/, '')
  acc[componentName] = componentConfig.default || componentConfig
  return acc
}, {})

export default {
  name: 'FlowControlComponent',
  components: {
    ...coms
  },
  data () {
    return {
      idx: 1,
      max: 3,
      min: 1
    }
  },
  methods: {
    next () {
      if (this.max > this.idx) {
        this.idx++
      }
    },
    prev () {
      if (this.min < this.idx) {
        this.idx--
      }
    }
  }
}
</script>

<style>
</style>
