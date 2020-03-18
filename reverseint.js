

function reversedNum(num) {
    var num = -5432100
num.toString()
// num = '-5432100'

num.split('')
// num = [ '-', '5', '4', '3', '2', '1', '0', '0' ]

num.reverse()
// num = [ '0', '0', '1', '2', '3', '4', '5', '-' ]

num.join('')
// num = '0012345-'

parseFloat(num)
// num = 12345

num * Math.sign(-5432100)
// num = -12345
}

var printer=reversedNum(num);
console.log(printer);



