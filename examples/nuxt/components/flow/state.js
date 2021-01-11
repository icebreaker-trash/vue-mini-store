import Vue from 'vue'

export function createData () {
  return {
    count: 0,
    formValue: {
      name: '',
      age: 18,
      skills: []
    }
  }
}

export function createObservableState (data) {
  return Vue.observable(data)
}

export default createObservableState(createData())
