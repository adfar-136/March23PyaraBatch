function outerFunction(number) {
  let initial=3;
  function innerFunction(newNumber) {
    initial = initial * newNumber + number;
    return initial;
  }
  return innerFunction(2);
}
console.log(outerFunction(3))// 11
