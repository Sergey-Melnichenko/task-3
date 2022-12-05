const num = 600851475143;

function myFn(n) {
  const arr = []
  let i = 2;
  while(i * i <= n) {
    if (n % i === 0) {
      n = n / i
      arr.push(n)
    }
    i += 1
  }
  return arr[arr.length - 1]
}

console.log(myFn(num))