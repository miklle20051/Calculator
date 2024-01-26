const readlineSync = require('readline-sync');
const calculator = {
    a: 0,
    b: 0,
    read: function() {
      this.a = parseFloat(readlineSync.question('Введите первое число: '));
      this.b = parseFloat(readlineSync.question('Введите второе число: '));
    },
    sum: function() {
      return this.a + this.b;
    },
    mul: function() {
      return this.a * this.b;
    }
  };
  
  module.exports = calculator;


