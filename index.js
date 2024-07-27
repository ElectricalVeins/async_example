import { fetchCats, fetchDogs } from './api.js';

// const promise = fetch('https://api.artic.edu/api/v1/artworks/search?q=cats')
//
// const jsonPromise = promise.then((data) => {
//   return data.json()
// })

fetchCats().then((cats) => {
  console.log(cats)

  for (const cat of cats.data) {
    const image = document.createElement('img');
    image.src = cat.thumbnail.lqip;
    image.height=100
    document.body.appendChild(image);
  }
})
