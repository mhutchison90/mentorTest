//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt(str) {
      return str.split('').reverse().join('')
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  // reverse it

  removeDups(arr) {
      let uArr = []
      arr.map(i => {

          if (!uArr.includes(i)) {
              uArr.push(i)
          }
      })
      return uArr
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt(str) {

      str = str.split(" ")
      str.map((word, i) => {
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      })
      return str.join(" ")
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter(str) {
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      let count = 0;

      str = str.split("")
      str.map((letter) => {
          if (vowels.includes(letter)) {
              count = count + 1
          }
      })
      return count
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime(num) {
      let count = 0
      if (num <= 0) {
          return false
      } else {
          for (i = num; i >= 0; i--) {
              if (num / i - Math.floor(num / i) === 0) {
                  count += 1
              }
          }
          return count <= 2 ? true : false;
      }
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}