const worker = new Worker('./compute.js');
const button = document.querySelector('#id-btn');

let count = 0;

button.addEventListener(
  'click',
  () => {
    console.log('Thread is running! I am alive!' + ++count)
  }
)

const button2 = document.querySelector('#id-btn-block');

button2.addEventListener(
  'click',
  (e) => {
    worker.postMessage('start');
  }
)

worker.onmessage = (e) => {
  alert(`Your result is ${e.data}`)
}

readFile('path/to/file', (error, data) => {
  if (error) {
    console.log('not ok')
  }
  console.log('ok', data)
  writeFile(data, (error, resultsOfWriteToFile) => {
    if (error) {
      console.log('not ok')
    }
    writeFile(resultsOfWriteToFile, (error, res) => {
      if (error) {
        console.log(resultsOfWriteToFile)
      }
      console.log('good')
    })
  })
})


const promise = readFile('path/to/fole')
const resultsOfWriteToFilePromise = promise
  .then((data) => {
    console.log('ok')
    return writeFile(data);
  })
  .catch((err) => console.log('not ok'))

resultsOfWriteToFilePromise
  .then((res) => console.log('good'))
  .catch((err) => console.log(err))

async function test() {
  try {
    const data = await readFile('path/to/fole')
    console.log('ok')
    const resultsOfWriteToFile = await writeFile(data);
    const res = await writeFile(resultsOfWriteToFile);
    console.log('good')

    return res;
  } catch (error) {
    console.log('not ok')
  }
}

const promise = test();
