let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
  let Max = 0
    for (let i=0; i<numbers.length; i++){
      if(numbers[i+1] > numbers[i])
      {Max = numbers[i+1]}
    }
  return Max
}

console.log(result(numbers));