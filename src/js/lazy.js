
const isIntersecting = ( entry ) => {
  return entry.isIntersecting  // retorna true o false
}

const loadImage = ( entry ) => {
  const container   = entry.target;
  const image       = container.firstChild;
  const url         = image.dataset.src;

  debugger;
  
  image.src = url;

  observer.unobserve( container ) // => Remove Observer
}

// const observer = new IntersectionObserver(funciónQueOcurre)
const observer = new IntersectionObserver( ( entries ) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImage)
})
//
export const registerImage = ( image ) => {
  //intersectionObserver -> observer
  observer.observe( image )
}