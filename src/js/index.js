(() => {
  'use strict'

  const API       = 'https://randomfox.ca/images/';
  const minimum   = 1
  const maximum   = 123;


  //HTML REFERENCES

  const ADD_IMAGE_BUTTON = document.getElementById('add-btn');
  const REMOVE_IMAGES_BUTTON = document.getElementById('clean-btn');

  //End HTML REFERENCES


  const createImageNode = () => {

    const random    =  Math.floor( Math.random() * (maximum - minimum) + minimum);

    const imageContainer        = document.createElement('div');
    imageContainer.className    = "image-box";
    imageContainer.style.width  =  "320px"

    const image       = document.createElement('img');
    image.className   = "image img-fluid rounded";
    image.dataset.src         = `${ API }${ random }.jpg`;

    imageContainer.appendChild(image);

    return imageContainer;
  }

  const RenderImage = ( image ) => {
    const container = document.querySelector('.images-block');
    container.appendChild(image);
  }

  const addImage = () => {
    let image = createImageNode();
    RenderImage( image );
    registerImage( image )
  }

  const removeAllImages = () => {
      const container = document.querySelector('.images-block');
      container.innerHTML = '';
   }

  ADD_IMAGE_BUTTON.addEventListener('click', addImage);
  REMOVE_IMAGES_BUTTON.addEventListener('click', removeAllImages);

  //============ LAZY LOADING FUNCTIONALITY

  const isIntersecting = ( entry ) => {
    return entry.isIntersecting  // retorna true o false
  }

  const loadImage = ( entry ) => {
    const container   = entry.target;
    const image       = container.firstChild;
    const url         = image.dataset.src;
    
    image.src = url;

    observer.unobserve( container ) // => Remove Observer
  }

  const observer = new IntersectionObserver( ( entries ) => {
    entries
      .filter(isIntersecting)
      .forEach(loadImage)
  })
  //
  const registerImage = ( image ) => {
    observer.observe( image )
  }
  //END Lazy Loading FUNCTIONALITY

})();