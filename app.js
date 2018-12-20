
  //From EloquentJS:
function every(array, test) {
    //original code
    return !array.some(element => !test(element))
};

  //From EloquentJS:
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true