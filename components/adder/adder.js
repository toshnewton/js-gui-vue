const findRadius = (x, y) => { return ((x * x) * Math.PI)}

const radiusFinder = new Vue({
  el: '#radiusFinder',
  data: {
    radius: 5,
  },
  computed: {
    result: function () {
      const i = parseInt(this.radius)
      return `Radius is ${findRadius(i)}.`
    }
  }
})