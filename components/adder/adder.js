const area = (x) => { return ((x * x) * Math.PI)}

const adder = new Vue({
  el: '#adder',
  data: {
    firstNumber: 5
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      return `Area is ${area(i)}.`
    }
  }
})