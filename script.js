let dictionary = Object.create(null);

dictionary.apple = "Яблуко";

Object.defineProperty(dictionary, 'toString', {
  value: function() {
    return Object.keys(this).join(',');
  },
  enumerable: false
});

dictionary.__proto__ = "тест";

for(let key in dictionary) {
  alert(key); // "apple", потім "__proto__"
}

alert(dictionary); // "apple,__proto__"

Function.prototype.defer = function(ms) {
  let func = this;
  return function(...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // показує 3 після 1 секунди
