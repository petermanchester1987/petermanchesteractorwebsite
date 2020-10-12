const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

imgs.forEach( img => img.addEventListener('click', imgClick));

function imgClick(e) {
  //reset opacity of all images
  imgs.forEach(img => img.style.opacity = 1);
  //change current img to source of clicked image
  current.src = e.target.src;

  
  //change opacity to variable

  e.target.style.opacity = opacity;
};