self.onmessage = () => {
  const data = compute();
  self.postMessage(data);
};

function compute() {
  console.log('Tread: You are dead now.')
  let res = 0;
  for (let i = 0; i < 1_000_000_000_0; i++) {
    res += i;
  }
  console.log('Tread: Ok, lets go', res)

  return res;
}
