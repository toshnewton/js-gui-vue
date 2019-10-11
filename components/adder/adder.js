const add = (x, y) => { return ((x * x) * Math.PI)}

const adder = new Vue({
  el: '#adder',
  data: {
    firstNumber: 5,
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      return `Radius is ${add(i)}.`
    }
  }
})