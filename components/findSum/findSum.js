const findaSum = (x) => {
 let  sum = 0 
  for(let i =0 ; i<=x;i++){
    sum = sum + i 
  }
  return sum 
}

const findSum = new Vue({
  el: '#findSum',
  data: {
    number1: 6,
    
  },
  computed: {
    sumofNumbers: function () {
      const i = parseInt(this.number1)
      return `The sum is ${findaSum(i)}.`
    }
  }
})