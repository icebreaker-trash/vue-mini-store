import Vue from 'vue'

export default new Vue({
  data () {
    return {
      count: 0,
      formValue: {
        name: '',
        age: 18,
        skills: []
      }
    }
  },
  // data: {

  // },
  computed: {

  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this, 'beforeMount')
  }
})
