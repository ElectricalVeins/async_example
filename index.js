const promise = fetch('https://api.artic.edu/api/v1/artworks/search?q=cats')

const jsonPromise = promise.then((data) => {
  return data.json()
})

jsonPromise.then((cats) => {
  console.log(cats)

  for (const cat of cats.data) {
    const image = document.createElement('img');
    image.src = cat.thumbnail.lqip;
    image.height=100
    document.body.appendChild(image);
  }
})
