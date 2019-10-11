const area = (x) => { return ((x * x) * Math.PI)}

const adder = new Vue({
  el: '#radius',
  data: {
    radius: 5
  },
  computed: {
    result: function () {
      const i = parseInt(this.radius)
      return `Area is ${area(i)}.`
    }
  }
})